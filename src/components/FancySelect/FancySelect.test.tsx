import React from "react";
import { shallow } from "enzyme";
import Select from "react-select";
import FancySelect, { FancySelectProps } from "./FancySelect";

describe("FancySelect", () => {
  const defaultProps: FancySelectProps = {
    multi: true,
    onChange: jest.fn(),
    options: [
      {
        value: "test",
        label: "test",
      },
    ],
  };

  const createWrapper = (props: Partial<FancySelectProps> = {}) =>
    shallow(<FancySelect {...defaultProps} {...props} />);

  it("Should be multiple select option", () => {
    const wrapper = createWrapper();
    expect(
      wrapper.find(Select).prop('isMulti')
    ).toEqual(defaultProps.multi);
  });
});
