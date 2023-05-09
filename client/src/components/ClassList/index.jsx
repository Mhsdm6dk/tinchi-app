import React, { useEffect, useState } from "react";
import classes from "./styles.module.css";
import "./styles.css";
import { addClassService, checkScheduleService } from "../../services/class";
import { Alert, AlertTitle, Button } from "@mui/material";

function ClassList({ results = [], listClass = [] }) {
  const [listIdChecked, setListIdChecked] = useState([]);
  const [displayError, setDisplayError] = useState(false);
  const [displaySuccess, setDisplaySuccess] = useState(false);

  useEffect(() => {
    setListIdChecked(listClass.map((classDetail) => classDetail?.id));
  }, [listClass]);
  const handleCheckboxChange = async (event, class_id) => {
    const checkId = listIdChecked.find((id) => id === class_id);
    if (checkId) {
      setListIdChecked((listIdChecked) =>
        listIdChecked.filter((id) => id !== class_id)
      );
    } else {
      const checkScheduleResult = await checkScheduleService(
        listIdChecked.concat([class_id])
      );
      if (checkScheduleResult) {
        setListIdChecked((listIdChecked) => listIdChecked.concat([class_id]));
      } else {
        setDisplayError(true);
      }
    }
  };

  const handleAddClass = async () => {
    const checkAddClassResult = await addClassService(listIdChecked);
    if (checkAddClassResult) {
      setDisplaySuccess(true);
    } else {
      setDisplayError(true);
    }
  };

  return (
    <div className={classes.listClassBox}>
      {displayError && (
        <div
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            top: "0px",
            left: "0px",
            background: "#0000004d",
          }}
        >
          <Alert
            severity="error"
            style={{
              position: "fixed",
              top: "30vh",
              left: "50vw",
              zIndex: 10000,
              width: "80vw",
              transform: "translate(-50%)",
            }}
            onClose={() => {
              setDisplayError(false);
            }}
          >
            <AlertTitle>Có lỗi xảy ra</AlertTitle>
            <strong>
              Thời khóa biểu bị trùng, vui lòng chọn môn học khác!
            </strong>
          </Alert>
        </div>
      )}
      {displaySuccess && (
        <div
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            top: "0px",
            left: "0px",
            background: "#0000004d",
          }}
        >
          <Alert
            severity="success"
            style={{
              position: "fixed",
              top: "30vh",
              left: "50vw",
              zIndex: 10000,
              width: "80vw",
              transform: "translate(-50%)",
            }}
            onClose={() => {
              setDisplaySuccess(false);
            }}
          >
            <AlertTitle>Đăng kí môn học thành công</AlertTitle>
            <strong>Vui lòng kiểm tra thời khóa biểu</strong>
          </Alert>
        </div>
      )}
      <ul className="product-items">
        {results?.map((class_item) => (
          <li className={classes.classBox} key={class_item.id}>
            <span>
              {class_item?.subject.name} - {class_item?.group}
            </span>
            <input
              type="checkbox"
              checked={
                listIdChecked.find((id) => id === class_item.id) ? true : false
              }
              onChange={(event) => handleCheckboxChange(event, class_item.id)}
            />
          </li>
        ))}
      </ul>
      <Button
        className={classes.button}
        onClick={handleAddClass}
        variant="contained"
      >
        Lưu đăng kí
      </Button>
    </div>
  );
}

export default ClassList;
