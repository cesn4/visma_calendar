import { EventObject } from "~/store/types/eventTypes";

export const eventMock: Array<EventObject> = [
  {
    date: "2020-09-25",
    title: "Demo meeting",
    time: "15:00",
    repetition: "Once",
    priority: 1500,
    about:
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "Stand-up meeting",
    about:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    time: "10:00",
    priority: 1000,
    repetition: "Always",
    daysToRepeat: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  },
  {
    title: "Planing meeting",
    about:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    time: "11:00",
    priority: 1100,
    repetition: "Every two weeks",
    daysToRepeat: ["Mon"],
  },
];
