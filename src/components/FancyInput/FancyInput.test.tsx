import React from "react";
import { shallow } from "enzyme";

import EventCard from "../EventCard";
import FancyInput, { FancyInputProps } from "./FancyInput";

describe("FancyInput", () => {
  const defaultProps: FancyInputProps = {
    placeholder: "Test",
    handleChange: jest.fn(),
    id: "Test id",
    type: "text",
    smaller: true,
  };

  const createWrapper = (props: Partial<FancyInputProps> = {}) =>
    shallow(<FancyInput {...defaultProps} {...props} />);

  it('Should have -smaller classname if is in fact current', () => {
    const wrapper = createWrapper();
    expect(wrapper.find(".-smaller")).toHaveLength(1);
  });
});
