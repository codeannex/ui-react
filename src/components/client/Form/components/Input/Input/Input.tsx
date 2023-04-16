import * as React from "react";

import classNames from "classnames";
import PropTypes from "prop-types";

import {
  Error,
  useFormStateActionContext,
  useFormStateContext,
  useStaticPropsContext,
} from "@components/client/Form/index";

import { ELEMENT_OPTION_TYPE, Element } from "@core/server/Element/Element";

import { STATE_ACTION_TYPE } from "../../../types";

export type InputProps = {
  /**
   * Sets the input attribute `type` to determine type of input
   * field. Supports all input types.
   */
  asType?: string;

  /**
   * Sets CSS class/classes on the component for styling.
   */
  classes?: string | string[];

  /**
   * Sets CSS class/classes on the `Error` component for styling.
   */
  classesError?: string | string[];

  /**
   * Sets the defualt value on the form field.
   */
  defaultValue?: string;

  /**
   * Disables the form field.
   */
  disabled?: boolean;

  /**
   * Required prop used to track form field state.
   */
  fieldName: string;

  /**
   * Sets the id attribute.
   */
  id?: string;

  /**
   * Sets the placeholder value on the form field.
   */
  placeholder?: string;
};

export const Input: React.FC<InputProps> = ({
  asType = "text",
  classes,
  classesError,
  defaultValue,
  disabled,
  fieldName,
  id,
  placeholder,
}) => {
  const { errors = {}, values = {}, touched = {} } = useFormStateContext();

  const { fieldRef } = useStaticPropsContext();

  const displatch = useFormStateActionContext();

  const ref = React.useRef<HTMLInputElement>(null);

  const value = values[fieldName] as string;
  const error = errors[fieldName] && touched[fieldName];

  const _classes = classNames(classes && classes);
  const _classesError = classNames(classesError && classesError);

  /**
   * Handlers
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e?.target.value;

    displatch({
      type: STATE_ACTION_TYPE.UPDATE_VALUE,
      payload: {
        [fieldName]: value,
      },
    });
  };

  const handleBlur = () => {
    if (!touched[fieldName]) {
      displatch({
        type: STATE_ACTION_TYPE.SET_TOUCHED,
        payload: {
          [fieldName]: true,
        },
      });
    }
  };

  /** Init default value **/
  React.useEffect(() => {
    if (defaultValue) {
      displatch({
        type: STATE_ACTION_TYPE.UPDATE_VALUE,
        payload: {
          [fieldName]: defaultValue,
        },
      });
    }
  }, []);

  /** Init field ref **/
  React.useEffect(() => {
    fieldRef?.safeSet([fieldName], {
      [fieldName]: {
        _field: {
          ref: ref?.current,
          name: fieldName,
        },
      },
    });
  }, []);

  return (
    <Element as={ELEMENT_OPTION_TYPE.DIV}>
      <Element
        as={ELEMENT_OPTION_TYPE.INPUT}
        classes={_classes || undefined}
        disabled={disabled}
        id={id || undefined}
        placeholder={placeholder}
        ref={ref}
        type={asType}
        value={value || ""}
        /** Handlers **/
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {error && (
        <Error message={errors[fieldName] as string} classes={_classesError || undefined} />
      )}
    </Element>
  );
};

Input.propTypes = {
  asType: PropTypes.string,
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  classesError: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  fieldName: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
