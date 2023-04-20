import { ERROR } from "@constants/error";

import { _GetValue } from "../types";

export const _getValue = ({ field, values }: _GetValue) => {
  if (!field) {
    throw new Error(`_getValue ${ERROR.MISSING_PARAM} field`);
  }

  if (!values) {
    throw new Error(`_getValue ${ERROR.MISSING_PARAM} values`);
  }

  return values[field];
};

export default _getValue;
