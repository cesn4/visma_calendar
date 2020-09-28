import React from "react";
import { shallow } from "enzyme";

import FancyButton, { FancyButtonProps } from "./FancyButton";

describe("FancyButton", () => {
  const defaultProps: FancyButtonProps = {
    label: "TesT Label",
    onClick: jest.fn(),
  };

  const createWrapper = (props: Partial<FancyButtonProps> = {}) =>
    shallow(<FancyButton {...defaultProps} {...props} />);

  it("Should call onClick function", () => {
    const wrapper = createWrapper();
    wrapper.simulate("click");
    expect(defaultProps.onClick).toBeCalled();
  });

  it("Should render passed label", () => {
    const wrapper = createWrapper();
    expect(wrapper.find(".fancy-button__label")).toHaveLength(1)
  });
});
