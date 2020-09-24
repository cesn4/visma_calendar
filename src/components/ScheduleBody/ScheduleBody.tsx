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
  const activeDate = DateTime.fromISO(date);
  const activeDay = activeDate.day;
  const firstWeekday = DateTime.local(activeDate.year, activeDate.month, 1)
    .weekday;
  const baseDay = 1 + activeDate.weekday - firstWeekday;

  const evenCheckerBoolean =
    activeDay === baseDay + 7 ||
    activeDay === baseDay + 21 ||
    activeDay === baseDay + 35;
  const oddCheckerBoolean =
    activeDay === baseDay ||
    activeDay === baseDay + 14 ||
    activeDay === baseDay + 28;

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
      if (obj.daysToRepeat.includes(activeDate.weekdayShort) && obj.always) {
        return (
          <div key={index.toString() + "repetitive event"}>
            <span>{obj.title}</span>
            <span>{obj.time}</span>
            <span>{obj.about}</span>
          </div>
        );
      } else if (
        obj.daysToRepeat.includes(activeDate.weekdayShort) &&
        !obj.always &&
        (firstWeekday > activeDate.weekday
          ? evenCheckerBoolean
          : oddCheckerBoolean)
      ) {
        return (
          <div key={index.toString() + "kinda repetitive event"}>
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
