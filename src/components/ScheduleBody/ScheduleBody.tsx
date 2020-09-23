import React, { FunctionComponent } from "react";
import { DateTime } from "luxon";

import { ScheduleProps } from "~/sections/Schedule/Schedule";

import "./ScheduleBody.scss";

const ScheduleBody: FunctionComponent<ScheduleProps> = ({
  date,
  repetitiveEvents,
  uniqueEvents,
}: ScheduleProps) => {
  const className = "schedule-body";
  const weekday = DateTime.fromISO(date).weekdayShort;
  console.log(weekday);
  console.log(repetitiveEvents);
  console.log(uniqueEvents);
  console.log(date);
  return <div className={className}></div>;
};

export default ScheduleBody;
