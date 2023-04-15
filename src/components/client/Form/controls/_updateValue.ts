import { ERROR } from "@constants/error";

import { STATE_ACTION_TYPE, _UpdateValue } from "../types";

export const _updateValue = ({ fieldName, value, dispatch }: _UpdateValue) => {
  if (!fieldName) {
    throw new Error(`${ERROR.MISSING_PARAM} fieldName`);
  }

  if (!value) {
    throw new Error(`${ERROR.MISSING_PARAM} value`);
  }

  if (!dispatch) {
    throw new Error(`${ERROR.MISSING_PARAM} dispatch`);
  }

  dispatch({
    type: STATE_ACTION_TYPE.UPDATE_VALUE,
    payload: {
      [fieldName]: value,
    },
  });
};

export default _updateValue;
