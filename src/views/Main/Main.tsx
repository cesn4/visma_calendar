import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

import Calendar from "~/components/Calendar";
import ScheduleContainer from "~/containers/ScheduleContainer";

import './Main.scss';

const Main: FunctionComponent = () => {
  const { slug } = useParams();
  const className= 'main'
  return (
    <div className={`${className}`}>
      <Calendar />
      <ScheduleContainer date={slug} />
    </div>
  );
};

export default Main;
