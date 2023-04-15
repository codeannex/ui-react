import { hasError } from "@components/client/Form";

import { ERROR } from "@constants/error";

describe("Component - Form - utils `hasError`", () => {
  const mockErrors = {
    firstName: "Required",
    lastName: "Required",
    middleName: undefined,
  };

  describe("throws error", () => {
    test("invalid parameter `null`", () => {
      expect(() => {
        // @ts-ignore
        hasError(null);
      }).toThrow(ERROR.INVALID_PARAM);
    });

    test("invalid parameter `undefined`", () => {
      expect(() => {
        // @ts-ignore
        hasError(undefined);
      }).toThrow(ERROR.INVALID_PARAM);
    });
  });

  describe("returns", () => {
    test("length of `0`", () => {
      expect(hasError({})).toBe(0);
    });

    test("length of `2`", () => {
      expect(hasError(mockErrors)).toBe(2);
    });
  });
});
