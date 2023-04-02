import { CONSTANT } from "@components/client/Form/constants";
import { STATE_ACTION_TYPE } from "@components/client/Form/index";

import { _Submit } from "../types";

export const _submit = ({ dispatch }: _Submit) => {
  if (!dispatch) {
    throw new Error(`dispatch ${CONSTANT.ERROR.MISSING_PARAM}`);
  }

  dispatch({
    type: STATE_ACTION_TYPE.SET_PRE_SUBMIT,
    payload: {},
  });
};

export default _submit;