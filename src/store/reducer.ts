import { Actions, ActionTypes } from './types/actionTypes';
import { ApplicationState } from './types/applicationState';
import initialState from './initialState';

const reducer = (state = initialState, action: Actions): ApplicationState => {
  switch (action.type) {
    case ActionTypes.setCurrentDate: {
      return {
        ...state,
        currentDate: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
