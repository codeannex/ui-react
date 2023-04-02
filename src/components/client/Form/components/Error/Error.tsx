import * as React from "react";

import classNames from "classnames";
import PropTypes from "prop-types";

import { useStaticPropsContext } from "@components/client/Form/index";

import { ELEMENT_OPTION_TYPE, Element } from "@core/server/Element/Element";

type ErrorProps = {
  /**
   * Sets CSS class/classes on the component for styling.
   */
  classes?: string | string[];

  /**
   * Sets the displayed text.
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
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  message: PropTypes.string,
};
