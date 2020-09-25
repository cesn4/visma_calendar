import store from "./store";

import { ActionTypes } from "./types/actionTypes";
import { EventObject } from "./types/eventTypes";

export const SetCurrentDate = (payload: string): void => {
  store.dispatch({ type: ActionTypes.setCurrentDate, payload: payload });
};
export const AddEvent = (payload: Array<EventObject>): void => {
  store.dispatch({ type: ActionTypes.addEvent, payload: payload });
};
export const SetCalendarState = (payload: boolean): void => {
  store.dispatch({ type: ActionTypes.setCalendarState, payload: payload });
};
export const SetEventFormState = (payload: boolean): void => {
  store.dispatch({ type: ActionTypes.setEventFormState, payload: payload });
};
