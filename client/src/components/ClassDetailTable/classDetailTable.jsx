import React, { useState } from "react";
import "./Table.css";

const ClassDetailTable = ({ listStudent }) => {
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
        {listStudent.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item?.name}</td>
            <td>{item?.phone_number}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClassDetailTable;
