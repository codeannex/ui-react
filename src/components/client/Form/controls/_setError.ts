import { STATE_ACTION_TYPE } from "@components/client/Form/index";

import { ERROR } from "@constants/error";

import { _SetError } from "../types";

export const _setError = ({ field, value, dispatch }: _SetError) => {
  if (!field) {
    throw new Error(`_setError ${ERROR.MISSING_PARAM} field`);
  }

  if (!value) {
    throw new Error(`_setError ${ERROR.MISSING_PARAM} value`);
  }

  if (!dispatch) {
    throw new Error(`_setError ${ERROR.MISSING_PARAM} dispatch`);
  }

  dispatch({
    type: STATE_ACTION_TYPE.SET_ERROR,
    payload: {
      [field]: value,
    },
  });
};

export default _setError;
