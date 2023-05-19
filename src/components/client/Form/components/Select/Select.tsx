import * as React from "react";

import classNames from "classnames";
import PropTypes from "prop-types";

import {
  Option,
  useFormStateActionContext,
  useFormStateContext,
  useStaticPropsContext,
} from "@components/client/Form/index";

import { ELEMENT_OPTION_TYPE, Element } from "@core/server/Element/Element";

import { STATE_ACTION_TYPE, SelectOption } from "../../types";

export type SelectProps = {
  /**
   * Sets aria describe by value to establish a relationship
   * between widgets or groups and the text that describes
   * them.
   */
  ariaDescribedby?: string;

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
   * Array of options used to build the select options.
   */
  options: SelectOption[];
};

export const Select: React.FC<SelectProps> = ({
  ariaDescribedby,
  classes,
  defaultValue,
  disabled,
  field,
  id,
  options,
}) => {
  const { errors = {}, values = {}, touched = {}, validators = {} } = useFormStateContext();

  const { fieldRef } = useStaticPropsContext();

  const displatch = useFormStateActionContext();

  const ref = React.useRef<HTMLSelectElement>(null);

  const _error = errors[field] && touched[field] ? (errors[field] as string) : "";

  /** Attributes **/
  const _required = !!validators[field] || undefined;
  const _ariaDescribedby = ariaDescribedby || undefined;
  const _ariaInvalid = _required ? (_error ? "true" : "false") : undefined;
  const _classes = classNames(classes && classes);
  const _disabled = disabled || undefined;
  const _id = id || undefined;

  const _value = values[field] as string;

  /**
   * Handlers
   */
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
      as={ELEMENT_OPTION_TYPE.SELECT}
      aria-describedby={_ariaDescribedby}
      aria-invalid={_ariaInvalid}
      aria-required={_required}
      classes={_classes}
      disabled={_disabled}
      id={_id}
      ref={ref}
      value={_value || ""}
      /** Handlers */
      onBlur={handleBlur}
      onChange={handleChange}
    >
      {options?.map((option: SelectOption) => {
        return <Option option={option} key={option?.id} />;
      })}
    </Element>
  );
};

Select.propTypes = {
  /** Required **/
  field: PropTypes.string.isRequired,

  /** Optional **/
  ariaDescribedby: PropTypes.string,
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  options: PropTypes.array.isRequired,
};
