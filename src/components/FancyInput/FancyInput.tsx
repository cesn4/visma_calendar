import React, { FunctionComponent } from "react";

import "./FancyInput.scss";

const FancyInput: FunctionComponent<FancyInputProps> = ({
  placeholder,
  id,
  type,
}: FancyInputProps) => {
  const className = "fancy-input";
  return (
    <div className={className}>
      <input
        id={id}
        className={`${className}__input`}
        type={type}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

interface FancyInputProps {
  placeholder?: string;
  id: string;
  type: string;
}

export default FancyInput;
