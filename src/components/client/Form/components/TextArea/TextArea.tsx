import * as React from "react";

import classNames from "classnames";
import PropTypes from "prop-types";

import {
  useFormStateActionContext,
  useFormStateContext,
  useStaticPropsContext,
} from "@components/client/Form/index";

import { ELEMENT_OPTION_TYPE, Element } from "@core/server/Element/Element";

import { STATE_ACTION_TYPE } from "../../types";

type TextAreaProps = {
  /**
   * Sets CSS class/classes on the component for styling.
   */
  classes?: string | string[];

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

export const TextArea: React.FC<TextAreaProps> = ({
  classes,
  defaultValue,
  disabled,
  field,
  id,
  placeholder,
}) => {
  const { values = {}, touched = {}, validators = {} } = useFormStateContext();

  const { fieldRef } = useStaticPropsContext();

  const displatch = useFormStateActionContext();

  const ref = React.useRef<HTMLTextAreaElement>(null);

  const _classes = classNames(classes && classes);
  const _required = !!validators[field];
  const _value = values[field] as string;

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
    fieldRef?.safeSet(field, {
      [field]: {
        _field: {
          ref: ref?.current,
          name: field,
        },
      },
    });
  }, []);

  return (
    <Element
      as={ELEMENT_OPTION_TYPE.TEXT_AREA}
      classes={_classes || undefined}
      disabled={disabled}
      id={id || undefined}
      placeholder={placeholder}
      ref={ref}
      required={_required}
      value={_value || ""}
      /** Handlers **/
      onBlur={handleBlur}
      onChange={handleChange}
    />
  );
};

TextArea.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  field: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
