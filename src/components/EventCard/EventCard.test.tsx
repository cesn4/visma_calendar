import React from "react";
import { shallow } from "enzyme";
import EventCard, { EventCardProps } from "./EventCard";

describe("EventCard", () => {
  const defaultProps: EventCardProps = {
    data: {
      time: "15:00",
      title: "Test",
      about: "About test",
      repetition: "Always",
      daysToRepeat: ["Mon"],
      priority: 1500,
    },
  };

  const createWrapper = (props: Partial<EventCardProps> = {}) =>
    shallow(<EventCard {...defaultProps} {...props} />);

  it("Should render title", () => {
    const wrapper = createWrapper();
    expect(wrapper.find(".event-card__title")).toHaveLength(1);
  });
  it("Should render time", () => {
    const wrapper = createWrapper();
    expect(wrapper.find(".event-card__time")).toHaveLength(1);
  });
  it("Should render about", () => {
    const wrapper = createWrapper();
    expect(wrapper.find(".event-card__about")).toHaveLength(1);
  });
});
