import { STATE_ACTION_TYPE } from "@components/client/Form/index";

import { ERROR } from "@constants/error";

import { _UnsetTouched } from "../types";

export const _unsetTouched = ({ fieldName, value, dispatch }: _UnsetTouched) => {
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
    type: STATE_ACTION_TYPE.UNSET_TOUCHED,
    payload: {
      [fieldName]: value,
    },
  });
};

export default _unsetTouched;
