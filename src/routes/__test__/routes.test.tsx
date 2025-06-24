import { act, render, screen, waitFor } from "@testing-library/react-native";
import { Routes } from "../";
import {
  getStorageCity,
  saveStorageCity,
} from "@libs/asyncStorage/cityStorage";
import { CityProps } from "@services/getCityByNameService";
import { customTestRender } from "../../../__test__/utils/customTestRender";
import { api } from "@services/api";
import { mockWeatherAPIResponse } from "@services/__test__/mocks/mockWeatherAPIResponse";

describe("Routes", () => {
  it("should be render Search screen when city is not selected", async () => {
    customTestRender(<Routes />);

    const title = await waitFor(() =>
      screen.getByText(/um local para ver a previsão do tempo/)
    );

    expect(title).toBeTruthy();
  });

  it("should be render Dashboard screen when city is selected", async () => {
    jest.spyOn(api, "get").mockResolvedValue({
      data: mockWeatherAPIResponse,
    });

    const city: CityProps = {
      id: "1",
      name: "São Paulo",
      latitude: 123,
      longitude: 456,
    };

    await saveStorageCity(city);

    customTestRender(<Routes />);

    await waitFor(() => screen.getByText(city.name));

    expect(screen.getByText("São Paulo")).toBeTruthy();
  });
});
