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
    case ActionTypes.setActiveCalendarMonth: {
      return {
        ...state,
        activeCalendarMonth: action.payload,
      };
    }
    case ActionTypes.setActiveCalendarYear: {
      return {
        ...state,
        activeCalendarYear: action.payload,
      };
    }
    case ActionTypes.addRepetitiveEvent: {
      let newArray = state.repetitiveEvents;
      newArray.push(action.payload);
      return {
        ...state,
        repetitiveEvents: newArray,
      };
    }
    case ActionTypes.addUniqueEvent: {
      let newArray = state.uniqueEvents;
      newArray.push(action.payload);
      return {
        ...state,
        uniqueEvents: newArray,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
