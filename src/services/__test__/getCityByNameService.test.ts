import { api } from "@services/api";
import { getCityByNameService } from "@services/getCityByNameService";
import { mockCityAPIResponse } from "./mocks/mockCityAPIResponse";

describe("services/getCityByNameService", () => {
  it("should return city details", async () => {
    jest.spyOn(api, "get").mockResolvedValue({
      data: mockCityAPIResponse,
    });

    const city = await getCityByNameService("Rio");

    expect(city).toHaveLength(1);
  });

  it("should return city details formatted", async () => {
    jest.spyOn(api, "get").mockResolvedValue({
      data: mockCityAPIResponse,
    });

    const city = await getCityByNameService("Rio");

    expect(city).toEqual([
      {
        id: "1",
        name: "Rio de Janeiro, BR",
        latitude: 456,
        longitude: 123,
      },
    ]);
  });
});
