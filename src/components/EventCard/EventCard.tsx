import React, { FunctionComponent } from "react";
import { EventObject } from "~/store/types/eventTypes";
import classNames from "classnames";

import "./EventCard.scss";

const EventCard: FunctionComponent<EventCardProps> = ({
  data,
  isFirst = false,
  isLast = false,
}: EventCardProps) => {
  const className = "event-card";
  return (
    <div className={classNames(`${className}`, {
      "-first": isFirst,
      "-last": isLast,
    })}>
      <div className={`${className}__title-box`}>
        <span className={`${className}__time`}>{data.time}</span>
        <span className={`${className}__title`}>{data.title}</span>
      </div>
      <span className={`${className}__about`}>{data.about}</span>
    </div>
  );
};

interface EventCardProps {
  data: EventObject;
  isFirst?: boolean;
  isLast?: boolean;
}

export default EventCard;
