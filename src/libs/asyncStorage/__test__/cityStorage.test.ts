import {
  getStorageCity,
  saveStorageCity,
  removeStorageCity,
} from "@libs/asyncStorage/cityStorage";
import { CityProps } from "@services/getCityByNameService";

describe("libs/asyncStorage/cityStorage", () => {
  const newCity: CityProps = {
    id: "1",
    name: "Rio de Janeiro",
    latitude: 123,
    longitude: 456,
  };

  it("should return null when city isnt stored", async () => {
    const response = await getStorageCity();

    expect(response).toBeNull();
  });

  it("should return city details when stored", async () => {
    await saveStorageCity(newCity);

    const storageCity = await getStorageCity();

    expect(storageCity).toEqual(newCity);
  });

  it("should remove city from storage", async () => {
    await saveStorageCity(newCity);

    await removeStorageCity();

    const storageCity = await getStorageCity();

    expect(storageCity).toBeNull();
  });
});
