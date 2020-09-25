import { eventMock } from '~/mock/eventMock';
import { ApplicationState } from './types/applicationState';

const initialState: ApplicationState = {
  currentDate: '',
  events: eventMock,
  calendarState: false,
  eventFormState: false,
};

export default initialState;
