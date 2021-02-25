import uuid from "react-uuid";

const initialTasks = [
  {
    id: uuid(),
    text: "zagrać w Wiedźmina",
    deadLine: new Date(2021, 1, 15), //"2021-02-15",
    isImportant: true,
    isActive: true,
    finishDate: null,
  },
  {
    id: uuid(),
    text: "zrobic dobry uczynek",
    deadLine: new Date(2021, 5, 15), //"2021-06-15",
    isImportant: false,
    isActive: true,
    finishDate: null,
  },
  {
    id: uuid(),
    text: "Kupic mleko",
    deadLine: new Date(2021, 0, 25), //"2021-01-25",
    isImportant: true,
    isActive: true,
    finishDate: null,
  },
  {
    id: uuid(),
    text: "umyć samochód",
    deadLine: new Date(2021, 1, 24), //"2021-02-24",
    isImportant: true,
    isActive: true,
    finishDate: null,
  },
];

export default initialTasks;
