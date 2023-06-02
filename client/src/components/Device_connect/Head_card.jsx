import "./head_card.css";
import classes from "./head_card.module.css";
import timeIcon from "./3287905.png";
import { useEffect, useMemo, useState } from "react";
import { getUserDetailService } from "../../services/user";

function subtractDays(date, days) {
  date.setDate(date.getDate() + days);

  return date;
}

function pad(d) {
  return d < 10 ? "0" + d.toString() : d.toString();
}

const time_convert = (num) => {
  var hours = Math.floor(num);
  var minutes = (num * 60) % 60;
  return pad(hours) + ":" + pad(minutes);
};

const formatDate = (date) => {
  const today = date;
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = dd + "/" + mm + "/" + yyyy;
  return formattedToday;
};

const calcTime = (date) => {
  return `${date.toLocaleString("vi", {
    timeZone: "Asia/Ho_Chi_Minh",
    weekday: "long",
  })} - ${formatDate(date)}`;
};

export function HeadCard({ data, imgs, order, logos }) {
  let title = data[order].title;
  title = title.charAt(0).toUpperCase() + title.slice(1);
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

  const listSessionInDay = useMemo(() => {
    const thisDay = new Date();
    let listSessionDay = [];
    for (let i = -thisDay.getDay(); i < 7 - thisDay.getDay(); i++) {
      const sessionInDay = listSession.filter((session) => {
        const sessionDate = new Date(session.date);
        return (
          sessionDate.getDate() === subtractDays(new Date(), i).getDate() &&
          sessionDate.getMonth() === subtractDays(new Date(), i).getMonth() &&
          sessionDate.getFullYear() ===
            subtractDays(new Date(), i).getFullYear()
        );
      });
      listSessionDay.push(sessionInDay);
    }
    return listSessionDay;
  }, [listSession]);
  console.log(listSessionInDay);
  console.log(
    new Date().toLocaleString("vi", {
      timeZone: "Asia/Ho_Chi_Minh",
      weekday: "long",
    })
  );

  return (
    <div className={classes.head_cardBox}>
      <div className={classes.head_card}>
        <div className={classes.head_cardTitle}>Lịch trong tuần</div>
        <div className={classes.head_cardSubBox}>
          {listSessionInDay.map(
            (sessionInDay) =>
              sessionInDay?.length > 0 && (
                <div className={classes.head_cardSub}>
                  <div className={classes.head_cardSub_day}>
                    {calcTime(new Date(sessionInDay[0].date))}
                  </div>
                  {sessionInDay.map((session) => (
                    <div className={classes.head_cardSub_detail}>
                      <div className={classes.icon}>
                        <img src={timeIcon} className={classes.timeIcon} />
                      </div>
                      <div className={classes.classDetail}>
                        <div className={classes.classDetail_time}>
                          Thời gian: {time_convert(session.start_time)} -{" "}
                          {time_convert(
                            session.start_time + session.total_time
                          )}
                        </div>
                        <div className={classes.classDetail_name}>
                          {session.class_name}
                        </div>
                        <div className={classes.classDetail_place}>
                          Địa điểm: {session?.place}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
