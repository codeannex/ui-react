import { ERROR } from "@constants/error";

import { _GetValues } from "../types";

export const _getValues = (values: _GetValues) => {
  if (!values) {
    throw new Error(`_getValues ${ERROR.MISSING_PARAM} values`);
  }

  return values;
};

export default _getValues;
