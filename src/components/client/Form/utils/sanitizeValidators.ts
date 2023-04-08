import { Errors, FieldRefState } from "../types";

export const sanitizeValidators = (validationErrors: Errors, fieldRefs: FieldRefState) => {
  const validators: { [key: string]: string } = Object.keys(validationErrors)
    .filter((fieldName) => fieldRefs[fieldName])
    .reduce((accumulator, key) => Object.assign(accumulator, { [key]: validationErrors[key] }), {});

  return { validators };
};

export default sanitizeValidators;
