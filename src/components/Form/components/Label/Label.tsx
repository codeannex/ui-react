import * as React from "react";

import classNames from "classnames";
import PropTypes from "prop-types";

import { ELEMENT_OPTION_TYPE, Element } from "@core/Element/Element";

export type LabelProps = {
  classes?: string | string[];
  form?: string;
  htmlFor?: string;
  label: string;
  optional?: boolean;
};

export const Label: React.FC<LabelProps> = ({ classes, form, htmlFor, label, optional }) => {
  const _classes = classNames(classes && classes);

  return (
    <Element as={ELEMENT_OPTION_TYPE.DIV} classes={_classes}>
      <Element
        as={ELEMENT_OPTION_TYPE.LABEL}
        role={ELEMENT_OPTION_TYPE.LABEL}
        htmlFor={htmlFor}
        form={form}
      >
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
  form: PropTypes.string,
  htmlFor: PropTypes.string,
  label: PropTypes.string.isRequired,
  optional: PropTypes.bool,
};
