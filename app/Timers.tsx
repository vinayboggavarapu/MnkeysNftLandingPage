"use client";
import GlobalState from "@/context/globalStates";
import React, { useContext, useEffect, useState } from "react";

const Timers = () => {
  const target = new Date("Thu Nov 08 2023 11:32:37").getTime();
  const [current, setCurrent] = useState(new Date().getTime());

  const timeLeft = target - current;
  //   const [timer, settimer] = useContext(GlobalState);

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const remainingDays = Math.floor(timeLeft / days);
  const remainingHours = Math.floor((timeLeft % days) / hours);
  const remainingMinutes = Math.floor((timeLeft % hours) / minutes);
  const remainingSeconds = Math.floor((timeLeft % minutes) / seconds);

  useEffect(() => {
    setTimeout(() => {
      setCurrent(new Date().getTime());
      //   settimer(timeLeft);
    }, 1000);
  });
  return (
    <div>
      <table className="timer">
        <thead></thead>
        <tbody>
          <tr>
            <th>{remainingDays}</th>&nbsp;&nbsp;
            <th>{remainingHours}</th>&nbsp;&nbsp;
            <th>{remainingMinutes}</th>&nbsp;&nbsp;
            <th>{remainingSeconds}</th>&nbsp;&nbsp;
          </tr>
          <tr>
            <td>Days</td>&nbsp;&nbsp;
            <td>Hours</td>&nbsp;&nbsp;
            <td>Minutes</td>&nbsp;&nbsp;
            <td>Seconds</td>&nbsp;&nbsp;
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Timers;
