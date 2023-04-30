import { sanitizeTouched } from "@components/client/Form";

const mockFieldRefs: any = {
  email: { current: {} },
  firstName: { current: {} },
};

const mockValidationErrors = {
  email: "Required",
  firstName: "Required",
  password: "Required",
};

describe("Component - Form - utils `sanitizeTouched`", () => {
  it("should return correct touched values", () => {
    const result = {
      email: true,
      firstName: true,
    };

    const { touched } = sanitizeTouched(mockValidationErrors, mockFieldRefs);

    expect(touched).toEqual(result);
  });
});
