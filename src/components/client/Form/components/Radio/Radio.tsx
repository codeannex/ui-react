import * as React from "react";

import classNames from "classnames";
import PropTypes from "prop-types";

import {
  Error,
  useFormFieldRefActionContext,
  useFormStateActionContext,
  useFormStateContext,
} from "@components/client/Form/index";

import { ELEMENT_OPTION_TYPE, Element, INPUT_TYPE } from "@core/server/Element/Element";

import { FIELD_REF_ACTION_TYPE, RadioOption, STATE_ACTION_TYPE } from "../../types";

export type RadioProps = {
  /**
   * Sets CSS class/classes on the component for styling.
   */
  classes?: string | string[];

  /**
   * Sets CSS class/classes on the `Error` component for styling.
   */
  classesError?: string | string[];

  /**
   * Required prop used to track form field state.
   */
  fieldName: string;

  /**
   * Array of options used to build the radio group buttons.
   */
  options: RadioOption[];
};

export const Radio: React.FC<RadioProps> = ({ classes, classesError, fieldName, options }) => {
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
    <Element as={ELEMENT_OPTION_TYPE.DIV} classes={_classes || undefined}>
      {options?.map((option: RadioOption, index: number, array: any) => {
        return (
          <Element
            key={option?.id}
            as={ELEMENT_OPTION_TYPE.DIV}
            ref={ref}
            /** set onBlur on the last radio button container **/
            onBlur={index === array.length - 1 ? handleBlur : undefined}
          >
            <Element
              as={ELEMENT_OPTION_TYPE.INPUT}
              type={INPUT_TYPE.RADIO}
              checked={value === option?.value}
              name={option?.name}
              value={option?.value}
              /** Handlers */
              onChange={handleChange}
            />
            <Element as={ELEMENT_OPTION_TYPE.LABEL}>{option?.label}</Element>
          </Element>
        );
      })}
      {error && (
        <Error message={errors[fieldName] as string} classes={_classesError || undefined} />
      )}
    </Element>
  );
};

Radio.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  classesError: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  fieldName: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};
