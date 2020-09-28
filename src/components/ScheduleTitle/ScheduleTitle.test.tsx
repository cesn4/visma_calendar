import React from "react";
import { shallow } from "enzyme";

import ScheduleTitle, { ScheduleTitleProps } from "./ScheduleTitle";

describe("ScheduleTitle", () => {
  const testDate = "2010-10-11";
  const testState = false;

  const defaultProps: ScheduleTitleProps = {
    date: "",
    calendarState: testState,
  };

  const createWrapper = (props: Partial<ScheduleTitleProps> = {}) =>
    shallow(<ScheduleTitle {...defaultProps} {...props} />);

  it("Should render title info", () => {
    const wrapper = createWrapper({ date: testDate });
    expect(wrapper.find(".schedule-title__day"));
  });
});
