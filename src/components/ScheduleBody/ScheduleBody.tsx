import React, { FunctionComponent, ReactNode } from "react";
import { DateTime } from "luxon";

import EventCard from "../EventCard";
import { EventObject } from "~/store/types/eventTypes";

import "./ScheduleBody.scss";

const ScheduleBody: FunctionComponent<ScheduleBodyProps> = ({
  date,
  events,
}: ScheduleBodyProps) => {
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

  // rendering repetitive events for infinity period of time
  const sortedEvents = events.sort((a: EventObject, b: EventObject) => {
    return a.priority - b.priority;
  });
  const renderEvents = sortedEvents.map(
    (obj, index): ReactNode => {
      if (
        obj.daysToRepeat?.includes(activeDate.weekdayShort) &&
        obj.repetition === "Always"
      ) {
        return (
          <EventCard key={index.toString() + " repetitive event"} data={obj} />
        );
      } else if (
        obj.daysToRepeat?.includes(activeDate.weekdayShort) &&
        obj.repetition === "Every two weeks" &&
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
      } else if (obj.repetition === "Once" && obj.date === date) {
        return (
          <EventCard key={index.toString() + " unique event"} data={obj} />
        );
      } else return null;
    }
  );

  return <div className={className}>{renderEvents}</div>;
};

export interface ScheduleBodyProps {
  events: Array<EventObject>;
  date: string;
}

export default ScheduleBody;
