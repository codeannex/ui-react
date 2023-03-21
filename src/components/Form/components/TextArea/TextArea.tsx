import * as React from "react";

import classNames from "classnames";
import PropTypes from "prop-types";

import { Error, useFormStateActionContext, useFormStateContext } from "@components/Form/index";

import { ELEMENT_OPTION_TYPE, Element } from "@core/Element/Element";

import { STATE_ACTION_TYPE } from "../../types";

type TextAreaProps = {
  classes?: string | string[];
  defaultValue?: string;
  disabled?: boolean;
  placeholder?: string;
};

export const TextArea: React.FC<TextAreaProps> = React.forwardRef(
  ({ classes, defaultValue, disabled, placeholder }, ref?: React.Ref<HTMLTextAreaElement>) => {
    const { errors = {}, values = {}, touched = {} } = useFormStateContext();

    // @ts-ignore
    const fieldName = ref?.fieldName;

    const displatch = useFormStateActionContext();

    const value = values[fieldName] as string;
    const error = errors[fieldName] && touched[fieldName];

    const _classes = classNames(classes && classes);

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
          as={ELEMENT_OPTION_TYPE.TEXT_AREA}
          classes={_classes || undefined}
          disabled={disabled}
          placeholder={placeholder}
          ref={ref}
          value={value || ""}
          /** Handlers **/
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {error && <Error />}
      </Element>
    );
  }
);

TextArea.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
};
