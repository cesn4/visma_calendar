import React, { FunctionComponent } from "react";
import Select from "react-select";

import "./FancySelect.scss";

const FancySelect: FunctionComponent<FancySelectProps> = ({
  options,
  onChange,
  multi = false,
}: FancySelectProps) => {
  const className = "fancy-select";
  const customStyles = {
    menu: (provided: any, state: any) => ({
      ...provided,
      border: "1px solid #2d2e31",
      width: state.selectProps.width,
      color: state.selectProps.menuColor,
    }),
    container: (provided: any) => ({
      ...provided,
      outline: "none",
    }),
    control: (provided: any) => ({
      ...provided,
      border: 0,
      boxShadow: "none",
      height: "78.750px",
      backgroundColor: "#F9F9F9",
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: "#2d2e31",
    }),
    multiValue: (provided: any) => ({
      ...provided,
      backgroundColor: "#2d2e31",
      color: "#F9F9F9",
    }),
    multiValueLabel: (provided: any) => ({
      ...provided,
      color: "#F9F9F9",
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: "#2d2e31",
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      backgroundColor: "#2d2e31",
    }),
    clearIndicator: (provided: any) => ({
      ...provided,
      color: "#2d2e31",
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      paddingLeft: "0",
    }),
    singleValue: (provided: any) => ({
      ...provided,
      fontFamily: "monospace",
      fontSize: "1.5rem",
    }),
  };
  return (
    <div className={className}>
      <Select
        closeMenuOnSelect={multi ? false : true}
        inputProps={{readOnly:true}}
        isSearchable={ false }
        onChange={onChange}
        isMulti={multi}
        styles={customStyles}
        options={options}
        theme={(theme) => ({
          ...theme,
          // borderRadius: 0,
          colors: {
            ...theme.colors,
            primary: "#2d2e31",
            neutral40: "#2d2e31",
            neutral30: "#2d2e31",
            neutral20: "#2d2e31",
            neutral50: "#2d2e31",
          },
        })}
      />
    </div>
  );
};

export interface FancySelectProps {
  options: Array<Object>;
  onChange: (e: any) => void;
  multi?: boolean;
}

export default FancySelect;
