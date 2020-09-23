import store from "./store";

import { ActionTypes } from "./types/actionTypes";
import { RepetetiveEventObject, UniqueEventObject } from "./types/eventTypes";

export const SetCurrentDate = (payload: string): void => {
  store.dispatch({ type: ActionTypes.setCurrentDate, payload: payload });
};
export const SetActiveCalendarMonth = (payload: number): void => {
  store.dispatch({
    type: ActionTypes.setActiveCalendarMonth,
    payload: payload,
  });
};
export const SetActiveCalendarYear = (payload: number): void => {
  store.dispatch({ type: ActionTypes.setActiveCalendarYear, payload: payload });
};
export const AddRepetitiveEvent = (payload: RepetetiveEventObject): void => {
  store.dispatch({ type: ActionTypes.addRepetitiveEvent, payload: payload });
};
export const AddUniqueEvent = (payload: UniqueEventObject): void => {
  store.dispatch({ type: ActionTypes.addUniqueEvent, payload: payload });
};
