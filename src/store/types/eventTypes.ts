export type WeekdayType = "Mon" |
"Tue" |
"Wed" |
"Thu" |
"Fri" |
"Sat" |
"Sun"

type RepetitionType = "every two weeks";

export interface RepetetiveEventObject {
    title: string;
    about: string;
    time: string;
    daysToRepeat: Array<WeekdayType>;
    repetition?: RepetitionType;
    resetEveryMonth?: boolean;
    always: boolean;
}

export interface UniqueEventObject {
    title: string;
    about: string;
    time: string;
    date: string;
}