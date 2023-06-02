import React, { useEffect, useMemo, useState } from "react";
import classes from "./styles.module.css";
import timeIcon from "../Device_connect/3287905.png";
import moveRight from "./right-arrow-icon-png-7.jpg";
import CalendarCustome from "../CalendarCustom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
import { getUserDetailService } from "../../services/user";

function pad(d) {
  return d < 10 ? "0" + d.toString() : d.toString();
}

const time_convert = (num) => {
  var hours = Math.floor(num);
  var minutes = (num * 60) % 60;
  return pad(hours) + ":" + pad(minutes);
};

function Schedule() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [listClass, setListClass] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
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

  const listSession = useMemo(() => {
    let sessions = [];
    listClass.forEach((classDetail) => {
      sessions = sessions.concat(
        (classDetail?.sessionList || []).map((detail) => ({
          ...detail,
          class_name: classDetail?.subject.name,
          class_id: classDetail?.id,
        }))
      );
    });
    return sessions;
  }, [listClass]);

  const sessionInSelectedDate = useMemo(() => {
    return listSession.filter((session) => {
      const session_date = new Date(session.date);
      return (
        session_date.getDate() == selectedDate.getDate() &&
        session_date.getMonth() == selectedDate.getMonth() &&
        session_date.getFullYear() == selectedDate.getFullYear()
      );
    });
  }, [selectedDate, listSession]);

  return (
    <div className={classes.addClassBackground}>
      <div className={classes.header}>
        <div className={classes.returnButtonBox}>
          <Link to={"/Home"}>
            <KeyboardBackspaceIcon className={classes.returnButton} />
          </Link>
        </div>
        Thời khóa biểu
      </div>
      <div className={classes.body}>
        <CalendarCustome
          listSession={listSession}
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
        />
        {/* <div className={classes.scheduleTitle}>Lich hoc</div> */}
        <div className={classes.listClassBox}>
          {sessionInSelectedDate?.map((session) => (
            <Link
              to={`/class-detail/${session.class_id}`}
              style={{
                color: "black",
                textDecoration: "none",
              }}
            >
              <div className={classes.head_cardSub_detail}>
                <div style={{ display: "flex", flex: 1 }}>
                  <div className={classes.icon}>
                    <img src={timeIcon} className={classes.timeIcon} />
                  </div>
                  <div className={classes.classDetail}>
                    <div className={classes.classDetail_time}>
                      Thời gian: {time_convert(session.start_time)} -{" "}
                      {time_convert(session.start_time + session.total_time)}
                    </div>
                    <div className={classes.classDetail_name}>
                      {session?.class_name}
                    </div>
                    <div className={classes.classDetail_place}>
                      Địa điểm: {session?.place}
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
}

export default Schedule;
