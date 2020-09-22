import React, { FunctionComponent } from "react";
import { DateTime } from "luxon";

import "./Calendar.scss";

const Calendar: FunctionComponent = () => {
  const className = "calendar";
  const activeMonth = DateTime.local(2019, 9, 1);
  const totalDaysNumber = activeMonth.daysInMonth;

  // Month start blank days
  const firstWeekday = activeMonth.weekday;
  let startBlankArray: Array<null> = [];
  const startBlankDayNumber = firstWeekday - 1;
  if (startBlankDayNumber !== 0) {
    startBlankArray = Array.from(
      { length: startBlankDayNumber },
      (_, i) => null
    );
  }

  // Month days
  const daysArray: Array<number> = Array.from(
    { length: totalDaysNumber },
    (_, i) => i + 1
  );

  //Month end blank days
  const lastWeekday = DateTime.local(2019, 9, totalDaysNumber).weekday;
  const endBlankDayNumber = 7 - lastWeekday;
  let endBlankArray: Array<null> = [];
  if (endBlankDayNumber !== 0) {
    endBlankArray = Array.from({ length: endBlankDayNumber }, (_, i) => null);
  }

  const finalDaysArray = [...startBlankArray, ...daysArray, ...endBlankArray];
  console.log(finalDaysArray);
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
  console.log(daysArray);
  console.log(activeMonth);
  console.log(firstWeekday);
  console.log(totalDaysNumber);
  return (
    <div className={className}>
      <div className={`${className}__week-days`}>{renderWeekDays}</div>
    </div>
  );
};

export default Calendar;
