import { RepetetiveEventObject, UniqueEventObject } from "./eventTypes";

export interface ApplicationState {
  currentDate: string;
  activeCalendarMonth: number;
  activeCalendarYear: number;
  repetitiveEvents: Array<RepetetiveEventObject>;
  uniqueEvents: Array<UniqueEventObject>;
}
