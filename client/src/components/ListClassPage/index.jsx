import React from "react";
import classes from "./styles.module.css";
import timeIcon from "../Device_connect/3287905.png";
import moveRight from "./right-arrow-icon-png-7.jpg";
import classroomIcon from "../Device_connect/google-classroom.png";
import { Avatar } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link, useHistory } from "react-router-dom";

const ListClassPage = () => {
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
        Danh sách lớp học
      </div>
      <div className={classes.body}>
        <div className={classes.listClassBox}>
          <Link to="/class-detail">
            <div className={classes.head_cardSub_detail}>
              <div style={{ display: "flex", flex: 1 }}>
                <div className={classes.icon}>
                  <img src={classroomIcon} className={classes.timeIcon} />
                </div>
                <div className={classes.classDetail}>
                  <div className={classes.classDetail_name}>
                    Kho dữ liệu và khai phá dữ liệu
                  </div>
                  <div className={classes.classDetail_place}>Sĩ số: 30</div>
                  <div className={classes.classDetail_time}>
                    <span style={{ color: "black" }}>Trạng thái: </span>
                    OPEN
                  </div>
                </div>
              </div>
              <img src={moveRight} style={{ width: "25px" }} />
            </div>
          </Link>
          <div className={classes.head_cardSub_detail}>
            <div style={{ display: "flex", flex: 1 }}>
              <div className={classes.icon}>
                <img src={classroomIcon} className={classes.timeIcon} />
              </div>
              <div className={classes.classDetail}>
                <div className={classes.classDetail_name}>
                  Kho dữ liệu và khai phá dữ liệu
                </div>
                <div className={classes.classDetail_place}>Sĩ số: 30</div>
                <div className={classes.classDetail_time}>
                  <span style={{ color: "black" }}>Trạng thái: </span>
                  OPEN
                </div>
              </div>
            </div>
            <img src={moveRight} style={{ width: "25px" }} />
          </div>
          <div className={classes.head_cardSub_detail}>
            <div style={{ display: "flex", flex: 1 }}>
              <div className={classes.icon}>
                <img src={classroomIcon} className={classes.timeIcon} />
              </div>
              <div className={classes.classDetail}>
                <div className={classes.classDetail_name}>
                  Kho dữ liệu và khai phá dữ liệu
                </div>
                <div className={classes.classDetail_place}>Sĩ số: 30</div>
                <div className={classes.classDetail_time}>
                  <span style={{ color: "black" }}>Trạng thái: </span>
                  OPEN
                </div>
              </div>
            </div>
            <img src={moveRight} style={{ width: "25px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListClassPage;
