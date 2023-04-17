import { _setError } from "@components/client/Form/controls";
import { STATE_ACTION_TYPE } from "@components/client/Form/index";

import { ERROR } from "@constants/error";

describe("Component - Form - controls _setError", () => {
  const mockDispatch = jest.fn();

  const mockAction = {
    type: STATE_ACTION_TYPE.SET_ERROR,
    payload: {
      firstName: "This was required",
    },
  };

  test("should call displatch successfully", () => {
    _setError({ field: "firstName", value: "This was required", dispatch: mockDispatch });

    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });

  describe("should return error", () => {
    test("if missing `field` param", () => {
      expect.assertions(2);

      try {
        // @ts-ignore
        _setError({ value: "This was required", dispatch: mockDispatch });
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", `_setError ${ERROR.MISSING_PARAM} field`);
      }
    });

    test("if missing `value` param", () => {
      expect.assertions(2);

      try {
        // @ts-ignore
        _setError({ field: "firstName", dispatch: mockDispatch });
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", `_setError ${ERROR.MISSING_PARAM} value`);
      }
    });

    test("if missing `dispatch` param", () => {
      expect.assertions(2);

      try {
        // @ts-ignore
        _setError({ field: "firstName", value: "This was required" });
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", `_setError ${ERROR.MISSING_PARAM} dispatch`);
      }
    });
  });
});
