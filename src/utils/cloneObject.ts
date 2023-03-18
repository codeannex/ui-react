import isBrowser from "./isBrowser";
import isObject from "./isObject";
import isPlainObject from "./isPlainObject";

export const cloneObject = <T>(data: T): T => {
  let clone: any;

  const isArray = Array.isArray(data);

  if (data instanceof Date) {
    clone = new Date(data);
  } else if (data instanceof Set) {
    clone = new Set(data);
  } else if (
    !(isBrowser && (data instanceof Blob || data instanceof FileList)) &&
    (isArray || isObject(data))
  ) {
    clone = isArray ? [] : {};

    if (!Array.isArray(data) && !isPlainObject(data)) {
      clone = data;
    } else {
      for (const key in data) {
        clone[key] = cloneObject(data[key]);
      }
    }
  } else {
    return data;
  }

  return clone;
};

export default cloneObject;
