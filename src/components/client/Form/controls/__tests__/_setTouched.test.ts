import { _setTouched } from "@components/client/Form/controls";
import { STATE_ACTION_TYPE } from "@components/client/Form/index";

import { ERROR } from "@constants/error";

describe("Component - Form - controls _setTouched", () => {
  const mockDispatch = jest.fn();

  const mockAction = {
    type: STATE_ACTION_TYPE.SET_TOUCHED,
    payload: {
      firstName: true,
    },
  };

  test("should call displatch successfully", () => {
    _setTouched({ field: "firstName", value: true, dispatch: mockDispatch });

    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });

  describe("should return error", () => {
    test("if missing `field` param", () => {
      expect.assertions(2);

      try {
        // @ts-ignore
        _setTouched({ value: true, dispatch: mockDispatch });
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", `_setTouched ${ERROR.MISSING_PARAM} field`);
      }
    });

    test("if missing `value` param", () => {
      expect.assertions(2);

      try {
        // @ts-ignore
        _setTouched({ field: "firstName", dispatch: mockDispatch });
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", `_setTouched ${ERROR.MISSING_PARAM} value`);
      }
    });

    test("if missing `dispatch` param", () => {
      expect.assertions(2);

      try {
        // @ts-ignore
        _setTouched({ field: "firstName", value: true });
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", `_setTouched ${ERROR.MISSING_PARAM} dispatch`);
      }
    });
  });
});
