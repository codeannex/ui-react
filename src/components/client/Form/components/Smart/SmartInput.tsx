import * as React from "react";

import classNames from "classnames";
import PropTypes from "prop-types";

import {
  Error,
  Info,
  Label,
  useFormStateActionContext,
  useFormStateContext,
  useStaticPropsContext,
} from "@components/client/Form/index";

import { ELEMENT_OPTION_TYPE, Element } from "@core/server/Element/Element";

import { getGuid } from "@utils/index";

import { STATE_ACTION_TYPE } from "../../types";

export type SmartInputProps = {
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
   * Sets the defualt value on the form field.
   */
  defaultValue?: string;

  /**
   * Disables the form field.
   */
  disabled?: boolean;

  /**
   * Sets the error HTML element type.
   */
  errorAs?: "p" | "span" | "div";

  /**
   * Required prop used to track form field state.
   */
  field: string;

  /**
   * Sets the id attribute.
   */
  id: string;

  /**
   * Enables helper information message.
   */
  info?: string;

  /**
   * Sets the error HTML element type.
   */
  infoAs?: "p" | "span" | "div";

  /**
   * Hides info when the associated field has an
   * error.
   */
  infoHideOnError?: boolean;

  /**
   * Sets the label text.
   */
  label: string | undefined;

  /**
   * Sets the name attribute.
   */
  name?: string;

  /**
   * Sets the placeholder value on the form field.
   */
  placeholder?: string;
};

export const SmartInput: React.FC<SmartInputProps> = ({
  asType = "text",
  classes,
  defaultValue,
  disabled,
  errorAs,
  field,
  id,
  info,
  infoAs,
  infoHideOnError,
  label,
  name,
  placeholder,
}) => {
  const { values = {}, touched = {}, errors = {}, validators = {} } = useFormStateContext();

  const { fieldRef } = useStaticPropsContext();

  const displatch = useFormStateActionContext();

  const ref = React.useRef<HTMLInputElement>(null);

  const _classes = classNames(classes && classes);
  const _error = errors[field] && touched[field] ? (errors[field] as string) : "";
  const _info = infoHideOnError ? info && !_error : info;
  const _label = label ? label : undefined;
  const _required = !!validators[field];
  const _value = values[field] as string;

  const _ariaDescribById = React.useMemo(() => {
    return getGuid();
  }, []);

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

  console.log("19 ========");
  console.log(_required);
  console.log(field);
  console.log("19 ========");

  return (
    <Element as={ELEMENT_OPTION_TYPE.DIV}>
      {_label && (
        <Element as={ELEMENT_OPTION_TYPE.DIV}>
          <Label field={field} htmlFor={id} label={label} />
        </Element>
      )}
      <Element
        aria-describedby={_ariaDescribById}
        aria-invalid={_required ? (_error ? "true" : "false") : undefined}
        as={ELEMENT_OPTION_TYPE.INPUT}
        classes={_classes || undefined}
        disabled={disabled}
        id={id || undefined}
        name={name || undefined}
        placeholder={placeholder}
        ref={ref}
        required={_required}
        type={asType}
        value={_value || ""}
        /** Handlers **/
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {_info && (
        <Info
          as={infoAs || ELEMENT_OPTION_TYPE.DIV}
          field={field}
          id={_ariaDescribById}
          message={info}
        />
      )}
      {_error && (
        <Error as={errorAs || ELEMENT_OPTION_TYPE.DIV} field={field} id={_ariaDescribById} />
      )}
    </Element>
  );
};

SmartInput.propTypes = {
  asType: PropTypes.string,
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  field: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
