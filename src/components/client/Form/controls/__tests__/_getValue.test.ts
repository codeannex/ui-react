import { _getValue } from "@components/client/Form/controls";

import { ERROR } from "@constants/error";

describe("Component - Form - controls _getValue", () => {
  const values = {
    email: "foo@bar.com",
    firstName: "tony",
    lastName: "tiger",
  };

  test("should return `value` from existing target", () => {
    const fieldName = "email";
    const result = "foo@bar.com";

    expect(_getValue({ values, fieldName })).toBe(result);
  });

  test("should return `undefined` from non-existing target", () => {
    const fieldName = "missing";

    expect(_getValue({ values, fieldName })).toBe(undefined);
  });

  describe("should return error", () => {
    test("if missing `values` param", () => {
      const fieldName = "email";

      expect.assertions(2);

      try {
        // @ts-ignore
        _getValue({ fieldName });
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", `_getValue ${ERROR.MISSING_PARAM} values`);
      }
    });

    test("if missing `fieldName` param", () => {
      expect.assertions(2);

      try {
        // @ts-ignore
        _getValue({ values });
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", `_getValue ${ERROR.MISSING_PARAM} fieldName`);
      }
    });
  });
});
