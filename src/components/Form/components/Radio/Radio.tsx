import * as React from "react";

import classNames from "classnames";
import PropTypes from "prop-types";

import { Error, useFormStateActionContext, useFormStateContext } from "@components/Form/index";

import { ELEMENT_OPTION_TYPE, Element, INPUT_TYPE } from "@core/Element/Element";

import { getGuid } from "@utils/getGuid";

import { RadioOption, STATE_ACTION_TYPE } from "../../types";

export type RadioOptionWithId = RadioOption & { id: string };

export type RadioProps = {
  /**
   * Add CSS class/classes to the component for styling.
   */
  classes?: string | string[];
  classesError?: string | string[];

  /**
   * Array of options used to build the radio group buttons.
   */
  options: RadioOption[];
};

export const Radio: React.FC<RadioProps> = React.forwardRef(
  ({ classes, classesError, options }, ref?: React.Ref<HTMLInputElement>) => {
    const { errors = {}, values = {}, touched = {} } = useFormStateContext();

    const [_options, setOptions] = React.useState<RadioOptionWithId[]>([]);

    // @ts-ignore
    const fieldName = ref?.fieldName;

    const displatch = useFormStateActionContext();

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

    /** Initialize unique id for option key **/
    React.useEffect(() => {
      setOptions(
        options.map((option: RadioOption) => {
          return {
            ...option,
            id: getGuid(),
          };
        })
      );
    }, []);

    return (
      <Element as={ELEMENT_OPTION_TYPE.DIV} classes={_classes || undefined}>
        {_options?.map((option: RadioOptionWithId, index: number, array: any) => {
          return (
            <Element
              key={option.id}
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
  }
);

Radio.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  classesError: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  options: PropTypes.array.isRequired,
};
