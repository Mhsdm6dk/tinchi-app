import React, { useState } from "react";
import "./Table.css";

const ClassDetailTable = () => {
  const [items, setItems] = useState([
    {
      name: "Dương Bá Nam",
      phone: "0966835112",
    },
    {
      name: "Nguyễn Văn Hiếu",
      phone: "0962543523",
    },
    {
      name: "Lê Văn Tài",
      phone: "0962543423",
    },
    {
      name: "Dương Bá Nam",
      phone: "0966835112",
    },
    {
      name: "Nguyễn Văn Hiếu",
      phone: "0962543523",
    },
    {
      name: "Lê Văn Tài",
      phone: "0962543423",
    },
    {
        name: "Dương Bá Nam",
        phone: "0966835112",
      },
      {
        name: "Nguyễn Văn Hiếu",
        phone: "0962543523",
      },
      {
        name: "Lê Văn Tài",
        phone: "0962543423",
      },
      {
        name: "Dương Bá Nam",
        phone: "0966835112",
      },
      {
        name: "Nguyễn Văn Hiếu",
        phone: "0962543523",
      },
      {
        name: "Lê Văn Tài",
        phone: "0962543423",
      },
      {
        name: "Dương Bá Nam",
        phone: "0966835112",
      },
      {
        name: "Nguyễn Văn Hiếu",
        phone: "0962543523",
      },
      {
        name: "Lê Văn Tài",
        phone: "0962543423",
      },
      {
        name: "Dương Bá Nam",
        phone: "0966835112",
      },
      {
        name: "Nguyễn Văn Hiếu",
        phone: "0962543523",
      },
      {
        name: "Lê Văn Tài",
        phone: "0962543423",
      },    {
        name: "Dương Bá Nam",
        phone: "0966835112",
      },
      {
        name: "Nguyễn Văn Hiếu",
        phone: "0962543523",
      },
      {
        name: "Lê Văn Tài",
        phone: "0962543423",
      },
  ]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>STT</th>
          <th>Tên sinh viên</th>
          <th>Số điện thoại</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClassDetailTable;
