import React, { FunctionComponent } from "react";
import { connect } from "react-redux";

import Schedule from "~/sections/Schedule";
import { ScheduleProps } from "~/sections/Schedule/Schedule";
import { ApplicationState } from "~/store/types/applicationState";
import { RepetetiveEventObject, UniqueEventObject } from "~/store/types/eventTypes";

const ScheduleContainer: FunctionComponent<ScheduleContainerProps & ScheduleReduxProps> = ({
  date,
  repetitiveEvents,
  uniqueEvents,
}: ScheduleProps) => {
  return (
    <Schedule
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
}

const mapStateToProps = (state: ApplicationState): ScheduleReduxProps => {
    return {
        repetitiveEvents: state.repetitiveEvents,
        uniqueEvents: state.uniqueEvents,
    }
}

export default connect(mapStateToProps)(ScheduleContainer);
