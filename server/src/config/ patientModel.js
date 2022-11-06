const mongoose = require('mongoose')
const patientSchema = new mongoose.Schema({
    Pregnancies: Number,
    Glucose: Number,
    BloodPressure: Number,
    SkinThickness: Number,
    Insulin: Number,
    BMI: Number,
    DiabetesPedigreeFunction: Number,
    Age: Number,
    Outcome: Number,
    createdAt: Date
})
const patientModel = mongoose.model('patient', patientSchema);
module.exports = patientModel;