import React, { useState, useEffect } from "react";
import "./style.css";

function DateShow() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (today) => {
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const formattedToday = dd + "/" + mm + "/" + yyyy;

    return formattedToday;
  };

  return (
    <div>
      <div className="datetime-title">Ngày tháng</div>
      <p className="datetime-time">{formatDate(dateTime)}</p>
    </div>
  );
}

export default DateShow;
