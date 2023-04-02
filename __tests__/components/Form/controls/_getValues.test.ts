import { CONSTANT } from "@components/client/Form/constants";
import { _getValues } from "@components/client/Form/controls";

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
    // @ts-ignore
    expect(() => _getValues()).toThrow(CONSTANT.ERROR.MISSING_VALUES_PARAM);
  });
});
