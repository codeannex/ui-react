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
  field: string;

  /**
   * Sets the `label` `for` attribute.
   */
  htmlFor?: string;

  /**
   * Sets the id attribute.
   */
  id?: string;

  /**
   * Sets the displayed text.
   */
  label: string | undefined;
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
  id,
  label,
  optional,
  required,
}) => {
  const { validators = {} } = useFormStateContext();

  const _classes = classNames(classes && classes);
  const _for = htmlFor || undefined;
  const _id = id || undefined;
  const _required = !!validators[field as string] || required;

  return (
    <Element as={ELEMENT_OPTION_TYPE.LABEL} classes={_classes || undefined} htmlFor={_for} id={_id}>
      {label}
      {_required && (
        <Element
          as={ELEMENT_OPTION_TYPE.SPAN}
          aria-hidden="true"
          aria-required="true"
          aria-label="required"
        >
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
  field: PropTypes.string.isRequired,
  htmlFor: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
};
