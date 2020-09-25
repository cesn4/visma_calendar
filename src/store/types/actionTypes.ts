import { EventObject } from "./eventTypes";

export interface SetCurrentDate {
  type: ActionTypes.setCurrentDate;
  payload: string;
}
export interface AddEvent {
  type: ActionTypes.addEvent;
  payload: Array<EventObject>;
}
export interface SetCalendarState {
  type: ActionTypes.setCalendarState;
  payload: boolean;
}
export interface SetEventFormState {
  type: ActionTypes.setEventFormState;
  payload: boolean;
}

export type Actions =
  | SetCurrentDate
  | SetCalendarState
  | SetEventFormState
  | AddEvent;

export enum ActionTypes {
  setCurrentDate = "SetCurrentDate",
  setCalendarState = "SetCalendarState",
  setEventFormState = "SetEventFormState",
  addEvent = "AddEvent",
}
