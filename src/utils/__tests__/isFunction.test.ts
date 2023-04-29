import isFunction from "@utils/isFunction";

describe("utils - isFunction", () => {
  describe("should return true", () => {
    test("when value is function", () => {
      const fn1 = () => null;
      const fn2 = function () {
        return null;
      };

      expect(isFunction(fn1)).toBeTruthy();
      expect(isFunction(fn2)).toBeTruthy();
    });
  });

  describe("should return false", () => {
    test("when value is not a function", () => {
      expect(isFunction("foo")).toBeFalsy();
      expect(isFunction(19)).toBeFalsy();
      expect(isFunction({})).toBeFalsy();
      expect(isFunction([])).toBeFalsy();
      expect(isFunction(new Map())).toBeFalsy();
      expect(isFunction(undefined)).toBeFalsy();
      expect(isFunction(null)).toBeFalsy();
    });
  });
});
