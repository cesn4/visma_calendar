import React, { FunctionComponent } from "react";
import { DateTime } from "luxon";

import "./ScheduleTitle.scss";

const ScheduleTitle: FunctionComponent<ScheduleTitleProps> = ({
  date,
}: ScheduleTitleProps) => {
  const className = "schedule-title";
  const activeDate = DateTime.fromISO(date);
  const year = activeDate.year;
  const month = activeDate.monthLong;
  const weekday = activeDate.weekdayLong;
  const day = activeDate.day;
  return (
    <div className={className}>
      <div className={`${className}__box`}>
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

interface ScheduleTitleProps {
  date: string;
}

export default ScheduleTitle;