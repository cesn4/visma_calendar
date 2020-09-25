import { RepetetiveEventObject, UniqueEventObject } from "./eventTypes";

export interface SetCurrentDate {
  type: ActionTypes.setCurrentDate;
  payload: string;
}
export interface SetActiveCalendarMonth {
  type: ActionTypes.setActiveCalendarMonth;
  payload: number;
}
export interface SetActiveCalendarYear {
  type: ActionTypes.setActiveCalendarYear;
  payload: number;
}
export interface AddRepetitiveEvent {
  type: ActionTypes.addRepetitiveEvent;
  payload: RepetetiveEventObject;
}
export interface AddUniqueEvent {
  type: ActionTypes.addUniqueEvent;
  payload: UniqueEventObject;
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
  | SetActiveCalendarMonth
  | SetActiveCalendarYear
  | AddRepetitiveEvent
  | AddUniqueEvent
  | SetCalendarState
  | SetEventFormState;

export enum ActionTypes {
  setCurrentDate = "SetCurrentDate",
  setActiveCalendarMonth = "SetActiveCalendarMonth",
  setActiveCalendarYear = "SetActiveCalendarYear",
  addRepetitiveEvent = "AddRepetitiveEvent",
  addUniqueEvent = "AddUniqueEvent",
  setCalendarState = "SetCalendarState",
  setEventFormState = "SetEventFormState",
}
