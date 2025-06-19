import { CityAPIResponse } from "@services/getCityByNameService";

export const mockCityAPIResponse: CityAPIResponse = {
  id: "1",
  name: "Rio de Janeiro",
  sys: { country: "BR" },
  coord: {
    lon: 123,
    lat: 456,
  },
};
