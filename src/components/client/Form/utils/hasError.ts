import { deleteUndefinedProps, isPlainObject } from "@utils/index";

import { ERROR } from "@constants/error";

import { Errors } from "../types";

export const hasError = (errors: Errors) => {
  if (!isPlainObject(errors)) {
    throw new Error(`hasError ${ERROR.INVALID_PARAM}`);
  }

  deleteUndefinedProps(errors);

  return Object.keys(errors).length;
};

export default hasError;
