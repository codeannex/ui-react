import { STATE_ACTION_TYPE } from "@components/client/Form/index";

import { ERROR } from "@constants/error";

import { _SetErrors } from "../types";

export const _setErrors = ({ errors, dispatch }: _SetErrors) => {
  if (!errors) {
    throw new Error(`_setErrors ${ERROR.MISSING_PARAM} errors`);
  }

  if (!dispatch) {
    throw new Error(`_setErrors ${ERROR.MISSING_PARAM} dispatch`);
  }

  dispatch({
    type: STATE_ACTION_TYPE.SET_ERRORS,
    payload: errors,
  });
};

export default _setErrors;
