import { IPerson } from "../../models/IPerson";

const persons: IPerson[] = [
  { name: "Sebastian", age: 44, isMarried: true },
  { name: "Hanna", age: 43, isMarried: true },
];

export const getPersons = async (): Promise<IPerson[]> => {
  return new Promise((resolve) => {
    resolve(persons);
  });
};
