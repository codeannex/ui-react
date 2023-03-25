import { Errors, FieldRefState } from "../types";

export const sanitizeTouched = (validationErrors: Errors, fieldRefs: FieldRefState) => {
  const touched = Object.keys(validationErrors)
    .filter((fieldName) => fieldRefs[fieldName])
    .reduce((accumulator, key) => {
      return { ...accumulator, [key]: true };
    }, {});

  return { touched };
};
