import { init } from "../personApp";

jest.mock("./../services/personService.ts");

describe("personApp", () => {
  test("it should render persons", async () => {
    await init();

    const personTags = document.getElementsByClassName("person");

    expect(personTags).toHaveLength(2);
  });
});
