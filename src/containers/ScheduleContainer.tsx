import React, { FunctionComponent } from "react";
import { connect } from "react-redux";

import Schedule from "~/sections/Schedule";
import { ApplicationState } from "~/store/types/applicationState";
import {
  RepetetiveEventObject,
  UniqueEventObject,
} from "~/store/types/eventTypes";

const ScheduleContainer: FunctionComponent<CombinedScheduleProps> = ({
  date,
  repetitiveEvents,
  uniqueEvents,
  calendarState,
}: CombinedScheduleProps) => {
  return (
    <Schedule
      calendarState={calendarState}
      date={date}
      repetitiveEvents={repetitiveEvents}
      uniqueEvents={uniqueEvents}
    />
  );
};

interface ScheduleContainerProps {
  date: string;
}

interface ScheduleReduxProps {
  repetitiveEvents: Array<RepetetiveEventObject>;
  uniqueEvents: Array<UniqueEventObject>;
  calendarState: boolean;
}

export type CombinedScheduleProps = ScheduleContainerProps & ScheduleReduxProps;

const mapStateToProps = (state: ApplicationState): ScheduleReduxProps => {
  return {
    repetitiveEvents: state.repetitiveEvents,
    uniqueEvents: state.uniqueEvents,
    calendarState: state.calendarState,
  };
};

export default connect(mapStateToProps)(ScheduleContainer);
