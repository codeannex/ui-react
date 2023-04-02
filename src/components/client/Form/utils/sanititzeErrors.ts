import { Errors, FieldRefState } from "../types";

export const sanitizeErrors = (validationErrors: Errors, fieldRefs: FieldRefState) => {
  const errors: { [key: string]: string } = Object.keys(validationErrors)
    .filter((fieldName) => fieldRefs[fieldName])
    .reduce((accumulator, key) => Object.assign(accumulator, { [key]: validationErrors[key] }), {});

  return { errors };
};
