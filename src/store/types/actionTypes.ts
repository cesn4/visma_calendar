import { RepetetiveEventObject, UniqueEventObject } from "./eventTypes";

export interface SetCurrentDate {
  type: ActionTypes.setCurrentDate
  payload: string;
}
export interface SetActiveCalendarMonth {
  type: ActionTypes.setActiveCalendarMonth
  payload: number;
}
export interface SetActiveCalendarYear {
  type: ActionTypes.setActiveCalendarYear
  payload: number;
}
export interface AddRepetitiveEvent {
  type: ActionTypes.addRepetitiveEvent
  payload: RepetetiveEventObject;
}
export interface AddUniqueEvent {
  type: ActionTypes.addUniqueEvent
  payload: UniqueEventObject;
}

export type Actions =
  | SetCurrentDate | SetActiveCalendarMonth | SetActiveCalendarYear | AddRepetitiveEvent | AddUniqueEvent

export enum ActionTypes {
  setCurrentDate = 'SetCurrentDate',
  setActiveCalendarMonth = 'SetActiveCalendarMonth',
  setActiveCalendarYear = 'SetActiveCalendarYear',
  addRepetitiveEvent = "AddRepetitiveEvent",
  addUniqueEvent = "AddUniqueEvent",
}
