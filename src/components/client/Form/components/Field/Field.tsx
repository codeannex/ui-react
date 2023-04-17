import * as React from "react";

import classNames from "classnames";
import PropTypes from "prop-types";

import { Label, useStaticPropsContext } from "@components/client/Form/index";

import { ELEMENT_OPTION_TYPE, Element } from "@core/server/Element/Element";

export type FieldProps = {
  /**
   * React child node/nodes.
   */
  children: React.ReactElement;

  /**
   * Sets CSS class/classes on the component for styling.
   */
  classes?: string | string[];

  /**
   * Sets the displyed `label` text.
   */
  label?: string;

  /**
   * Sets CSS class/classes on the `Label` component for styling.
   */
  labelClasses?: string | string[];

  /**
   * Sets the `Label` component `for` attribute.
   */
  labelFor?: string;
};

export const Field: React.FC<FieldProps> = ({
  children,
  classes,
  label,
  labelClasses,
  labelFor,
}) => {
  const { classesField } = useStaticPropsContext();

  const _classes = classNames(classes && classes, classesField && classesField);
  const _labelClasses = classNames(labelClasses && labelClasses);

  return (
    <>
      {label && <Label label={label} classes={_labelClasses} htmlFor={labelFor} />}
      {children}
    </>
  );

  // return (
  //   <Element as={ELEMENT_OPTION_TYPE.DIV} classes={_classes || undefined}>
  //     {label && <Label label={label} classes={_labelClasses} htmlFor={labelFor} />}
  //     {children}
  //   </Element>
  // );
};

Field.propTypes = {
  children: PropTypes.element.isRequired,
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  label: PropTypes.string,
  labelClasses: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  labelFor: PropTypes.string,
};
