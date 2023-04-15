import isObject from "./isObject";

export const isPlainObject = (tempObject: object): boolean => {
  const prototypeCopy = tempObject?.constructor && tempObject.constructor.prototype;

  return isObject(prototypeCopy) && prototypeCopy.hasOwnProperty("isPrototypeOf");
};

export default isPlainObject;
