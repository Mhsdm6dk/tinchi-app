import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./ca.css";
import EventMarker from "./eventMaker";

export default function CalendarCustome() {
  const [value, onChange] = useState(new Date());

  function tileContent({ date, view }) {
    // Kiểm tra nếu ngày đó có sự kiện thì hiển thị chấm đỏ
    if ((date.getDate() === 10 || date.getDate() === 11) && date.getMonth() === 5) {
      return <EventMarker />;
    }
  }

  return (
    <div>
      <Calendar onChange={onChange} tileContent={tileContent} value={value} />
    </div>
  );
}
