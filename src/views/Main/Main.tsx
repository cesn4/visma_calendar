import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";

import ScheduleContainer from "~/containers/ScheduleContainer";

import "./Main.scss";
import Calendar from "~/components/Calendar";

const Main: FunctionComponent = () => {
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
              <div className={`${className}__calendar`}>
                <Calendar />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Main;
