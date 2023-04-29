import isObject from "@utils/isObject";

describe("utils - isObject", () => {
  describe("should return true", () => {
    test("when value is an object", () => {
      expect(isObject({})).toBeTruthy();
      expect(isObject(new Map())).toBeTruthy();
      expect(isObject(new Set())).toBeTruthy();
    });
  });

  describe("should return false", () => {
    test("when value is not an object", () => {
      expect(isObject("foo")).toBeFalsy();
      expect(isObject(19)).toBeFalsy();
      expect(isObject(true)).toBeFalsy();
      expect(isObject([])).toBeFalsy();
      expect(isObject(undefined)).toBeFalsy();
      expect(isObject(null)).toBeFalsy();
    });
  });
});
