import React, { FunctionComponent } from "react";

import "./FancySelect.scss";

const FancySelect: FunctionComponent<FancySelectProps> = ({
  name,
  id,
  options,
  handleChange,
  multiple,
}: FancySelectProps) => {
  const className = "fancy-select";
  const renderOptions = options.map((value) => {
    return (
      <option className={`${className}__option`} value={value}>
        {value}
      </option>
    );
  });
  return (
    <div className={`${className}`}>
      <select
        multiple={multiple}
        onChange={handleChange}
        className={`${className}__input`}
        name={name}
        id={id}
      >
        {renderOptions}
      </select>
    </div>
  );
};

interface FancySelectProps {
  name: string;
  id: string;
  options: Array<string>;
  handleChange: any;
  multiple?: boolean;
}

export default FancySelect;
