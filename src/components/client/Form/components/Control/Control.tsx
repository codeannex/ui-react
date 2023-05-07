import * as React from "react";

import PropTypes from "prop-types";

import {
  Errors,
  STATE_ACTION_TYPE,
  Touched,
  Values,
  useFormStateActionContext,
  useFormStateContext,
  useStaticPropsContext,
} from "@components/client/Form/index";

export type RenderArgs = {
  ref: any;
  errors: Errors;
  error: string;
  touched: Touched;
  values: Values;
  value: string;
  field: string;

  onBlur: () => void;
  onChange: (e: React.ChangeEvent<any>) => void;
};

export interface ControlProps {
  /**
   * Sets the defualt value on the form field.
   */
  defaultValue?: string;

  /**
   * Required prop used to track form field state.
   */
  field: string;

  render: ({
    ref,
    errors,
    error,
    touched,
    values,
    value,
    field,
    onBlur,
    onChange,
  }: RenderArgs) => any;
}

export const Control: React.FC<ControlProps> = ({ defaultValue, field, render }) => {
  const { errors = {}, touched = {}, values = {}, formLoadComplete } = useFormStateContext();

  const { fieldRef } = useStaticPropsContext();

  const displatch = useFormStateActionContext();

  const ref = React.useRef<any>(null);

  const value = values[field] || "";
  const error = errors[field] && touched[field] ? (errors[field] as string) : "";

  /**
   * Handlers
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e?.target.value;

    displatch({
      type: STATE_ACTION_TYPE.UPDATE_VALUE,
      payload: {
        [field]: value,
      },
    });
  };

  const handleBlur = () => {
    if (!touched[field]) {
      displatch({
        type: STATE_ACTION_TYPE.SET_TOUCHED,
        payload: {
          [field]: true,
        },
      });
    }
  };

  /** Init default value **/
  React.useEffect(() => {
    if (defaultValue && !formLoadComplete) {
      displatch({
        type: STATE_ACTION_TYPE.UPDATE_VALUE,
        payload: {
          [field]: defaultValue,
        },
      });
    }
  }, [defaultValue, formLoadComplete]);

  /** Init field ref **/
  React.useEffect(() => {
    fieldRef?.safeSet(field, {
      [field]: {
        _field: {
          ref: ref?.current,
          name: field,
        },
      },
    });
  }, []);

  return render({
    ref,
    errors,
    error,
    touched,
    values,
    value,
    field,
    onBlur: handleBlur,
    onChange: handleChange,
  });
};

export default Control;

Control.propTypes = {
  render: PropTypes.func.isRequired,
  field: PropTypes.string.isRequired,
};
