import { CONSTANT } from "@components/Form/constants";
import { STATE_ACTION_TYPE } from "@components/Form/index";

import { _SetError } from "../types";

export const _setError = ({ fieldName, value, dispatch }: _SetError) => {
  if (!fieldName) {
    throw new Error(`fieldName ${CONSTANT.ERROR.MISSING_PARAM}`);
  }

  if (!value) {
    throw new Error(`value ${CONSTANT.ERROR.MISSING_PARAM}`);
  }

  if (!dispatch) {
    throw new Error(`dispatch ${CONSTANT.ERROR.MISSING_PARAM}`);
  }

  dispatch({
    type: STATE_ACTION_TYPE.SET_ERROR,
    payload: {
      [fieldName]: value,
    },
  });
};

export default _setError;
