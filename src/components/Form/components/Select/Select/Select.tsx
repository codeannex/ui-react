import * as React from "react";

import classNames from "classnames";
import PropTypes from "prop-types";

import {
  Error,
  Option,
  useFormStateActionContext,
  useFormStateContext,
} from "@components/Form/index";

import { ELEMENT_OPTION_TYPE, Element } from "@core/Element/Element";

import { getGuid } from "@utils/getGuid";

import { STATE_ACTION_TYPE, SelectOption } from "../../../types";

export type SelectOptionWithId = SelectOption & { id: string };

export type SelectProps = {
  /**
   * Add CSS class/classes to the component for styling.
   */
  classes?: string | string[];
  classesError?: string | string[];

  /**
   * A boolean value used to disable the select box.
   */
  disabled?: boolean;

  /**
   * Array of options used to build the select options.
   */
  options: SelectOption[];
};

export const Select: React.FC<SelectProps> = React.forwardRef(
  ({ classes, classesError, disabled, options }, ref?: React.Ref<HTMLSelectElement>) => {
    const { errors = {}, values = {}, touched = {} } = useFormStateContext();

    const [_options, setOptions] = React.useState<SelectOptionWithId[]>([]);

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

    /** Initialize unique id for option key **/
    React.useEffect(() => {
      setOptions(
        options.map((option: SelectOption) => {
          return {
            ...option,
            id: getGuid(),
          };
        })
      );
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
          {_options?.map((option: SelectOptionWithId) => {
            return <Option option={option} key={option.id} />;
          })}
        </Element>
        {error && (
          <Error message={errors[fieldName] as string} classes={_classesError || undefined} />
        )}
      </Element>
    );
  }
);

Select.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  classesError: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  disabled: PropTypes.bool,
  options: PropTypes.array.isRequired,
};
