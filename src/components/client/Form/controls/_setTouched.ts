import { STATE_ACTION_TYPE } from "@components/client/Form/index";

import { ERROR } from "@constants/error";

import { _SetTouched } from "../types";

export const _setTouched = ({ fieldName, value, dispatch }: _SetTouched) => {
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
    type: STATE_ACTION_TYPE.SET_TOUCHED,
    payload: {
      [fieldName]: value,
    },
  });
};

export default _setTouched;
