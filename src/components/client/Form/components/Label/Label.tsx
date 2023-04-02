import * as React from "react";

import classNames from "classnames";
import PropTypes from "prop-types";

import { ELEMENT_OPTION_TYPE, Element } from "@core/server/Element/Element";

export type LabelProps = {
  /**
   * Sets CSS class/classes on the component for styling.
   */
  classes?: string | string[];

  /**
   * Sets the `label` `for` attribute.
   */
  htmlFor?: string;

  /**
   * Sets the displayed text.
   */
  label: string;

  /**
   * Sets the displayed `optional` text indicating the form field
   * is optional.
   */
  optional?: boolean;
};

export const Label: React.FC<LabelProps> = ({ classes, htmlFor, label, optional }) => {
  const _classes = classNames(classes && classes);

  return (
    <Element as={ELEMENT_OPTION_TYPE.DIV} classes={_classes}>
      <Element as={ELEMENT_OPTION_TYPE.LABEL} role={ELEMENT_OPTION_TYPE.LABEL} htmlFor={htmlFor}>
        {label}
      </Element>
      {optional && (
        <Element as={ELEMENT_OPTION_TYPE.SPAN} role={ELEMENT_OPTION_TYPE.SPAN}>
          {"Optional"}
        </Element>
      )}
    </Element>
  );
};

Label.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  htmlFor: PropTypes.string,
  label: PropTypes.string.isRequired,
  optional: PropTypes.bool,
};
