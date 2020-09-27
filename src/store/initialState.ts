import { eventMock } from '~/mocks/eventMock';
import { ApplicationState } from './types/applicationState';

const initialState: ApplicationState = {
  currentDate: '',
  events: eventMock,
  calendarState: false,
  eventFormState: false,
};

export default initialState;
