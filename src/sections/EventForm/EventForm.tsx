import React, { FunctionComponent, useState } from "react";
import FancyButton from "~/components/FancyButton";

import FancyInput from "~/components/FancyInput";
import FancySelect from "~/components/FancySelect";
import { AddEvent, SetEventFormState } from "~/store/actions";
import { EventObject } from "~/store/types/eventTypes";

import "./EventForm.scss";

const EventForm: FunctionComponent<EventFormProps> = ({
  events,
}: EventFormProps) => {
  const className = "event-form";
  const repetitionOptions = [
    { value: "Once", label: "Once" },
    { value: "Always", label: "Always" },
    { value: "Every two weeks", label: "Every two weeks" },
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
        <FancySelect onChange={() => console.log()} options={repetitionOptions} />
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
          <FancySelect multi onChange={() => {}} options={weekdayOptions} />
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
