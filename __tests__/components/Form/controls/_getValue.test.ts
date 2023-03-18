import { CONSTANT } from "@components/Form/constants";
import { _getValue } from "@components/Form/controls";

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

  test("should return `error` if missing `values` param", () => {
    const fieldName = "email";

    // @ts-ignore
    expect(() => _getValue({ fieldName })).toThrow(CONSTANT.ERROR.MISSING_VALUES_PARAM);
  });

  test("should return `error` if missing `fieldName` param", () => {
    // @ts-ignore
    expect(() => _getValue({ values })).toThrow(CONSTANT.ERROR.MISSING_FIELD_NAME_PARAM);
  });
});
