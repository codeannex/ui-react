import isDateObject from "@utils/isDateObject";

describe("utils - isDateObject", () => {
  describe("should return true", () => {
    test("when value is a date object", () => {
      expect(isDateObject(new Date())).toBeTruthy();
      expect(isDateObject(new Date("October 13, 2014 11:13:00"))).toBeTruthy();
      expect(isDateObject(new Date("2022-03-25"))).toBeTruthy();
      expect(isDateObject(new Date(2018, 11, 24, 10, 33, 30, 0))).toBeTruthy();
      expect(isDateObject(new Date(100000000000))).toBeTruthy();
      expect(isDateObject(new Date(0))).toBeTruthy();
    });
  });

  describe("should return false", () => {
    test("when value is not a date object", () => {
      expect(isDateObject(19)).toBeFalsy();
      expect(isDateObject({})).toBeFalsy();
      expect(isDateObject([])).toBeFalsy();
      expect(isDateObject(new Map())).toBeFalsy();
      expect(isDateObject(undefined)).toBeFalsy();
      expect(isDateObject(null)).toBeFalsy();
    });
  });
});
