import { isPlainObject } from "./isPlainObject";

export const deleteUndefinedProps = (obj: any) => {
  if (!isPlainObject(obj)) {
    throw new Error("Not a plain object");
  }

  for (const prop in obj) {
    if (obj.hasOwnProperty(prop) && obj[prop] === undefined) {
      delete obj[prop];
    }
  }
};
