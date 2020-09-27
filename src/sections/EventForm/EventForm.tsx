import React, { FunctionComponent, useState } from "react";
import FancyButton from "~/components/FancyButton";

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
            handleChange={handelMultiSelect}
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

interface EventFormProps {
  events: Array<EventObject>;
}

export default EventForm;
