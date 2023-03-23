import * as React from "react";

import classNames from "classnames";
import PropTypes from "prop-types";

import { ELEMENT_OPTION_TYPE, Element } from "@core/Element/Element";

type ErrorProps = {
  /**
   * Add CSS class/classes to the component for styling.
   */
  classes?: string | string[];

  /**
   * Rendered error message.
   */
  message?: string;
};

export const Error: React.FC<ErrorProps> = ({ classes, message }) => {
  const _classes = classNames(classes && classes);

  return (
    <Element as={ELEMENT_OPTION_TYPE.DIV} classes={_classes || undefined}>
      <p>{message}</p>
    </Element>
  );
};

export default Error;

Error.propTypes = {
  /**
   * Add CSS class/classes to the component for styling.
   */
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),

  /**
   * Rendered error message.
   */
  message: PropTypes.string,
};
