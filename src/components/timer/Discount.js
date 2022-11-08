import React, { useState } from "react";
import "./timer.scss";

function Discount(props) {
  const [days, setDays] = useState(0);
  const [disHours, setDisHours] = useState(0);
  const [disMinutes, setDisMinutes] = useState(0);
  const [disSeconds, setDisSeconds] = useState(0);

  const deadline = "2022-12-10";

  const getTime = (endTime) => {
    const total = Date.parse(endTime) - Date.parse(new Date());
    const days = Math.floor(total / 1000 / 3600 / 24);
    const hours = Math.floor((total / 1000 / 3600) % 24);
    const minutes = Math.floor(
      (total - days * 24 * 3600 * 1000 - hours * 3600 * 1000) / 1000 / 60
    );
    const seconds = Math.floor(
      (total -
        days * 24 * 3600 * 1000 -
        hours * 3600 * 1000 -
        minutes * 60 * 1000) /
        1000
    );
    return { days, hours, minutes, seconds, total };
  };

  const getZero = (number) => {
    if (number > 0 && number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  };

  const updateClock = () => {
    const timer = getTime(deadline);
    setDays(getZero(timer.days));
    setDisHours(getZero(timer.hours));
    setDisMinutes(getZero(timer.minutes));
    setDisSeconds(getZero(timer.seconds));
    if (timer.total === 0) {
      clearInterval(timeInterval);
    }
  };
  const timeInterval = setInterval(updateClock, 1000);
  return (
    <div className="timer">
      <div className="for_image">
        <img
          src="https://assets.asaxiy.uz/uploads/toptoday/mobile/6367f5fce9066.jpeg"
          alt="timer_banner"
        />
      </div>
      <div className="for_discount_timer">
        <div className="discount_days">{days}</div>
        <div className="discount_hours">{disHours}</div>
        <div className="discount_minutes">{disMinutes}</div>
        <div className="discount_seconds">{disSeconds}</div>
      </div>
    </div>
  );
}

export default Discount;
