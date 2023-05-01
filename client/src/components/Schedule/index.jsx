import React, { useState } from "react";
import classes from "./styles.module.css";
import timeIcon from "../Device_connect/3287905.png";
import moveRight from "./right-arrow-icon-png-7.jpg";
import CalendarCustome from "../CalendarCustom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";

function Schedule() {
  return (
    <div className={classes.addClassBackground}>
      <div className={classes.returnButtonBox}>
        <Link to={"/Home"}>
          <KeyboardBackspaceIcon className={classes.returnButton} />
        </Link>
      </div>
      <CalendarCustome />
      {/* <div className={classes.scheduleTitle}>Lich hoc</div> */}
      <div className={classes.listClassBox}>
        <div className={classes.head_cardSub_detail}>
          <div style={{ display: "flex", flex: 1 }}>
            <div className={classes.icon}>
              <img src={timeIcon} className={classes.timeIcon} />
            </div>
            <div className={classes.classDetail}>
              <div className={classes.classDetail_time}>
                Thời gian: 16:00 - 18:00
              </div>
              <div className={classes.classDetail_name}>
                Kho dữ liệu và khai phá dữ liệu
              </div>
              <div className={classes.classDetail_place}>Địa điểm: 405-A2</div>
            </div>
          </div>
          <img src={moveRight} style={{ width: "25px" }} />
        </div>
        <div className={classes.head_cardSub_detail}>
          <div style={{ display: "flex", flex: 1 }}>
            <div className={classes.icon}>
              <img src={timeIcon} className={classes.timeIcon} />
            </div>
            <div className={classes.classDetail}>
              <div className={classes.classDetail_time}>
                Thời gian: 16:00 - 18:00
              </div>
              <div className={classes.classDetail_name}>
                Kho dữ liệu và khai phá dữ liệu
              </div>
              <div className={classes.classDetail_place}>Địa điểm: 405-A2</div>
            </div>
          </div>
          <img src={moveRight} style={{ width: "25px" }} />
        </div>
        <div className={classes.head_cardSub_detail}>
          <div style={{ display: "flex", flex: 1 }}>
            <div className={classes.icon}>
              <img src={timeIcon} className={classes.timeIcon} />
            </div>
            <div className={classes.classDetail}>
              <div className={classes.classDetail_time}>
                Thời gian: 16:00 - 18:00
              </div>
              <div className={classes.classDetail_name}>
                Kho dữ liệu và khai phá dữ liệu
              </div>
              <div className={classes.classDetail_place}>Địa điểm: 405-A2</div>
            </div>
          </div>
          <img src={moveRight} style={{ width: "25px" }} />
        </div>
      </div>
    </div>
  );
}

export default Schedule;
