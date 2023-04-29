import isPrimitive from "@utils/isPrimitive";

describe("utils - isPrimitive", () => {
  describe("should return true", () => {
    test("when value is primitive", () => {
      expect(isPrimitive("foo")).toBeTruthy();
      expect(isPrimitive(19)).toBeTruthy();
      expect(isPrimitive(19)).toBeTruthy();
      expect(isPrimitive(true)).toBeTruthy();
      expect(isPrimitive(undefined)).toBeTruthy();
      expect(isPrimitive(null)).toBeTruthy();
      expect(isPrimitive("0o377777777777777777")).toBeTruthy();
    });
  });

  describe("should return false", () => {
    test("when value is not a primitive", () => {
      expect(isPrimitive({})).toBeFalsy();
      expect(isPrimitive([])).toBeFalsy();
      expect(isPrimitive(new Map())).toBeFalsy();
      expect(isPrimitive(new Set())).toBeFalsy();
    });
  });
});
