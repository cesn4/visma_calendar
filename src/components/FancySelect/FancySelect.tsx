import React, { FunctionComponent } from "react";

import "./FancySelect.scss";

const FancySelect: FunctionComponent<FancySelectProps> = ({
  name,
  id,
  options,
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
      <select className={`${className}__input`} name={name} id={id}>
        {renderOptions}
      </select>
    </div>
  );
};

interface FancySelectProps {
  name: string;
  id: string;
  options: Array<string>;
}

export default FancySelect;
