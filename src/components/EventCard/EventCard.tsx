import React, { FunctionComponent } from "react";
import {
  RepetetiveEventObject,
  UniqueEventObject,
} from "~/store/types/eventTypes";

import "./EventCard.scss";

const EventCard: FunctionComponent<EventCardProps> = ({
  data,
}: EventCardProps) => {
  const className = "event-card";
  return (
    <div className={className}>
      <div className={`${className}__title-box`}>
        <span className={`${className}__time`}>{data.time}</span>
        <span className={`${className}__title`}>{data.title}</span>
      </div>
      <span className={`${className}__about`}>{data.about}</span>
    </div>
  );
};

interface EventCardProps {
  data: UniqueEventObject | RepetetiveEventObject;
}

export default EventCard;
