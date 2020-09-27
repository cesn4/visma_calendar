import React, { FunctionComponent } from "react";
import ScheduleBody from "~/components/ScheduleBody";
import ScheduleTitle from "~/components/ScheduleTitle";
import { EventObject } from "~/store/types/eventTypes";

import "./Schedule.scss";

const Schedule: FunctionComponent<ScheduleProps> = ({
  date,
  events,
  calendarState,
}: ScheduleProps) => {
  const className = "schedule";
  return (
    <div className={className}>
      <div className={`${className}__title`}>
        <ScheduleTitle calendarState={calendarState} date={date} />
      </div>
      <div className={`${className}__body`}>
        <ScheduleBody events={events} date={date} />
      </div>
    </div>
  );
};

interface ScheduleProps {
  date: string;
  events: Array<EventObject>;
  calendarState: boolean;
}
export default Schedule;
