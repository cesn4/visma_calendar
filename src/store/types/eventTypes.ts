export type RepetitionType = "Every two weeks" | "Always" | "Once";

export interface EventObject {
  title: string;
  about: string;
  time: string;
  daysToRepeat?: Array<string>;
  repetition?: string;
  date?: string;
  priority: number;
}
