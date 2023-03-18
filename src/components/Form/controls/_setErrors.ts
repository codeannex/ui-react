import { CONSTANT } from "@components/Form/constants";
import { STATE_ACTION_TYPE } from "@components/Form/index";

import { _SetErrors } from "../types";

export const _setErrors = ({ errors, dispatch }: _SetErrors) => {
  if (!errors) {
    throw new Error(`errors ${CONSTANT.ERROR.MISSING_PARAM}`);
  }

  dispatch({
    type: STATE_ACTION_TYPE.SET_ERRORS,
    payload: errors,
  });
};

export default _setErrors;
