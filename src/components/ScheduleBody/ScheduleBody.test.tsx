import React from "react";
import { shallow } from "enzyme";

import ScheduleBody, { ScheduleBodyProps } from "./ScheduleBody";
import EventCard from "../EventCard";

describe("ScheduleBody", () => {

  const defaultProps: ScheduleBodyProps = {
    date: "2020-09-28",
    events: [
      {
        time: "15:00",
        title: "Test",
        about: "About test",
        repetition: "Always",
        daysToRepeat: ["Mon"],
        priority: 1500,
      },
    ],
  };

  const createWrapper = (props: Partial<ScheduleBodyProps> = {}) =>
    shallow(<ScheduleBody {...defaultProps} {...props} />);

  it("Should render Event Card", () => {
    const wrapper = createWrapper();
    expect(
      wrapper.containsMatchingElement(
        <EventCard data={defaultProps.events[0]} />
      )
    ).toBeTruthy();
  });
});
