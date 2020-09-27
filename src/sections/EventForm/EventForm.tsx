import React, { FunctionComponent, useState } from "react";
import FancyButton from "~/components/FancyButton";

import FancyInput from "~/components/FancyInput";
import FancySelect from "~/components/FancySelect";
import { repetitionOptions, weekdayOptions } from "~/mocks/optionsMocks";
import { AddEvent, SetEventFormState } from "~/store/actions";
import { EventObject } from "~/store/types/eventTypes";

import "./EventForm.scss";

const EventForm: FunctionComponent<EventFormProps> = ({
  events,
}: EventFormProps) => {
  const className = "event-form";
  const [eventInformation, setEventInformation] = useState({
    title: "",
    about: "",
    time: "",
    date: "",
    repetition: "Once",
    daysToRepeat: [""],
  });

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

  const repetitionHandler = (e: any) => {
    setEventInformation({
      ...eventInformation,
      repetition: e.value,
    });
  };

  const weekdayHanlder = (e: Array<WeekdayObject>) => {
    setEventInformation({
      ...eventInformation,
      daysToRepeat: e.map((obj) => obj.value),
    });
  };

  return (
    <div className={className}>
      <div className={`${className}__bigger-box`}>
        <FancyInput
          handleChange={handleChange}
          type="text"
          id="title"
          placeholder="Add Title"
        />
      </div>
      <div className={`${className}__bigger-box`}>
        <FancyInput
          handleChange={handleChange}
          smaller
          type="text"
          id="about"
          placeholder="Add Description"
        />
      </div>
      <div className={`${className}__smaller-box`}>
        <span className={`${className}__label`}>Repetition</span>
        <FancySelect onChange={repetitionHandler} options={repetitionOptions} />
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
            multi
            onChange={weekdayHanlder}
            options={weekdayOptions}
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

interface WeekdayObject {
  value: string;
  label: string;
}

export default EventForm;
