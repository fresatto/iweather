import { getWeatherByCityService } from "@services/getWeatherByCityService";
import { mockWeatherAPIResponse } from "./mocks/mockWeatherAPIResponse";

import { api } from "@services/api";

describe("services/getWeatherByCityService", () => {
  it("should be return weather details by city", async () => {
    jest.spyOn(api, "get").mockResolvedValue({
      data: mockWeatherAPIResponse,
    });

    const response = await getWeatherByCityService({
      latitude: 123,
      longitude: 456,
    });

    expect(response).toHaveProperty("today");
  });
});
