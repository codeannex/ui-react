import { _clearForm } from "@components/client/Form/controls";
import { STATE_ACTION_TYPE } from "@components/client/Form/index";

describe("Component - Form - controls _clearForm", () => {
  const mockDispatch = jest.fn();

  const mockAction = {
    type: STATE_ACTION_TYPE.RESET_FORM_STATE,
    payload: null,
  };

  test("should call displatch successfully", () => {
    _clearForm({ dispatch: mockDispatch });

    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });
});
