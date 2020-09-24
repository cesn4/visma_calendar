type RepetitionType = "every two weeks" | "always";

export interface RepetetiveEventObject {
    title: string;
    about: string;
    time: string;
    daysToRepeat: Array<string>;
    repetition?: RepetitionType;
    resetEveryMonth?: boolean;
    always?: boolean;
}

export interface UniqueEventObject {
    title: string;
    about: string;
    time: string;
    date: string;
}