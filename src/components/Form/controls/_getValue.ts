import { CONSTANT } from "@components/Form/constants";

import { _GetValue } from "../types";

export const _getValue = ({ fieldName, values }: _GetValue) => {
  if (!fieldName) {
    throw new Error(`fieldName ${CONSTANT.ERROR.MISSING_PARAM}`);
  }

  if (!values) {
    throw new Error(`values ${CONSTANT.ERROR.MISSING_PARAM}`);
  }

  return values[fieldName];
};

export default _getValue;
