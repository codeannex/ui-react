import * as React from "react";

import PropTypes from "prop-types";

import { Error, useFormStateActionContext, useFormStateContext } from "@components/Form/index";

import { ELEMENT_OPTION_TYPE, Element } from "@core/Element/Element";

import { STATE_ACTION_TYPE } from "../../../types";

export type InputPasswordProps = {
  fieldName?: string;
  defaultValue?: string;
  disabled?: boolean;
  placeholder?: string;
};

export const InputPassword: React.FC<InputPasswordProps> = React.forwardRef(
  ({ defaultValue, disabled, fieldName = "", placeholder }, ref?: React.Ref<HTMLInputElement>) => {
    const { errors = {}, values = {}, touched = {} } = useFormStateContext();

    const displatch = useFormStateActionContext();

    const value = values[fieldName] as string;

    const error = errors[fieldName] && touched[fieldName];

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

    return (
      <Element as={ELEMENT_OPTION_TYPE.DIV}>
        <Element
          as={ELEMENT_OPTION_TYPE.INPUT}
          disabled={disabled}
          placeholder={placeholder}
          value={value || ""}
          ref={ref}
          type="password"
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {error && <Error />}
      </Element>
    );
  }
);

InputPassword.propTypes = {
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  fieldName: PropTypes.string,
  placeholder: PropTypes.string,
};
