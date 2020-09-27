import React, { FunctionComponent, useState } from "react";
import { DateTime } from "luxon";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { weekdays } from "~/mocks/optionsMocks";
import Icon from "../Icons";
import { SetCalendarState } from "~/store/actions";

import "./Calendar.scss";

const Calendar: FunctionComponent<CalendarProps> = ({
  activeDate,
}: CalendarProps) => {
  const className = "calendar";
  const currentDay = DateTime.local().day;
  const currentMonth = DateTime.local().month;
  const currentYear = DateTime.local().year;
  const activeScheduleDate = DateTime.fromISO(activeDate);
  const [activeCalendarMonth, setActiveCalendarMonth] = useState(currentMonth);
  const [activeCalendarYear, setActiveCalendarYear] = useState(currentYear);

  const month = DateTime.local(activeCalendarYear, activeCalendarMonth, 1);
  const totalDaysNumber = month.daysInMonth;
  const monthName = month.monthLong;

  // Month start blank days
  const firstWeekday = month.weekday;
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
  const lastWeekday = DateTime.local(
    activeCalendarYear,
    activeCalendarMonth,
    totalDaysNumber
  ).weekday;
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

  const renderCalendarContent = weekdays.map((weekday, index) => {
    const days = daysFillter(index + 1);
    const renderDays = days.map((day: number, index: number) => {
      const monthISO = activeCalendarMonth.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      const dayISO = day.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      return (
        <Link
          to={`${activeCalendarYear}-${monthISO}-${dayISO}`}
          key={index.toString() + "day"}
          className={classNames(`${className}__day`, {
            "-blank": day === 0,
            "-current":
              currentMonth === activeCalendarMonth &&
              currentDay === day &&
              activeCalendarYear === currentYear,
            "-active":
              activeCalendarMonth === activeScheduleDate.month &&
              day === activeScheduleDate.day &&
              activeCalendarYear === activeScheduleDate.year,
          })}
          onClick={() => SetCalendarState(false)}
        >
          {day}
        </Link>
      );
    });

    return (
      <div
        key={index.toString() + "weekday"}
        className={`${className}__column`}
      >
        <div className={`${className}__weekday`}>{weekday}</div>
        {renderDays}
      </div>
    );
  });

  return (
    <div className={className}>
      <div className={`${className}__date-box`}>
        <button
          className={`${className}__button`}
          onClick={() =>
            setActiveCalendarMonth((e) => {
              if (e === 1) {
                setActiveCalendarYear((e) => e - 1);
                return 12;
              } else return e - 1;
            })
          }
        >
          <Icon name="leftArrow" size={30} />
        </button>
        <span className={`${className}__label`}>{monthName}</span>
        <span className={`${className}__label`}>{month.year}</span>
        <button
          className={`${className}__button`}
          onClick={() =>
            setActiveCalendarMonth((e) => {
              if (e === 12) {
                setActiveCalendarYear((e) => e + 1);
                return 1;
              } else return e + 1;
            })
          }
        >
          <Icon name="rightArrow" size={30} />
        </button>
      </div>
      <div className={`${className}__calendar-box`}>
        {renderCalendarContent}
      </div>
    </div>
  );
};

interface CalendarProps {
  activeDate: string;
}

export default Calendar;
