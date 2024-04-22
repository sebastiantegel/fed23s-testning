import { getPersons } from "./services/personService";

export const init = async () => {
  const persons = await getPersons();

  for (let i = 0; i < persons.length; i++) {
    const name = document.createElement("div");
    name.innerHTML = persons[i].name;
    name.className = "person";

    document.body.appendChild(name);
  }
};
