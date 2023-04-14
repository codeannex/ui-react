import * as React from "react";

import classNames from "classnames";
import PropTypes from "prop-types";

import { ELEMENT_OPTION_TYPE, Element } from "@core/server/Element/Element";

import { FormRef } from "../../types";

type FormButtonProps = {
  /**
   * React child node/nodes.
   */
  children?: React.ReactNode;

  /**
   * Sets CSS class/classes on the component for styling.
   */
  classes?: string | string[];

  /**
   * Required form ref prop used to access the form controls
   * submit function.
   */
  formRef: FormRef;

  /**
   * Sets the id attribute.
   */
  id?: string;
};

export const FormButton: React.FC<FormButtonProps> = ({ children, classes, formRef, id }) => {
  const _classes = classNames(classes && classes);

  const handleSubmit = () => {
    formRef?.controls.submit();
  };

  return (
    <Element
      as={ELEMENT_OPTION_TYPE.BUTTON}
      classes={_classes || undefined}
      id={id || undefined}
      onClick={handleSubmit}
    >
      {children}
    </Element>
  );
};

FormButton.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};
