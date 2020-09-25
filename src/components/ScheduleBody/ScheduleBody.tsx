import React, { FunctionComponent, ReactNode } from "react";
import { DateTime } from "luxon";

import { ScheduleProps } from "~/sections/Schedule/Schedule";

import "./ScheduleBody.scss";
import EventCard from "../EventCard";

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

  const evenWeekDaysBoolean =
    activeDay === baseDay + 7 ||
    activeDay === baseDay + 21 ||
    activeDay === baseDay + 35;
  const oddWeekDaysBoolean =
    activeDay === baseDay ||
    activeDay === baseDay + 14 ||
    activeDay === baseDay + 28;

  // Rendering Event witch was created for one time only
  const renderUniqueEvents = uniqueEvents.map(
    (obj, index): ReactNode => {
      if (obj.date === date) {
        return (
          <EventCard key={index.toString() + " unique event"} data={obj} />
        );
      } else return null;
    }
  );

  // rendering repetitive events for infinity period of time
  const renderRepetitiveEvents = repetitiveEvents.map(
    (obj, index): ReactNode => {
      if (obj.daysToRepeat.includes(activeDate.weekdayShort) && obj.always) {
        return (
          <EventCard key={index.toString() + " repetitive event"} data={obj} />
        );
      } else if (
        obj.daysToRepeat.includes(activeDate.weekdayShort) &&
        !obj.always &&
        (firstWeekday > activeDate.weekday
          ? evenWeekDaysBoolean
          : oddWeekDaysBoolean)
      ) {
        return (
          <EventCard
            key={index.toString() + " kinda repetitive event"}
            data={obj}
          />
        );
      } else return null;
    }
  );

  return (
    <div className={className}>
      {renderRepetitiveEvents}
      {renderUniqueEvents}
    </div>
  );
};

export default ScheduleBody;
