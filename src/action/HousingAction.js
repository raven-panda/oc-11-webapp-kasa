import { appEnv } from "../env.js";
import housingsFixture from "../__fixtures__/logements.json";

export async function fetchHousings() {
  if (appEnv.fixtureEnabled)
    return Promise.resolve(housingsFixture);

  const response = await fetch(`${appEnv.backendUri}/housing`);
  if (!response.ok) {
    throw new Error('Error while loading data');
  }
  return await response.json();
}

export async function fetchHousingById(id) {
  if (appEnv.fixtureEnabled)
    return Promise.resolve(housingsFixture.find(housing => housing.id === id));

  const response = await fetch(`${appEnv.backendUri}/housing/${id}`);
  if (!response.ok) {
    throw new Error(`${response.status}`);
  }
  return await response.json();
}
