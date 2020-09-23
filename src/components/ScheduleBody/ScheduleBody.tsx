import React, { FunctionComponent, ReactNode } from "react";
import { DateTime } from "luxon";

import { ScheduleProps } from "~/sections/Schedule/Schedule";

import "./ScheduleBody.scss";

const ScheduleBody: FunctionComponent<ScheduleProps> = ({
  date,
  repetitiveEvents,
  uniqueEvents,
}: ScheduleProps) => {
  const className = "schedule-body";

  const month = DateTime.fromISO(date).month;
  const year = DateTime.fromISO(date).year;
  const monthInfo = DateTime.local(year, month, 1).weekday;
  console.log(monthInfo)

  const weekday: string = DateTime.fromISO(date).weekdayShort;
  const renderUniqueEvents = uniqueEvents.map(
    (obj, index): ReactNode => {
      if (obj.date === date) {
        return (
          <div key={index.toString() + "unique event"}>
            <span>{obj.title}</span>
            <span>{obj.time}</span>
            <span>{obj.about}</span>
          </div>
        );
      } else return null;
    }
  );

  const renderRepetitiveEvents = repetitiveEvents.map(
    (obj, index): ReactNode => {
      if (obj.daysToRepeat.includes(weekday) && obj.always) {
        return (
          <div key={index.toString() + "repetitive event"}>
            <span>{obj.title}</span>
            <span>{obj.time}</span>
            <span>{obj.about}</span>
          </div>
        );
      } else return null;
    }
  );
  return (
    <div className={className}>
      {renderUniqueEvents}
      {renderRepetitiveEvents}
    </div>
  );
};

export default ScheduleBody;
