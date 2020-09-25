import { EventObject } from "./eventTypes";

export interface ApplicationState {
  currentDate: string;
  events: Array<EventObject>;
  calendarState: boolean;
  eventFormState: boolean;
}
