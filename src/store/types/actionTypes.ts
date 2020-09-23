
export interface SetCurrentDate {
  type: ActionTypes.setCurrentDate
  payload: string;
}

export type Actions =
  | SetCurrentDate

export enum ActionTypes {
  setCurrentDate = 'SetCurrentDate',
}
