import * as React from "react";

import classNames from "classnames";
import PropTypes from "prop-types";

import { useFormStateContext } from "@components/client/Form/index";

import { ELEMENT_OPTION_TYPE, Element } from "@core/server/Element/Element";

export type InfoProps = {
  /**
   * Sets the element type for displaying the error
   * message.
   */
  as?: "p" | "span" | "div";

  /**
   * Sets CSS class/classes on the component for
   * styling.
   */
  classes?: string | string[];

  /**
   * Required prop used to track form field state.
   */
  field: string;

  /**
   * Sets the id attribute.
   */
  id?: string;

  /**
   * Information message.
   */
  message?: string;
};

export const Info: React.FC<InfoProps> = ({ as, classes, field, id, message }) => {
  const { errors = {}, touched = {} } = useFormStateContext();

  const _classes = classNames(classes && classes);
  const _id = id || undefined;
  const _message = !(errors[field] && touched[field]);

  return (
    <>
      {_message && (
        <Element as={as || ELEMENT_OPTION_TYPE.DIV} classes={_classes || undefined} id={_id}>
          {message}
        </Element>
      )}
    </>
  );
};

export default Error;

Info.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  field: PropTypes.string.isRequired,
  id: PropTypes.string,
  message: PropTypes.string,
};
