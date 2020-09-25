import React, { FunctionComponent } from "react";
import { DateTime } from "luxon";

import "./ScheduleTitle.scss";
import Icon from "../Icons";

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
      <div className={`${className}__label-box`}>
        <span className={`${className}__label`}>Events for {month}</span>
        <div className={`${className}__day-box`}>
          <span className={`${className}__day`}>{day}</span>
        </div>
        <span className={`${className}__label -weekday`}>{weekday}</span>
      </div>
      <div className={`${className}__button-box`}>
        <Icon name="calendar" className={`${className}__calendar-icon`} />
        <Icon name="add" />
      </div>
    </div>
  );
};

interface ScheduleTitleProps {
  date: string;
}

export default ScheduleTitle;
