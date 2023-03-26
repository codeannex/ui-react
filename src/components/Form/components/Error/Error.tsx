import * as React from "react";

import classNames from "classnames";
import PropTypes from "prop-types";

import { useStaticPropsContext } from "@components/Form/index";

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
  const { classesError } = useStaticPropsContext();

  const _classes = classNames(classes && classes, classesError && classesError);

  return (
    <Element as={ELEMENT_OPTION_TYPE.DIV} classes={_classes || undefined}>
      <span>{message}</span>
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
