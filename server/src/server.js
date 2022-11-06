const express = require("express");
const connect = require("./config/db")
const { PythonShell } = require('python-shell');
const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');

const cors = require("cors");
const patientModel = require("./config/ patientModel");
const app = express();
app.use(cors());
app.use(express.json());


app.get('/patients', async (req, res) => {
    try {
        const { page } = req.query
        const total = await patientModel.count({})
        const data = await patientModel.find({}).skip(page * 10 || 0).limit(10).sort({ "createdAt": -1 });
        return res.json({
            success: true,
            data: data,
            total: total
        })
    }
    catch (error) {
        res.send(error)
    }
})
app.post('/patient', addPatient);
async function addPatient(req, res) {
    try {
        const data = await patientModel.find();
        const options = {
            args: [JSON.stringify(data), JSON.stringify([req.body])]
        };
        const result = await new Promise((resolve, reject) => {
            PythonShell.run('src/test.py', options, (err, results) => {
                if (err) return reject(err);
                return resolve(results);
            });
        });
        console.log(result)
        await patientModel.create({
            ...req.body,
            createdAt: Date.now(),
            Outcome: Number(result[1])
        })
        res.json({
            success: true
        });
    }
    catch (error) {
        res.send(error)
    }
}
app.get('/import-data', async (req, res) => {
    try {
        fs.createReadStream(path.resolve(__dirname, 'data', 'diabetes.csv'))
            .pipe(csv.parse({ headers: true }))
            .on('error', error => console.error(error))
            .on('data', row => patientModel.create({ ...row, createdAt: new Date().setDate(new Date().getDate() - Math.floor(Math.random() * 7)) }))
            .on('end', (rowCount) => console.log(`Parsed ${rowCount} rows`));
        res.send('ok');
    }
    catch (error) {
        res.send(error);
    }
})
app.get('/ti-le', async (req, res) => {
    try {
        const mac = await patientModel.count({
            Outcome: 1
        })
        const khoe = await patientModel.count({
            Outcome: 0
        })
        res.json({
            success: true,
            data: {
                mac: mac,
                khoe: khoe
            }
        })
    }
    catch (error) {
        res.send(error)
    }
})
app.get('/lastes', async (req, res) => {
    try {
        const macArray = await Promise.all([6, 5, 4, 3, 2, 1, 0].map(before => patientModel.count({
            createdAt: {
                $gte: new Date().setDate(new Date().getDate() - before - 1),
                $lt: new Date().setDate(new Date().getDate() - before)
            },
            Outcome: 1
        })))
        const khoeArray = await Promise.all([6, 5, 4, 3, 2, 1, 0].map(before => patientModel.count({
            createdAt: {
                $gte: new Date().setDate(new Date().getDate() - before - 1),
                $lt: new Date().setDate(new Date().getDate() - before)
            },
            Outcome: 0
        })))
        res.json({ macArray, khoeArray })
    }
    catch (error) {
        res.send(error)
    }
})
const port = process.env.PORT || 8080;
app.listen(port, (req, res) => {
    connect();
    console.log(`Server Started on port ${port}`)
})