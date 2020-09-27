import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import classNames from "classnames";
import { connect } from "react-redux";

import Calendar from "~/sections/Calendar";
import { ApplicationState } from "~/store/types/applicationState";
import EventForm from "~/sections/EventForm";
import { EventObject } from "~/store/types/eventTypes";
import Schedule from "~/sections/Schedule";

import "./Main.scss";

const Main: FunctionComponent<MainReduxProps> = ({
  eventFormState,
  calendarState,
  events,
}: MainReduxProps) => {
  const className = "main";
  const { slug } = useParams();
  return (
    <div className={`${className}`}>
      <Container>
        <div className={`${className}__box`}>
          <Row>
            <Col>
              <Schedule
                date={slug}
                events={events}
                calendarState={calendarState}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <div
                className={classNames(`${className}__calendar`, {
                  "-active": calendarState,
                })}
              >
                <Calendar activeDate={slug} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div
                className={classNames(`${className}__event-form`, {
                  "-active": eventFormState,
                })}
              >
                <EventForm events={events} />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

interface MainReduxProps {
  calendarState: boolean;
  eventFormState: boolean;
  events: Array<EventObject>;
}

const mapStateToProps = (state: ApplicationState): MainReduxProps => {
  return {
    calendarState: state.calendarState,
    eventFormState: state.eventFormState,
    events: state.events,
  };
};

export default connect(mapStateToProps)(Main);
