import { isString } from "@utils/isString";

describe("utils - isString", () => {
  describe("should return true", () => {
    test("when value is string", () => {
      expect(isString("abc")).toBeTruthy();
    });
  });

  describe("should return false", () => {
    test("when value is none string", () => {
      expect(isString(19)).toBeFalsy();
      expect(isString({})).toBeFalsy();
      expect(isString([])).toBeFalsy();
      expect(isString(new Map())).toBeFalsy();
      expect(isString(undefined)).toBeFalsy();
      expect(isString(null)).toBeFalsy();
    });
  });
});
