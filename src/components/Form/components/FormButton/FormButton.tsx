import * as React from "react";

import classNames from "classnames";
import PropTypes from "prop-types";

import { ELEMENT_OPTION_TYPE, Element } from "@core/Element/Element";

import { FormRef } from "../../types";

type FormButtonProps = {
  children?: React.ReactNode;
  classes?: string | string[];
  formRef: FormRef;
};

export const FormButton: React.FC<FormButtonProps> = ({ children, classes, formRef }) => {
  const _classes = classNames(classes && classes);

  const handleSubmit = () => {
    formRef?.controls.submit();
  };

  return (
    <Element as={ELEMENT_OPTION_TYPE.BUTTON} classes={_classes || undefined} onClick={handleSubmit}>
      {children}
    </Element>
  );
};

FormButton.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};
