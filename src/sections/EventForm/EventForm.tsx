import React, { FunctionComponent, useState } from "react";
import FancyButton from "~/components/FancyButton";

import FancyInput from "~/components/FancyInput";
import FancySelect from "~/components/FancySelect";
import { weekdays } from "~/mock/weekdays";
import {
  AddRepetitiveEvent,
  AddUniqueEvent,
  SetEventFormState,
} from "~/store/actions";
import { RepetitionType } from "~/store/types/eventTypes";

import "./EventForm.scss";

const EventForm: FunctionComponent = () => {
  const className = "event-form";
  const repetitionOptions: Array<RepetitionType> = [
    "Once",
    "Always",
    "Every two weeks",
  ];
  const [eventInformation, setEventInformation] = useState({
    title: "",
    about: "",
    time: "",
    date: "",
    repetition: "Once",
    daysToRepeat: [],
  });

  const handleChange = (e: any) => {
    setEventInformation({
      ...eventInformation,
      [e.target.id]: e.target.value,
    });
  };

  const saveHandler = () => {
    eventInformation.repetition === "Once"
      ? AddUniqueEvent(eventInformation)
      : AddRepetitiveEvent(eventInformation);
    SetEventFormState(false);
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
      {eventInformation.repetition === "Once" ? (
        <div className={`${className}__smaller-box`}>
          <span className={`${className}__label`}>Date</span>
          <FancyInput handleChange={handleChange} type="date" id="date" />
        </div>
      ) : (
        <div className={`${className}__smaller-box`}>
          <span className={`${className}__label`}>Days to repeat</span>
          <FancySelect
            multiple
            handleChange={handleChange}
            name="Days to repeat"
            id="daysToRepeat"
            options={weekdays}
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

export default EventForm;
