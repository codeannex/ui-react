import { STATE_ACTION_TYPE } from "@components/client/Form/index";

import { ERROR } from "@constants/error";

import { _SetTouched } from "../types";

export const _setTouched = ({ field, value, dispatch }: _SetTouched) => {
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
    type: STATE_ACTION_TYPE.SET_TOUCHED,
    payload: {
      [field]: value,
    },
  });
};

export default _setTouched;
