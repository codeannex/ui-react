import { CONSTANT } from "@components/Form/constants";
import { STATE_ACTION_TYPE } from "@components/Form/index";

import { _SetTouched } from "../types";

export const _setTouched = ({ fieldName, value, dispatch }: _SetTouched) => {
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
    type: STATE_ACTION_TYPE.SET_TOUCHED,
    payload: {
      [fieldName]: value,
    },
  });
};

export default _setTouched;
