import { deleteUndefinedProps } from "@utils/index";

import { Errors } from "../types";

export const hasError = (errors: Errors) => {
  deleteUndefinedProps(errors);

  return Object.keys(errors).length;
};

export default hasError;
