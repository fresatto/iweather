import { fireEvent, render, screen } from "@testing-library/react-native";

import { SelectList } from "@components/SelectList";
import { CityProps } from "@services/getCityByNameService";

describe("components/SelectList", () => {
  const data: CityProps[] = [
    {
      id: "1",
      name: "São Paulo",
      latitude: 123,
      longitude: 456,
    },
    {
      id: "2",
      name: "Rio de Janeiro",
      latitude: 789,
      longitude: 101,
    },
  ];
  it("should list locations", () => {
    const { getByText } = render(
      <SelectList data={data} onChange={() => {}} onPress={() => {}} />
    );

    expect(getByText("São Paulo")).toBeTruthy();
    expect(getByText("Rio de Janeiro")).toBeTruthy();
  });

  it("should be return city details selected", () => {
    const onPress = jest.fn();

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);

    const selectedCity = screen.getByText("São Paulo");

    fireEvent.press(selectedCity);

    expect(onPress).toHaveBeenCalledTimes(1);
    expect(onPress).toHaveBeenCalledWith(data[0]);
  });

  it("should nothing when data is empty", () => {
    render(<SelectList data={[]} onChange={() => {}} onPress={() => {}} />);

    const options = screen.getByTestId("options");

    expect(options.children).toHaveLength(0);
  });
});
