import { STATE_ACTION_TYPE } from "@components/client/Form/index";

import { ERROR } from "@constants/error";

import { _UnsetTouched } from "../types";

export const _unsetTouched = ({ field, value, dispatch }: _UnsetTouched) => {
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
    type: STATE_ACTION_TYPE.UNSET_TOUCHED,
    payload: {
      [field]: value,
    },
  });
};

export default _unsetTouched;
