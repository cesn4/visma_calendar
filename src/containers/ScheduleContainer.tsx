import React, { FunctionComponent } from "react";
import { connect } from "react-redux";

import Schedule from "~/sections/Schedule";
import { ApplicationState } from "~/store/types/applicationState";
import {
  EventObject,
} from "~/store/types/eventTypes";

const ScheduleContainer: FunctionComponent<CombinedScheduleProps> = ({
  date,
  events,
  calendarState,
}: CombinedScheduleProps) => {
  return <Schedule calendarState={calendarState} date={date} events={events} />;
};

interface ScheduleContainerProps {
  date: string;
}

interface ScheduleReduxProps {
  events: Array<EventObject>;
  calendarState: boolean;
}

export type CombinedScheduleProps = ScheduleContainerProps & ScheduleReduxProps;

const mapStateToProps = (state: ApplicationState): ScheduleReduxProps => {
  return {
    events: state.events,
    calendarState: state.calendarState,
  };
};

export default connect(mapStateToProps)(ScheduleContainer);
