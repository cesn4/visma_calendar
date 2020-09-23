import React, { FunctionComponent } from "react";
import { DateTime } from "luxon";

import "./Schedule.scss";

const Schedule: FunctionComponent<ScheduleProps> = ({
  date,
}: ScheduleProps) => {
  const className = "schedule";
  const activeDate = DateTime.fromISO(date);
  const year = activeDate.year;
  const month = activeDate.monthLong;
  const weekday = activeDate.weekdayLong;
  const day = activeDate.day;
  return (
    <div className={className}>
      <div className={`${className}__label-box`}>
        <div className={`${className}__day-box`}>
          <span className={`${className}__day`}>{day}</span>
          <span className={`${className}__day`}>{weekday}</span>
        </div>
        <div className={`${className}__date-box`}>
          <span className={`${className}__date`}>{month}</span>
          <span className={`${className}__date`}>{year}</span>
        </div>
      </div>
    </div>
  );
};

interface ScheduleProps {
  date: string;
}

export default Schedule;
