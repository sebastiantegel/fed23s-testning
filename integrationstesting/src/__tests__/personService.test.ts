import { getPersons } from "../services/personService";

jest.mock("axios", () => {
  return {
    get: async (url: string) => {
      if (url !== "") {
      }

      return new Promise((resolve) => {
        resolve({ data: [{ name: "Sebastian", age: 44, isMarried: true }] });
      });
    },
  };
});

describe("Person service", () => {
  test("it should return mock data", async () => {
    const persons = await getPersons();

    console.log(persons);

    expect(persons).toHaveLength(1);
  });
});
