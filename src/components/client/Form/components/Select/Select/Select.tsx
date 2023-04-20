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

import { STATE_ACTION_TYPE, SelectOption } from "../../../types";

type SelectProps = {
  /**
   * Sets CSS class/classes on the component for styling.
   */
  classes?: string | string[];

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

export const Select: React.FC<SelectProps> = ({ classes, disabled, field, id, options }) => {
  const { values = {}, touched = {}, validators = {} } = useFormStateContext();

  const { fieldRef } = useStaticPropsContext();

  const displatch = useFormStateActionContext();

  const ref = React.useRef<HTMLSelectElement>(null);

  const _classes = classNames(classes && classes);
  const _required = !!validators[field];
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
      classes={_classes || undefined}
      disabled={disabled}
      id={id || undefined}
      ref={ref}
      required={_required}
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
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  disabled: PropTypes.bool,
  field: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};
