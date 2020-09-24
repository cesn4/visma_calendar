import { repetitiveEventsMock } from '~/mock/repetitiveEventsMock';
import { uniqueEventMock } from '~/mock/uniqueEventsMock';
import { ApplicationState } from './types/applicationState';

const initialState: ApplicationState = {
  currentDate: '',
  activeCalendarMonth: 1,
  activeCalendarYear: 2020,
  repetitiveEvents: repetitiveEventsMock,
  uniqueEvents: uniqueEventMock,
};

export default initialState;
