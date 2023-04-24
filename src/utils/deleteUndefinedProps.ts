import { ERROR } from "@constants/error";

import { isPlainObject } from "./isPlainObject";

export const deleteUndefinedProps = (obj: any) => {
  if (!isPlainObject(obj)) {
    throw new Error(`deleteUndefinedProps ${ERROR.NOT_PLAIN_OBJECT} parameter`);
  }

  for (const prop in obj) {
    if (obj.hasOwnProperty(prop) && obj[prop] === undefined) {
      delete obj[prop];
    }
  }

  return { ...obj };
};

export default deleteUndefinedProps;
