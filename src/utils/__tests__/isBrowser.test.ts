import isBrowser from "@utils/isBrowser";

describe("utils - isBrowser", () => {
  /**
   * Jest self mocks widow object.
   */
  test("should return true in browser", () => {
    expect(isBrowser).toBeTruthy();
  });
});
