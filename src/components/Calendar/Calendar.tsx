import React, { FunctionComponent } from "react";
import { DateTime } from "luxon";

import "./Calendar.scss";

const Calendar: FunctionComponent = () => {
  const className = "calendar";
  const activeMonth = DateTime.local(2019, 9, 1);
  const totalDaysNumber = activeMonth.daysInMonth;

  // Month start blank days
  const firstWeekday = activeMonth.weekday;
  let startBlankArray: Array<number> = [];
  const startBlankDayNumber = firstWeekday - 1;
  if (startBlankDayNumber !== 0) {
    startBlankArray = Array.from({ length: startBlankDayNumber }, (_) => 0);
  }

  // Month days
  const daysArray: Array<number> = Array.from(
    { length: totalDaysNumber },
    (_, i) => i + 1
  );

  //Month end blank days
  const lastWeekday = DateTime.local(2019, 9, totalDaysNumber).weekday;
  const endBlankDayNumber = 7 - lastWeekday;
  let endBlankArray: Array<number> = [];
  if (endBlankDayNumber !== 0) {
    endBlankArray = Array.from({ length: endBlankDayNumber }, (_) => 0);
  }

  const finalDaysArray = [...startBlankArray, ...daysArray, ...endBlankArray];

  const daysFillter: Function = (day: number) => {
    const array: Array<number> = finalDaysArray.filter((days, index) => {
      return (
        index + 1 === day ||
        index + 1 === day + 7 ||
        index + 1 === day + 14 ||
        index + 1 === day + 21 ||
        index + 1 === day + 28 ||
        index + 1 === day + 35
      );
    });
    return array;
  };

  console.log(daysFillter(1));

  const weekDays: Array<string> = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
  ];

  const renderWeekDays = weekDays.map((day, index) => {
    return (
      <div key={index.toString() + "days"} className={`${className}__days`}>
        {day}
      </div>
    );
  });
  return (
    <div className={className}>
      <div className={`${className}__week-days`}>{renderWeekDays}</div>
    </div>
  );
};

export default Calendar;
