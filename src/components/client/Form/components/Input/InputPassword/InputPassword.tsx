import * as React from "react";

import classNames from "classnames";
import PropTypes from "prop-types";

import {
  Error,
  useFormFieldRefActionContext,
  useFormStateActionContext,
  useFormStateContext,
} from "@components/client/Form/index";

import { ELEMENT_OPTION_TYPE, Element } from "@core/server/Element/Element";

import { FIELD_REF_ACTION_TYPE, STATE_ACTION_TYPE } from "../../../types";

export type InputPasswordProps = {
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
   * Sets the placeholder value on the form field.
   */
  placeholder?: string;
};

export const InputPassword: React.FC<InputPasswordProps> = ({
  classes,
  classesError,
  defaultValue,
  disabled,
  fieldName,
  placeholder,
}) => {
  const { errors = {}, values = {}, touched = {} } = useFormStateContext();

  const registerFieldRef = useFormFieldRefActionContext();
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
    registerFieldRef({
      type: FIELD_REF_ACTION_TYPE.REGISTER,
      payload: {
        [fieldName]: ref,
      },
    });
  }, []);

  return (
    <Element as={ELEMENT_OPTION_TYPE.DIV}>
      <Element
        as={ELEMENT_OPTION_TYPE.INPUT}
        classes={_classes || undefined}
        disabled={disabled}
        placeholder={placeholder}
        value={value || ""}
        ref={ref}
        type="password"
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {error && (
        <Error message={errors[fieldName] as string} classes={_classesError || undefined} />
      )}
    </Element>
  );
};

InputPassword.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  classesError: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  fieldName: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
