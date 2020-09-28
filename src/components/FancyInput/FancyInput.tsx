import React, { FunctionComponent } from "react";
import classNames from "classnames";

import "./FancyInput.scss";

const FancyInput: FunctionComponent<FancyInputProps> = ({
  placeholder,
  id,
  type,
  smaller = false,
  handleChange,
}: FancyInputProps) => {
  const className = "fancy-input";
  return (
    <div
      className={classNames(`${className}`, {
        "-smaller": smaller,
      })}
    >
      <input
        onChange={handleChange}
        id={id}
        className={`${className}__input`}
        type={type}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export interface FancyInputProps {
  placeholder?: string;
  id: string;
  type: string;
  smaller?: boolean;
  handleChange: any;
}

export default FancyInput;
