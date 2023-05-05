import React from "react";
import classes from "./styles.module.css";
import timeIcon from "../Device_connect/3287905.png";
import moveRight from "./right-arrow-icon-png-7.jpg";
import classroomIcon from "../Device_connect/3135715.png";
import { Avatar } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link, useHistory } from "react-router-dom";
import ClassDetailTable from "../ClassDetailTable/classDetailTable";

const ClassDetail = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const history = useHistory();
  return (
    <div className={classes.listClassPageBackGround}>
      <div className={classes.header}>
        <div className={classes.returnButtonBox}>
          <Link to={"/Home"}>
            <KeyboardBackspaceIcon className={classes.returnButton} />
          </Link>
        </div>
        Chi tiết lớp học
      </div>
      <div className={classes.body}>
        <div className={classes.listClassBox}>
          <div className={classes.head_cardSub_detailBox}>
            <h5
              style={{
                margin: "10px",
                position: "relative",
                top: "10px",
                fontWeight: "bold",
              }}
            >
              Giảng viên
            </h5>
            <div className={classes.head_cardSub_detail}>
              <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
                <div className={classes.icon}>
                  <img src={classroomIcon} className={classes.timeIcon} />
                </div>
                <div className={classes.classDetail}>
                  <div className={classes.classDetail_place}>
                    <b>Họ và tên: </b> Phạm Văn Cường
                  </div>
                  <div className={classes.classDetail_place}>
                    <b>Email: </b> hanh1452001@gmail.com
                  </div>
                  <div className={classes.classDetail_place}>
                    <b>Số điện thoại: </b> 0966835110
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ClassDetailTable/>
      </div>
    </div>
  );
};

export default ClassDetail;
