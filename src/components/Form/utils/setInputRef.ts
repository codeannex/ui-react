import * as React from "react";

import {
  InputEmail,
  InputPassword,
  InputText,
  Radio,
  Select,
  TextArea,
} from "@components/Form/index";

import { FieldRefType } from "../types";

/**
 * Confirms recursive query has found a valid form field to
 * attach the ref for registering the form field.
 */
const validFromField = (child: any) => {
  return (
    child.type === InputEmail ||
    child.type === InputPassword ||
    child.type === InputText ||
    child.type === Radio ||
    child.type === Select ||
    child.type === TextArea
  );
};

/**
 * Recursive query used to locate valid form fields for
 * registration.
 */
export const setInputRef = (children: React.ReactElement<any>, ref: React.Ref<FieldRefType>) => {
  if (typeof children === "undefined") return;

  return React.Children.map(children, (child) => {
    /** text node */
    if (!child.props) {
      return child;
    }

    const recursiveGrandchildren: unknown = setInputRef(child.props.children, ref);

    const childNewProps = {
      children: recursiveGrandchildren,
    };

    return validFromField(child)
      ? React.cloneElement(child, { ref })
      : React.cloneElement(child, childNewProps);
  });
};
