import * as React from "react";

import classNames from "classnames";
import PropTypes from "prop-types";

import { Errors, useFormStateContext } from "@components/client/Form/index";

import { ELEMENT_OPTION_TYPE, Element } from "@core/server/Element/Element";

type RenderArgs = {
  error: string;
  errors: Errors;
  id: string;
  message: string;
};

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
   * Hides info when the associated field has an
   * error.
   */
  hideOnError?: boolean;

  /**
   * Sets the id attribute.
   */
  id?: string;

  /**
   * Information message.
   */
  message?: string;

  /**
   * Overrides component render for customization.
   */
  render?: ({ error, errors, id, message }: RenderArgs) => any;
};

export const Info: React.FC<InfoProps> = ({
  as,
  classes,
  field,
  hideOnError,
  id,
  message,
  render,
}) => {
  const { errors = {}, touched = {} } = useFormStateContext();

  const _classes = classNames(classes && classes);
  const _error = errors[field] && touched[field] ? (errors[field] as string) : "";
  const _id = (id || undefined) as string;
  const _message = hideOnError
    ? ((message && !_error) as string)
    : ((message || undefined) as string);

  if (render) {
    return render({ errors, error: _error, id: _id, message: _message });
  }

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
