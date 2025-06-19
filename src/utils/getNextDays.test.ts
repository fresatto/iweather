import { getNextDays } from "./getNextDays";

describe("utils/getNextDays", () => {
  it("should return the next 5 days", () => {
    const days = getNextDays();

    expect(days).toHaveLength(5);
  });
});
