import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./ca.css";
import EventMarker from "./eventMaker";

export default function CalendarCustome({
  listSession,
  selectedDate,
  setSelectedDate,
}) {

  function tileContent({ date, view }) {
    // Kiểm tra nếu ngày đó có sự kiện thì hiển thị chấm đỏ
    if (
      listSession.find((session) => {
        const session_date = new Date(session.date);
        return (
          session_date.getDate() == date.getDate() &&
          session_date.getMonth() == date.getMonth() &&
          session_date.getFullYear() == date.getFullYear()
        );
      })
    ) {
      return <EventMarker />;
    }
  }

  return (
    <div>
      <Calendar
        onChange={setSelectedDate}
        tileContent={tileContent}
        value={selectedDate}
      />
    </div>
  );
}
