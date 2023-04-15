import { _setErrors } from "@components/client/Form/controls";
import { STATE_ACTION_TYPE } from "@components/client/Form/index";

import { ERROR } from "@constants/error";

describe("Component - Form - controls _setErrors", () => {
  const mockErrors = {
    firstName: "Required",
    lastName: "Required",
    email: "Required",
    password: "Required",
    class: "Required",
    classType: "Required",
    comment: "Required",
  };

  const mockDispatch = jest.fn();

  const mockAction = {
    type: STATE_ACTION_TYPE.SET_ERRORS,
    payload: mockErrors,
  };

  test("should call displatch successfully", () => {
    _setErrors({ errors: mockErrors, dispatch: mockDispatch });

    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });

  describe("should return error", () => {
    test("if missing `errors` param", () => {
      expect.assertions(2);

      try {
        // @ts-ignore
        _setErrors({ dispatch: mockDispatch });
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", `_setErrors ${ERROR.MISSING_PARAM} errors`);
      }
    });

    test("if missing `dispatch` param", () => {
      expect.assertions(2);

      try {
        // @ts-ignore
        _setErrors({ errors: mockErrors });
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", `_setErrors ${ERROR.MISSING_PARAM} dispatch`);
      }
    });
  });
});
