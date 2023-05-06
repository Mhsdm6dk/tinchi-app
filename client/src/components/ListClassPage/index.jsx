import React, { useEffect, useState } from "react";
import classes from "./styles.module.css";
import timeIcon from "../Device_connect/3287905.png";
import moveRight from "./right-arrow-icon-png-7.jpg";
import classroomIcon from "../Device_connect/google-classroom.png";
import { Avatar } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link, useHistory, useParams } from "react-router-dom";
import { getUserDetailService } from "../../services/user";

const ListClassPage = () => {
  const [listClass, setListClass] = useState([]);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const result = await getUserDetailService(userInfo?.id);
        setListClass(result?.listClass);
      } catch (error) {
        console.log(error);
      }
    };
    getUserInfo();
  }, []);
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
          {listClass?.map((classDetail) => (
            <Link
              to={`/class-detail/${classDetail?.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className={classes.head_cardSub_detail}>
                <div style={{ display: "flex", flex: 1 }}>
                  <div className={classes.icon}>
                    <img src={classroomIcon} className={classes.timeIcon} />
                  </div>
                  <div className={classes.classDetail}>
                    <div className={classes.classDetail_name}>
                      {classDetail?.subject.name}
                    </div>
                    <div className={classes.classDetail_place}>
                      Sĩ số: {classDetail?.total_student}
                    </div>
                    <div className={classes.classDetail_time}>
                      <span style={{ color: "black" }}>Trạng thái: </span>
                      {classDetail?.status}
                    </div>
                  </div>
                </div>
                <img src={moveRight} style={{ width: "25px" }} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListClassPage;
