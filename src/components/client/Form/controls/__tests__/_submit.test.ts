import { _submit } from "@components/client/Form/controls";
import { STATE_ACTION_TYPE } from "@components/client/Form/index";

import { ERROR } from "@constants/error";

describe("Component - Form - controls _clearForm", () => {
  const mockDispatch = jest.fn();

  const mockAction = {
    type: STATE_ACTION_TYPE.SET_PRE_SUBMIT,
    payload: null,
  };

  test("should call displatch successfully", () => {
    _submit({ dispatch: mockDispatch });

    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });

  describe("should return error", () => {
    test("if missing `dispatch` param", () => {
      expect.assertions(2);

      try {
        // @ts-ignore
        _submit({});
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", `_submit ${ERROR.MISSING_PARAM} dispatch`);
      }
    });
  });
});
