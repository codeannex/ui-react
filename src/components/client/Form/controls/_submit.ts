import { STATE_ACTION_TYPE } from "@components/client/Form/index";

import { ERROR } from "@constants/error";

import { _Submit } from "../types";

export const _submit = ({ dispatch }: _Submit) => {
  if (!dispatch) {
    throw new Error(`_submit ${ERROR.MISSING_PARAM} dispatch`);
  }

  dispatch({
    type: STATE_ACTION_TYPE.SET_PRE_SUBMIT,
    payload: null,
  });
};

export default _submit;
