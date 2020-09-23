import { ApplicationState } from './types/applicationState';

const initialState: ApplicationState = {
  currentDate: '',
  activeCalendarMonth: 1,
  activeCalendarYear: 2020,
  repetitiveEvents: [],
  uniqueEvents: [],
};

export default initialState;
