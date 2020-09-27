import React, { FunctionComponent } from "react";
import { DateTime } from "luxon";

import "./ScheduleTitle.scss";
import Icon from "../Icons";
import { SetCalendarState, SetEventFormState } from "~/store/actions";

const ScheduleTitle: FunctionComponent<ScheduleTitleProps> = ({
  date,
  calendarState,
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
          <span className={`${className}__day`}>{day}</span>
        <span className={`${className}__label -weekday`}>{weekday}</span>
      </div>
      <div className={`${className}__button-box`}>
        <div className={`${className}__calendar-icon`}>
          <Icon
            onClick={() => SetCalendarState(!calendarState)}
            name="calendar"
          />
        </div>
        <Icon name="add" onClick={() => SetEventFormState(true)} />
      </div>
    </div>
  );
};

interface ScheduleTitleProps {
  date: string;
  calendarState: boolean;
}

export default ScheduleTitle;
