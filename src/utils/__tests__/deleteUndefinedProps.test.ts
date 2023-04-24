import deleteUndefinedProps from "@utils/deleteUndefinedProps";

import { ERROR } from "@constants/error";

const mockHasUndefinedProps = {
  firstName: "Required",
  lastName: "Required",
  email: undefined,
  password: undefined,
};
const mockNoUndefinedProps = {
  firstName: "Required",
  lastName: "Required",
};

describe("utils - deleteUndefinedProps", () => {
  test("should remove `undefined` props", () => {
    expect(deleteUndefinedProps(mockHasUndefinedProps)).toStrictEqual(mockNoUndefinedProps);
  });

  test("should return `empty` object", () => {
    expect(deleteUndefinedProps({})).toStrictEqual({});
  });

  describe("should throw error", () => {
    test("if `undefined` parameter", () => {
      expect.assertions(2);

      try {
        // @ts-ignore
        deleteUndefinedProps(undefined);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty(
          "message",
          `deleteUndefinedProps ${ERROR.NOT_PLAIN_OBJECT} parameter`
        );
      }
    });

    test("if `null` parameter", () => {
      expect.assertions(2);

      try {
        // @ts-ignore
        deleteUndefinedProps(null);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty(
          "message",
          `deleteUndefinedProps ${ERROR.NOT_PLAIN_OBJECT} parameter`
        );
      }
    });

    test("if `number` parameter", () => {
      expect.assertions(2);

      try {
        // @ts-ignore
        deleteUndefinedProps(19);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty(
          "message",
          `deleteUndefinedProps ${ERROR.NOT_PLAIN_OBJECT} parameter`
        );
      }
    });
  });
});
