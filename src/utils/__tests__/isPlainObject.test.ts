import isPlainObject from "@utils/isPlainObject";

describe("utils - isPlainObject", () => {
  describe("should return true", () => {
    test("when value is a plain object", () => {
      expect(isPlainObject({})).toBeTruthy();
    });
  });

  describe("should return false", () => {
    test("when value is not an plain object", () => {
      // @ts-ignore
      expect(isPlainObject("foo")).toBeFalsy();

      // @ts-ignore
      expect(isPlainObject(19)).toBeFalsy();

      // @ts-ignore
      expect(isPlainObject(true)).toBeFalsy();

      // @ts-ignore
      expect(isPlainObject(undefined)).toBeFalsy();

      // @ts-ignore
      expect(isPlainObject(null)).toBeFalsy();

      expect(isPlainObject([])).toBeFalsy();
      expect(isPlainObject(new Set())).toBeFalsy();
      expect(isPlainObject(new Map())).toBeFalsy();
    });
  });
});
