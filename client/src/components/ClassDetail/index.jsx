import React, { useEffect, useState } from "react";
import classes from "./styles.module.css";
import timeIcon from "../Device_connect/3287905.png";
import moveRight from "./right-arrow-icon-png-7.jpg";
import classroomIcon from "../Device_connect/3135715.png";
import { Avatar } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link, useHistory, useParams } from "react-router-dom";
import ClassDetailTable from "../ClassDetailTable/classDetailTable";
import { getClassDetailService } from "../../services/class";

const ClassDetail = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [listStudent, setListStudent] = useState([]);
  const [listTeacher, setListTeacher] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getClassDetail = async () => {
      try {
        const classDetail = await getClassDetailService(id);
        console.log(classDetail);
        setListStudent(
          classDetail?.listUserInfo?.filter((user) => user.role === 0)
        );
        setListTeacher(
          classDetail?.listUserInfo?.filter((user) => user.role === 1)
        );
      } catch (error) {
        console.log(error);
      }
    };
    getClassDetail();
  }, [id]);
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
        {listTeacher?.length > 0 && (
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
                      <b>Họ và tên: </b> {listTeacher[0]?.name}
                    </div>
                    <div className={classes.classDetail_place}>
                      <b>Email: </b> {listTeacher[0]?.email}
                    </div>
                    <div className={classes.classDetail_place}>
                      <b>Số điện thoại: </b>
                      {listTeacher[0]?.phone_number}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {listStudent?.length > 0 && (
          <ClassDetailTable listStudent={listStudent} />
        )}
      </div>
    </div>
  );
};

export default ClassDetail;
