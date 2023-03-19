import * as React from "react";

import {
  Error,
  Option,
  useFormStateActionContext,
  useFormStateContext,
} from "@components/Form/index";

import { ELEMENT_OPTION_TYPE, Element } from "@core/Element/Element";

import { getGuid } from "@utils/getGuid";

import { STATE_ACTION_TYPE } from "../../../types";

type Options<O = unknown> = { value: any; label: string };

type SelectProps<T> = {
  disabled?: boolean;
  options: T[];
};

export const Select = React.forwardRef(
  <T extends Options>(
    { disabled, options }: SelectProps<T>,
    ref?: React.Ref<HTMLSelectElement>
  ) => {
    const { errors = {}, values = {}, touched = {} } = useFormStateContext();

    // @ts-ignore
    const fieldName = ref?.fieldName;

    const displatch = useFormStateActionContext();

    const value = values[fieldName] as string;

    const error = errors[fieldName] && touched[fieldName];

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

    return (
      <Element as={ELEMENT_OPTION_TYPE.DIV}>
        <Element
          as={ELEMENT_OPTION_TYPE.SELECT}
          disabled={disabled}
          ref={ref}
          value={value || ""}
          /** Handlers */
          onBlur={handleBlur}
          onChange={handleChange}
        >
          {options &&
            options.map((option: any) => {
              return <Option option={option} key={getGuid()} />;
            })}
        </Element>
        {error && <Error />}
      </Element>
    );
  }
);
