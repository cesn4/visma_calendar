import React, { FunctionComponent } from "react";
import { EventObject } from "~/store/types/eventTypes";
import classNames from "classnames";

import "./EventCard.scss";

const EventCard: FunctionComponent<EventCardProps> = ({
  data,
}: EventCardProps) => {
  const className = "event-card";
  return (
    <div className={classNames(`${className}`)}>
      <div className={`${className}__title-box`}>
        <span className={`${className}__time`}>{data.time}</span>
        <span className={`${className}__title`}>{data.title}</span>
      </div>
      <span className={`${className}__about`}>{data.about}</span>
    </div>
  );
};

export interface EventCardProps {
  data: EventObject;
}

export default EventCard;
