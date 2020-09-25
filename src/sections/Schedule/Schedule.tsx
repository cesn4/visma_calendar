import React, { FunctionComponent } from "react";
import ScheduleBody from "~/components/ScheduleBody";
import ScheduleTitle from "~/components/ScheduleTitle";
import { CombinedScheduleProps } from "~/containers/ScheduleContainer";

import "./Schedule.scss";

const Schedule: FunctionComponent<CombinedScheduleProps> = ({
  date,
  repetitiveEvents,
  uniqueEvents,
  calendarState,
}: CombinedScheduleProps) => {
  const className = "schedule";
  return (
    <div className={className}>
      <div className={`${className}__title`}>
        <ScheduleTitle calendarState={calendarState} date={date} />
      </div>
      <div className={`${className}__body`}>
        <ScheduleBody
          repetitiveEvents={repetitiveEvents}
          uniqueEvents={uniqueEvents}
          date={date}
        />
      </div>
    </div>
  );
};
export default Schedule;
