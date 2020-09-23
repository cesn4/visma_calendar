import React, { FunctionComponent } from 'react';
import { DateTime } from "luxon";

import './Schedule.scss';

const Schedule: FunctionComponent<ScheduleProps> = ({ date }: ScheduleProps) => {
    const className = 'schedule';
    const activeDate = DateTime.fromISO(date);
    console.log(activeDate);
    return (
    <div className={className}>{date}</div>
    );
};

interface ScheduleProps {
    date: string;
}

export default Schedule;
