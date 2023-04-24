import { STATE_ACTION_TYPE } from "@components/client/Form/index";

import { ERROR } from "@constants/error";

import { _ClearForm } from "../types";

export const _clearForm = ({ dispatch }: _ClearForm) => {
  if (!dispatch) {
    throw new Error(`_clearForm ${ERROR.MISSING_PARAM} dispatch`);
  }

  dispatch({
    type: STATE_ACTION_TYPE.RESET_FORM_STATE,
    payload: null,
  });
};

export default _clearForm;
