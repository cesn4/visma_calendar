import React, { FunctionComponent } from "react";
import FancyButton from "~/components/FancyButton";

import FancyInput from "~/components/FancyInput";
import FancySelect from "~/components/FancySelect";
import { weekdays } from "~/mock/weekdays";
import { RepetitionType } from "~/store/types/eventTypes";

import "./EventForm.scss";

const EventForm: FunctionComponent = () => {
  const className = "event-form";
  const repetitionOptions: Array<RepetitionType> = [
    "Once",
    "Always",
    "Every two weeks",
  ];
  return (
    <div className={className}>
      <FancyInput type="text" id="title" placeholder="Add Title" />
      <FancyInput
        smaller
        type="text"
        id="about"
        placeholder="Add Description"
      />
      <div className={`${className}__smaller-box`}>
        <span className={`${className}__label`}>Repetition</span>
        <FancySelect
          name="Repetition"
          id="repetition"
          options={repetitionOptions}
        />
      </div>
      <div className={`${className}__smaller-box`}>
        <span className={`${className}__label`}>Time</span>
        <FancyInput type="time" id="time" />
      </div>
      <div className={`${className}__smaller-box`}>
        <span className={`${className}__label`}>Date</span>
        <FancyInput type="date" id="date" />
      </div>
      <div className={`${className}__button-box`}>
        <FancyButton label="Cancel" onClick={() => {}} />
        <FancyButton label="Save" onClick={() => {}} />
      </div>
    </div>
  );
};

export default EventForm;
