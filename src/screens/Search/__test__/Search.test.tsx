import { api } from "@services/api";
import { fireEvent, screen, waitFor } from "@testing-library/react-native";
import { mockCityAPIResponse } from "@services/__test__/mocks/mockCityAPIResponse";

import { customTestRender } from "../../../../__test__/utils/customTestRender";
import { Search } from "../index";

describe("Screen: Search", () => {
  it("should list finded city", async () => {
    jest.spyOn(api, "get").mockResolvedValue({
      data: mockCityAPIResponse,
    });

    customTestRender(<Search />);

    const input = await waitFor(() =>
      screen.findByTestId("search-state-input")
    );

    fireEvent.changeText(input, "Rio de Janeiro");

    const option = await waitFor(() => screen.findByText(/rio de janeiro/i));

    expect(option).toBeOnTheScreen();
  });
});
