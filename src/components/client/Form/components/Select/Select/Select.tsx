import * as React from "react";

import classNames from "classnames";
import PropTypes from "prop-types";

import {
  Error,
  Option,
  useFieldRefsContext,
  useFormStateActionContext,
  useFormStateContext,
} from "@components/client/Form/index";

import { ELEMENT_OPTION_TYPE, Element } from "@core/server/Element/Element";

import { STATE_ACTION_TYPE, SelectOption } from "../../../types";

type SelectProps = {
  /**
   * Sets CSS class/classes on the component for styling.
   */
  classes?: string | string[];

  /**
   * Sets CSS class/classes on the `Error` component for styling.
   */
  classesError?: string | string[];

  /**
   * Disables the form field.
   */
  disabled?: boolean;

  /**
   * Required prop used to track form field state.
   */
  fieldName: string;

  /**
   * Array of options used to build the select options.
   */
  options: SelectOption[];
};

export const Select: React.FC<SelectProps> = ({
  classes,
  classesError,
  disabled,
  fieldName,
  options,
}) => {
  const { errors = {}, values = {}, touched = {} } = useFormStateContext();

  const fieldRefsController = useFieldRefsContext();
  const displatch = useFormStateActionContext();

  const ref = React.useRef<HTMLSelectElement>(null);

  const value = values[fieldName] as string;
  const error = errors[fieldName];

  const _classes = classNames(classes && classes);
  const _classesError = classNames(classesError && classesError);

  /**
   * Handlers
   */
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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

  /** Init field ref **/
  React.useEffect(() => {
    fieldRefsController.set({
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
        as={ELEMENT_OPTION_TYPE.SELECT}
        classes={_classes || undefined}
        disabled={disabled}
        ref={ref}
        value={value || ""}
        /** Handlers */
        onBlur={handleBlur}
        onChange={handleChange}
      >
        {options?.map((option: SelectOption) => {
          return <Option option={option} key={option?.id} />;
        })}
      </Element>
      {error && (
        <Error message={errors[fieldName] as string} classes={_classesError || undefined} />
      )}
    </Element>
  );
};

Select.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  classesError: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  disabled: PropTypes.bool,
  fieldName: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};
