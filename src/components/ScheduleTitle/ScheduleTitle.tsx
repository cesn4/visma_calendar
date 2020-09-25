import React, { FunctionComponent } from "react";
import { DateTime } from "luxon";

import "./ScheduleTitle.scss";

const ScheduleTitle: FunctionComponent<ScheduleTitleProps> = ({
  date,
}: ScheduleTitleProps) => {
  const className = "schedule-title";
  const activeDate = DateTime.fromISO(date);
  const month = activeDate.monthLong;
  const weekday = activeDate.weekdayLong;
  const day = activeDate.day;

  return (
    <div className={className}>
      <span className={`${className}__label`}>Events for {month}</span>
      <span className={`${className}__day`}>{day}</span>
      <span className={`${className}__label -weekday`}>{weekday}</span>
    </div>
  );
};

interface ScheduleTitleProps {
  date: string;
}

export default ScheduleTitle;
