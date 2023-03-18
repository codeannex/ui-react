import { CONSTANT } from "@components/Form/constants";
import { STATE_ACTION_TYPE } from "@components/Form/index";

import { _UnsetTouched } from "../types";

export const _unsetTouched = ({ fieldName, value, dispatch }: _UnsetTouched) => {
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
    type: STATE_ACTION_TYPE.UNSET_TOUCHED,
    payload: {
      [fieldName]: value,
    },
  });
};

export default _unsetTouched;
