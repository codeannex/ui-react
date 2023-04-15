import { ERROR } from "@constants/error";

import { _GetValue } from "../types";

export const _getValue = ({ fieldName, values }: _GetValue) => {
  if (!fieldName) {
    throw new Error(`_getValue ${ERROR.MISSING_PARAM} fieldName`);
  }

  if (!values) {
    throw new Error(`_getValue ${ERROR.MISSING_PARAM} values`);
  }

  return values[fieldName];
};

export default _getValue;
