import React, { FunctionComponent } from "react";
import classNames from "classnames";

import "./FancySelect.scss";
import { SetEventFormState } from "~/store/actions";

const FancySelect: FunctionComponent<FancySelectProps> = ({
  name,
  id,
  options,
  handleChange,
  multiple,
  activeDays,
}: FancySelectProps) => {
  const className = "fancy-select";
  const renderOptions = options.map((value, index) => {
    let isActive = false;
    if (activeDays?.includes(value)) {
      isActive = true;
    }
    return (
      <option
        onClick={() => SetEventFormState(false)}
        key={index.toString() + " options"}
        className={classNames(`${className}__option`, {
          "-active": isActive,
        })}
        value={value}
      >
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
  activeDays?: Array<string>;
}

export default FancySelect;
