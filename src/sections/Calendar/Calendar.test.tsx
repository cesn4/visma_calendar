import React from "react";
import { shallow } from "enzyme";
import Calendar, { CalendarProps } from "./Calendar";

describe("Calendar", () => {
  const defaultProps: CalendarProps = {
    activeDate: "2020-09-28",
  };

  const createWrapper = (props: Partial<CalendarProps> = {}) =>
    shallow(<Calendar {...defaultProps} {...props} />);

  it("Should have -current classname", () => {
    const wrapper = createWrapper();
    expect(wrapper.find(".-current")).toHaveLength(1);
  });
  it("Should have -active classname", () => {
    const wrapper = createWrapper({activeDate: "2020-09-27"});
    expect(wrapper.find(".-active")).toHaveLength(1);
  });
});
