import isNullOrUndefined from "@utils/isNullOrUndefined";

describe("utils - isNullOrUndefined", () => {
  describe("should return true", () => {
    test("when value is null or undefined", () => {
      expect(isNullOrUndefined(null)).toBeTruthy();
      expect(isNullOrUndefined(undefined)).toBeTruthy();
    });
  });

  describe("should return false", () => {
    test("when value is not null or undefined", () => {
      expect(isNullOrUndefined(19)).toBeFalsy();
      expect(isNullOrUndefined({})).toBeFalsy();
      expect(isNullOrUndefined([])).toBeFalsy();
      expect(isNullOrUndefined(new Map())).toBeFalsy();
    });
  });
});
