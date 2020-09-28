import React, { FunctionComponent } from "react";
import { DateTime } from "luxon";

import Icon from "../Icons";
import { SetCalendarState, SetEventFormState } from "~/store/actions";

import "./ScheduleTitle.scss";

const ScheduleTitle: FunctionComponent<ScheduleTitleProps> = ({
  date,
  calendarState,
}: ScheduleTitleProps) => {
  const className = "schedule-title";
  const activeDate = DateTime.fromISO(date);

  return (
    <div className={className}>
      <div className={`${className}__label-box`}>
        <span className={`${className}__label`}>
          Events for {activeDate.monthLong}
        </span>
        <span className={`${className}__day`}>{activeDate.day}</span>
        <span className={`${className}__label -weekday`}>
          {activeDate.weekdayLong}
        </span>
      </div>
      <div className={`${className}__button-box`}>
        <div
          onClick={() => SetCalendarState(!calendarState)}
          className={`${className}__calendar-icon`}
        >
          <Icon name="calendar" />
        </div>
        <Icon name="add" onClick={() => SetEventFormState(true)} />
      </div>
    </div>
  );
};

export interface ScheduleTitleProps {
  date: string;
  calendarState: boolean;
}

export default ScheduleTitle;
