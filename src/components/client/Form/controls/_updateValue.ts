import { ERROR } from "@constants/error";

import { STATE_ACTION_TYPE, _UpdateValue } from "../types";

export const _updateValue = ({ field, value, dispatch }: _UpdateValue) => {
  if (!field) {
    throw new Error(`${ERROR.MISSING_PARAM} field`);
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
      [field]: value,
    },
  });
};

export default _updateValue;
