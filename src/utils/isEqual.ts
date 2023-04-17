import isDateObject from "./isDateObject";
import isObject from "./isObject";
import isPrimitive from "./isPrimitive";

export const deepEqual = (thing1: any, thing2: any) => {
  if (isPrimitive(thing1) || isPrimitive(thing2)) {
    return thing1 === thing2;
  }

  if (isDateObject(thing1) && isDateObject(thing2)) {
    return thing1.getTime() === thing2.getTime();
  }

  const keys1 = Object.keys(thing1);
  const keys2 = Object.keys(thing2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = thing1[key];

    if (!keys2.includes(key)) {
      return false;
    }

    if (key !== "ref") {
      const val2 = thing2[key];

      if (
        (isDateObject(val1) && isDateObject(val2)) ||
        (isObject(val1) && isObject(val2)) ||
        (Array.isArray(val1) && Array.isArray(val2))
          ? !deepEqual(val1, val2)
          : val1 !== val2
      ) {
        return false;
      }
    }
  }

  return true;
};

export default deepEqual;
