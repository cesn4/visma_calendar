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
  const weekday = DateTime.fromISO(date).weekday;
  const month = DateTime.fromISO(date).month;
  const year = DateTime.fromISO(date).year;
  const firstDay = DateTime.local(year, month, 1).weekday;
  const weekdayShort: string = DateTime.fromISO(date).weekdayShort;

  const oddWeekFilter: Function = (): boolean => {
    if (day === weekday || day === weekday + 14 || day === weekday + 28) {
      return true;
    } else return false;
  };
  const evenWeekFilter: Function = (): boolean => {
    const negativeDay = weekday - firstDay + 1;
    if (day === negativeDay + 7 || day === negativeDay + 21 || day === negativeDay + 35) {
      return true;
    } else return false;
  };

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
      if (obj.daysToRepeat.includes(weekdayShort) && obj.repetition === "always") {
        return (
          <div key={index.toString() + "repetitive event"}>
            <span>{obj.title}</span>
            <span>{obj.time}</span>
            <span>{obj.about}</span>
          </div>
        );
      } else if (
        obj.daysToRepeat.includes(weekdayShort) &&
        obj.repetition === "every two weeks" &&
        weekday >= firstDay ? oddWeekFilter() : evenWeekFilter()
      ) {
        return (
          <div key={index.toString() + "repetitive event unusual"}>
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
