import React, { FunctionComponent, useState } from "react";
import FancyButton from "~/components/FancyButton";
import Select from "react-select";

import FancyInput from "~/components/FancyInput";
import FancySelect from "~/components/FancySelect";
import { weekdays } from "~/mock/weekdays";
import { AddEvent, SetEventFormState } from "~/store/actions";
import { EventObject, RepetitionType } from "~/store/types/eventTypes";

import "./EventForm.scss";

const EventForm: FunctionComponent<EventFormProps> = ({
  events,
}: EventFormProps) => {
  const className = "event-form";
  const repetitionOptions: Array<RepetitionType> = [
    "Once",
    "Always",
    "Every two weeks",
  ];

  const weekdayOptions = [
    { value: "Mon", label: "Mon" },
    { value: "Tue", label: "Tue" },
    { value: "Wed", label: "Wed" },
    { value: "Thu", label: "Thu" },
    { value: "Fri", label: "Fri" },
    { value: "Sat", label: "Sat" },
    { value: "Sun", label: "Sun" },
  ];
  const [eventInformation, setEventInformation] = useState({
    title: "",
    about: "",
    time: "",
    date: "",
    repetition: "Once",
    daysToRepeat: [""],
  });
  console.log(eventInformation);
  const handleChange = (e: any) => {
    setEventInformation({
      ...eventInformation,
      [e.target.id]: e.target.value,
    });
  };

  const saveHandler = () => {
    AddEvent([...events, eventInformation]);
    SetEventFormState(false);
  };

  const handelMultiSelect = (e: any) => {
    if (!eventInformation.daysToRepeat.includes(e.target.value)) {
      setEventInformation({
        ...eventInformation,
        daysToRepeat: [...eventInformation.daysToRepeat, e.target.value],
      });
    } else {
      setEventInformation({
        ...eventInformation,
        daysToRepeat: eventInformation.daysToRepeat.filter(
          (string) => string !== e.target.value
        ),
      });
    }
  };

  const customStyles = {
    menu: (provided: any, state: any) => ({
      ...provided,
      border: "1px solid #2d2e31",
      width: state.selectProps.width,
      color: state.selectProps.menuColor,
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      border: "none",
      height: "78.750px",
      backgroundColor: "#F9F9F9",
      outline: "none",
    }),
    placeholder: (provided: any, state: any) => ({
      ...provided,
      color: "#2d2e31",
    }),
    multiValue: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: "#2d2e31",
      color: "#F9F9F9",
    }),
    multiValueLabel: (provided: any, state: any) => ({
      ...provided,
      color: "#F9F9F9",
      paddingBottom: "0",
    }),
    dropdownIndicator: (provided: any, state: any) => ({
      ...provided,
      color: "#2d2e31",
    }),
    indicatorSeparator: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: "#2d2e31",
    }),
    clearIndicator: (provided: any, state: any) => ({
      ...provided,
      color: "#2d2e31",
    }),
  };

  return (
    <div className={className}>
      <FancyInput
        handleChange={handleChange}
        type="text"
        id="title"
        placeholder="Add Title"
      />
      <FancyInput
        handleChange={handleChange}
        smaller
        type="text"
        id="about"
        placeholder="Add Description"
      />
      <div className={`${className}__smaller-box`}>
        <span className={`${className}__label`}>Repetition</span>
        <FancySelect
          handleChange={handleChange}
          name="Repetition"
          id="repetition"
          options={repetitionOptions}
        />
      </div>
      <div className={`${className}__smaller-box`}>
        <span className={`${className}__label`}>Time</span>
        <FancyInput handleChange={handleChange} type="time" id="time" />
      </div>
      {eventInformation.repetition !== "Once" ? (
        <div className={`${className}__smaller-box`}>
          <span className={`${className}__label`}>Date</span>
          <FancyInput handleChange={handleChange} type="date" id="date" />
        </div>
      ) : (
        <div className={`${className}__smaller-box`}>
          <span className={`${className}__label`}>Days to repeat</span>
          <div className={`${className}__select`}></div>
          <Select
            closeMenuOnSelect={false}
            isMulti
            styles={customStyles}
            options={weekdayOptions}
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
      )}
      <div className={`${className}__button-box`}>
        <FancyButton label="Cancel" onClick={() => SetEventFormState(false)} />
        <FancyButton label="Save" onClick={saveHandler} />
      </div>
    </div>
  );
};

interface EventFormProps {
  events: Array<EventObject>;
}

export default EventForm;
