import { render, screen } from "@testing-library/react-native";

import { NextDays } from "@components/NextDays";
import ClearDay from "@assets/clear_day.svg";

describe("components/nextDays", () => {
  it("should render next days", () => {
    render(
      <NextDays
        data={[
          {
            day: "18/07",
            weather: "Céu limpo",
            max: "20",
            min: "10",
            icon: ClearDay,
          },
          {
            day: "19/07",
            weather: "Céu limpo",
            max: "20",
            min: "10",
            icon: ClearDay,
          },
        ]}
      />
    );

    expect(screen.getByText("18/07")).toBeTruthy();
    expect(screen.getByText("19/07")).toBeTruthy();
  });
});
