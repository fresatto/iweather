import { render, screen } from "@testing-library/react-native";

import { Day } from "@components/Day";
import ClearDay from "@assets/clear_day.svg";

describe("Day", () => {
  it("should render day", () => {
    render(
      <Day
        data={{
          day: "18/07",
          weather: "Céu limpo",
          max: "20",
          min: "10",
          icon: ClearDay,
        }}
      />
    );

    expect(screen.getByText("18/07")).toBeTruthy();
  });
});
