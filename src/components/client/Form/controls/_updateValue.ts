import { CONSTANT } from "@components/client/Form/constants";

import { STATE_ACTION_TYPE, _UpdateValue } from "../types";

export const _updateValue = ({ fieldName, value, dispatch }: _UpdateValue) => {
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
    type: STATE_ACTION_TYPE.UPDATE_VALUE,
    payload: {
      [fieldName]: value,
    },
  });
};

export default _updateValue;
