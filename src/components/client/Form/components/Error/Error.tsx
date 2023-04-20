import * as React from "react";

import classNames from "classnames";
import PropTypes from "prop-types";

import { useFormStateContext, useStaticPropsContext } from "@components/client/Form/index";

import { ELEMENT_OPTION_TYPE, Element } from "@core/server/Element/Element";

interface CommonProps {
  /**
   * Sets CSS class/classes on the component for
   * styling.
   */
  classes?: string | string[];

  /**
   * Required prop used to track form field state.
   */
  field: string;
}

type ConditionalProps =
  | {
      /**
       * Renders custom html while passing the error
       * indicator into the callback.
       */
      render?: ({ error }: any) => any;

      /** Prohibited if `render` is used. **/
      as?: never;
    }
  | {
      /** Prohibited if `as` is used. **/
      render?: never;

      /**
       * Sets the element type for displaying the error
       * message.
       */
      as?: "p" | "span" | "div";
    };

export type ErrorProps = CommonProps & ConditionalProps;

export const Error: React.FC<ErrorProps> = ({ as, classes, field, render }) => {
  const { errors = {}, touched = {} } = useFormStateContext();

  const { classesError } = useStaticPropsContext();

  const _classes = classNames(classes && classes, classesError && classesError);

  const error = errors[field] && touched[field] ? (errors[field] as string) : "";

  if (render) {
    return render({ error });
  }

  return (
    <Element as={as || ELEMENT_OPTION_TYPE.DIV} classes={_classes || undefined}>
      {error}
    </Element>
  );
};

export default Error;

Error.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};
