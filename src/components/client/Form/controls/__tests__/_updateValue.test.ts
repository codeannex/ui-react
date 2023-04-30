import { _updateValue } from "@components/client/Form/controls";
import { STATE_ACTION_TYPE } from "@components/client/Form/index";

import { ERROR } from "@constants/error";

describe("Component - Form - controls _updateValue", () => {
  const mockValues = {
    firstName: "John",
  };

  const mockDispatch = jest.fn();

  const mockAction = {
    type: STATE_ACTION_TYPE.UPDATE_VALUE,
    payload: mockValues,
  };

  test("should call displatch successfully", () => {
    _updateValue({ field: "firstName", value: "John", dispatch: mockDispatch });

    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });

  describe("should return error", () => {
    test("if missing `field` param", () => {
      expect.assertions(2);

      try {
        // @ts-ignore
        _updateValue({ value: "John", dispatch: mockDispatch });
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", `_updateValue ${ERROR.MISSING_PARAM} field`);
      }
    });

    test("if missing `value` param", () => {
      expect.assertions(2);

      try {
        // @ts-ignore
        _updateValue({ field: "firstName", dispatch: mockDispatch });
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", `_updateValue ${ERROR.MISSING_PARAM} value`);
      }
    });

    test("if missing `dispatch` param", () => {
      expect.assertions(2);

      try {
        // @ts-ignore
        _updateValue({ field: "firstName", value: "John" });
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", `_updateValue ${ERROR.MISSING_PARAM} dispatch`);
      }
    });
  });
});
