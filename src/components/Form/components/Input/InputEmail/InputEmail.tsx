import * as React from "react";

import PropTypes from "prop-types";

import { Error, useFormStateActionContext, useFormStateContext } from "@components/Form/index";

import { ELEMENT_OPTION_TYPE, Element } from "@core/Element/Element";

import { STATE_ACTION_TYPE } from "../../../types";

export type InputEmailProps = {
  defaultValue?: string;
  disabled?: boolean;
  placeholder?: string;
};

export const InputEmail: React.FC<InputEmailProps> = React.forwardRef(
  ({ defaultValue, disabled, placeholder }, ref?: React.Ref<HTMLInputElement>) => {
    const { errors = {}, values = {}, touched = {} } = useFormStateContext();

    // @ts-ignore
    const fieldName = ref?.fieldName;

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
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {error && <Error />}
      </Element>
    );
  }
);

InputEmail.propTypes = {
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
};
