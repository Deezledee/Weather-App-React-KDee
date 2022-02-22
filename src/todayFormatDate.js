import React from "react";

export default function todayFormatDate(props) {
  let date = new Date(props);
  let currentHour = props.date.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  let currentMinutes = props.date.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let currentDay = days[props.date.getDay()];
  let currentMonth = months[props.date.getMonth()];
  let currentDate = props.date.getDate();
  let formattedDate = `${currentDay}, ${currentMonth} ${currentDate}, ${currentHour}:${currentMinutes}`;
  return formattedDate;
}
let now = new Date();
let h3 = document.querySelector(".date");
h3.innerHTML = `${todayFormatDate(now)}`;

function formatDay(props) {
  let date = new Date(props * 1000);
  let day = props.date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return props.days[day];
}
