import { STATE_ACTION_TYPE } from "@components/client/Form/index";

import { ERROR } from "@constants/error";

import { _SetError } from "../types";

export const _setError = ({ fieldName, value, dispatch }: _SetError) => {
  if (!fieldName) {
    throw new Error(`_setError ${ERROR.MISSING_PARAM} fieldName`);
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
      [fieldName]: value,
    },
  });
};

export default _setError;
