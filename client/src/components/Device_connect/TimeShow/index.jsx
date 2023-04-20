import React, { useState, useEffect } from "react";
import "./style.css";

function DateTime() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const formatTime = (date) => {
    const options = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    };
    return date.toLocaleTimeString("en-US", options);
  };

  return (
    <div>
      <div className="datetime-title">Thời gian</div>
      <p className="datetime-time">{formatTime(dateTime)}</p>
    </div>
  );
}

export default DateTime;
