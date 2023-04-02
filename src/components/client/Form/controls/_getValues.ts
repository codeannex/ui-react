import { CONSTANT } from "@components/client/Form/constants";

import { _GetValues } from "../types";

export const _getValues = (values: _GetValues) => {
  if (!values) {
    throw new Error(`values ${CONSTANT.ERROR.MISSING_PARAM}`);
  }

  return values;
};

export default _getValues;
