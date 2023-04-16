import { _getValues } from "@components/client/Form/controls";

import { ERROR } from "@constants/error";

describe("Component - Form - controls _getValues", () => {
  const values = {
    email: "foo@bar.com",
    firstName: "tony",
    lastName: "tiger",
  };

  test("should return existing values", () => {
    expect(_getValues(values)).toBe(values);
  });

  test("should return `error` if missing `values` param", () => {
    expect.assertions(2);

    try {
      // @ts-ignore
      _getValues();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty("message", `_getValues ${ERROR.MISSING_PARAM} values`);
    }
  });
});
