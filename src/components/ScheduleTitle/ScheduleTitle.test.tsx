import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import ScheduleTitle, { ScheduleTitleProps } from "./ScheduleTitle";

describe("ScheduleTitle", () => {
  const mockStore = configureStore();
  const testDate = "2010-10-11";
  const testState = false;

  const mockStoreProps = {
    eventFormState: false,
    calendarState: false,
  };

  const defaultProps: ScheduleTitleProps = {
    date: "",
    calendarState: testState,
  };

  const createWrapper = (props: Partial<ScheduleTitleProps> = {}) =>
    shallow(
      <Provider store={mockStore(mockStoreProps)}>
        <ScheduleTitle {...defaultProps} {...props} />
      </Provider>
    );

  it("Should render active Day", () => {
    const wrapper = createWrapper({ date: testDate });
    expect(wrapper.find(".schedule-title__day")).toBeTruthy();
  });
});
