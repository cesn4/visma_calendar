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

  const day = DateTime.fromISO(date).day;
  const month = DateTime.fromISO(date).month;
  const year = DateTime.fromISO(date).year;
  const firstWeekday = DateTime.local(year, month, 1).weekday;
  const weekday = DateTime.fromISO(date).weekday;
  const weekdayShort = DateTime.fromISO(date).weekdayShort;

  const oddWeekFilter: Function = (): boolean => {
    if (day === weekday || day === weekday + 14 || day === weekday + 28) {
      return true;
    } else return false;
  };

  const evenWeekFilter: Function = (): boolean => {
    const negativeDay = firstWeekday - weekday;
    if (
      day === weekday - negativeDay + 7 ||
      day === weekday - negativeDay + 21 ||
      day === weekday - negativeDay + 35
    ) {
      return true;
    } else return false;
  };

  // Rendering Event witch was created for one time only
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

  // rendering repetitive events for infinity period of time
  const renderRepetitiveEvents = repetitiveEvents.map(
    (obj, index): ReactNode => {
      if (obj.daysToRepeat.includes(weekdayShort) && obj.always) {
        return (
          <div key={index.toString() + "repetitive event"}>
            <span>{obj.title}</span>
            <span>{obj.time}</span>
            <span>{obj.about}</span>
          </div>
        );
      }
      if (
        obj.daysToRepeat.includes(weekdayShort) &&
        !obj.always &&
        firstWeekday > weekday
          ? evenWeekFilter()
          : oddWeekFilter()
      ) {
        return (
          <div key={index.toString() + "repetitive kinda event"}>
            <span>{obj.title}</span>
            <span>{obj.time}</span>
            <span>{obj.about}</span>
          </div>
        );
      }
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
