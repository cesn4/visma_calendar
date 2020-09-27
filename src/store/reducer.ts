import { Actions, ActionTypes } from "./types/actionTypes";
import { ApplicationState } from "./types/applicationState";
import initialState from "./initialState";

const reducer = (state = initialState, action: Actions): ApplicationState => {
  switch (action.type) {
    case ActionTypes.setCurrentDate: {
      return {
        ...state,
        currentDate: action.payload,
      };
    }
    case ActionTypes.setCalendarState: {
      return {
        ...state,
        calendarState: action.payload,
      };
    }
    case ActionTypes.setEventFormState: {
      return {
        ...state,
        eventFormState: action.payload,
      };
    }
    case ActionTypes.addEvent: {
      return {
        ...state,
        events: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
