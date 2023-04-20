import * as React from "react";

import classNames from "classnames";
import PropTypes from "prop-types";

import { useFormStateContext } from "@components/client/Form/index";

import { ELEMENT_OPTION_TYPE, Element } from "@core/server/Element/Element";

interface CommonProps {
  /**
   * Sets CSS class/classes on the component for styling.
   */
  classes?: string | string[];

  /**
   * Allows the label component to track the required fields
   * determined from the existence of validators. If the
   * validator exists for the associated form field, Label
   * component will add the required indicator.
   */
  field?: string;

  /**
   * Sets the `label` `for` attribute.
   */
  htmlFor?: string;

  /**
   * Sets the displayed text.
   */
  label: string;
}

type ConditionalProps =
  | {
      /**
       * Sets displayed `optional` text indicating the form field
       * is optional.
       */
      optional?: boolean;

      /** Prohibited if `as` is used. **/
      required?: never;
    }
  | {
      /** Prohibited if `as` is used. **/
      optional?: never;

      /**
       * Sets displayed `required` text indicating the form field
       * is required.
       */
      required?: boolean;
    };

export type LabelProps = CommonProps & ConditionalProps;

export const Label: React.FC<LabelProps> = ({
  classes,
  field,
  htmlFor,
  label,
  optional,
  required,
}) => {
  const { validators = {} } = useFormStateContext();

  const _classes = classNames(classes && classes);
  const _required = !!validators[field as string] || required;

  return (
    <Element as={ELEMENT_OPTION_TYPE.LABEL} classes={_classes || undefined} htmlFor={htmlFor}>
      {label}
      {_required && (
        <Element as={ELEMENT_OPTION_TYPE.SPAN} aria-label="required">
          {"*"}
        </Element>
      )}
      {optional && (
        <Element as={ELEMENT_OPTION_TYPE.SPAN} aria-label="optional">
          {"Optional"}
        </Element>
      )}
    </Element>
  );
};

export default Label;

Label.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  htmlFor: PropTypes.string,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
};
