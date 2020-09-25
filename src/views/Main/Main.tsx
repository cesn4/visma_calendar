import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import classNames from "classnames";

import ScheduleContainer from "~/containers/ScheduleContainer";
import Calendar from "~/components/Calendar";

import "./Main.scss";
import { ApplicationState } from "~/store/types/applicationState";
import { connect } from "react-redux";

const Main: FunctionComponent<MainReduxProps> = ({
  eventFormState,
  calendarState,
}: MainReduxProps) => {
  const { slug } = useParams();
  const className = "main";
  return (
    <div className={`${className}`}>
      <Container>
        <div className={`${className}__box`}>
          <Row>
            <Col>
              <ScheduleContainer date={slug} />
            </Col>
          </Row>
          <Row>
            <Col>
              <div
                className={classNames(`${className}__calendar`, {
                  "-active": calendarState,
                })}
              >
                <Calendar />
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
}

const mapStateToProps = (state: ApplicationState): MainReduxProps => {
  return {
    calendarState: state.calendarState,
    eventFormState: state.eventFormState,
  };
};

export default connect(mapStateToProps)(Main);
