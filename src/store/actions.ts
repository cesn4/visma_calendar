import store from './store';

import { ActionTypes } from './types/actionTypes';

export const SetCurrentDate = (payload: string): void => {
  store.dispatch({ type: ActionTypes.setCurrentDate, payload: payload });
};

