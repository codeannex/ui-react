import * as React from "react";

import classNames from "classnames";
import PropTypes from "prop-types";

import {
  Error,
  useFormStateActionContext,
  useFormStateContext,
  useStaticPropsContext,
} from "@components/client/Form/index";

import { ELEMENT_OPTION_TYPE, Element, INPUT_TYPE } from "@core/server/Element/Element";

import { RadioOption, STATE_ACTION_TYPE } from "../../types";

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
  field: string;

  /**
   * Sets the id attribute.
   */
  id?: string;

  /**
   * Array of options used to build the radio group buttons.
   */
  options: RadioOption[];
};

export const Radio: React.FC<RadioProps> = ({ classes, classesError, field, id, options }) => {
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
    <Element as={ELEMENT_OPTION_TYPE.DIV} classes={_classes || undefined} id={id || undefined}>
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
              checked={value === option?.value}
              name={option?.name}
              type={INPUT_TYPE.RADIO}
              value={option?.value}
              /** Handlers */
              onChange={handleChange}
            />
            <Element as={ELEMENT_OPTION_TYPE.LABEL}>{option?.label}</Element>
          </Element>
        );
      })}
      {error && <Error message={errors[field] as string} classes={_classesError || undefined} />}
    </Element>
  );
};

Radio.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  classesError: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  field: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};
