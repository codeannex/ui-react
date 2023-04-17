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

export type InputEmailProps = {
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
  field: string;

  /**
   * Sets the id attribute.
   */
  id?: string;

  /**
   * Sets the placeholder value on the form field.
   */
  placeholder?: string;
};

export const InputEmail: React.FC<InputEmailProps> = ({
  classes,
  classesError,
  defaultValue,
  disabled,
  id,
  field,
  placeholder,
}) => {
  const { errors = {}, values = {}, touched = {} } = useFormStateContext();

  const { fieldRef } = useStaticPropsContext();

  const displatch = useFormStateActionContext();

  const ref = React.useRef<HTMLInputElement>(null);

  const value = values[field] as string;
  const error = errors[field] && touched[field];

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
    if (defaultValue) {
      displatch({
        type: STATE_ACTION_TYPE.UPDATE_VALUE,
        payload: {
          [field]: defaultValue,
        },
      });
    }
  }, []);

  /** Init field ref **/
  React.useEffect(() => {
    fieldRef?.safeSet([field], {
      [field]: {
        _field: {
          ref: ref?.current,
          name: field,
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
        value={value || ""}
        ref={ref}
        type="email"
        /** Handlers */
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {error && <Error message={errors[field] as string} classes={_classesError || undefined} />}
    </Element>
  );
};

InputEmail.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  classesError: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  field: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
