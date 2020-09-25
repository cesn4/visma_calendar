import React, { FunctionComponent } from "react";
import ScheduleBody from "~/components/ScheduleBody";
import ScheduleTitle from "~/components/ScheduleTitle";
import {
  RepetetiveEventObject,
  UniqueEventObject,
} from "~/store/types/eventTypes";

import "./Schedule.scss";

const Schedule: FunctionComponent<ScheduleProps> = ({
  date,
  repetitiveEvents,
  uniqueEvents,
}: ScheduleProps) => {
  const className = "schedule";
  return (
    <div className={className}>
      <div className={`${className}__title`}>
        <ScheduleTitle date={date} />
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

export interface ScheduleProps {
  date: string;
  repetitiveEvents: Array<RepetetiveEventObject>;
  uniqueEvents: Array<UniqueEventObject>;
}

export default Schedule;
