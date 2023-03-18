import * as React from "react";

import classNames from "classnames";
import PropTypes from "prop-types";

import { Label, useFormFieldRefActionContext } from "@components/Form/index";

import { ELEMENT_OPTION_TYPE, Element } from "@core/Element/Element";

import { FORM_CONSTANT } from "@constants/index";

import { FIELD_REF_ACTION_TYPE, FieldRefType } from "../../types";

type FieldProps = {
  fieldName: string;
  children: React.ReactElement;
  classes?: string | string[];
  label?: string;
  labelClasses?: string | string[];
  labelFor?: string;
  labelForm?: string;
};

export const Field: React.FC<FieldProps> = ({
  fieldName,
  children,
  classes,
  label,
  labelClasses,
  labelFor,
  labelForm,
}) => {
  const registerFieldRef = useFormFieldRefActionContext();

  const ref = React.useRef<FieldRefType>(null);

  const _classes = classNames(classes && classes);
  const _labelClasses = classNames(labelClasses && labelClasses);

  /** Init **/
  React.useEffect(() => {
    registerFieldRef({
      type: FIELD_REF_ACTION_TYPE.REGISTER,
      payload: {
        [fieldName]: ref,
      },
    });
  }, []);

  /** Sets a data attribute which can be used to identify the field. **/
  React.useEffect(() => {
    if (ref?.current) {
      ref?.current.setAttribute(FORM_CONSTANT.FIELD_NAME_DATA_ATTRIBUTE, fieldName);
    }
  }, [ref?.current]);

  return (
    <Element as={ELEMENT_OPTION_TYPE.DIV} className={_classes || undefined}>
      {label && <Label label={label} classes={_labelClasses} form={labelForm} htmlFor={labelFor} />}
      {React.Children.map(children, (child: React.ReactElement) => {
        return React.cloneElement(child, {
          fieldName: fieldName,
          ref,
        });
      })}
    </Element>
  );
};

Field.propTypes = {
  fieldName: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  label: PropTypes.string,
  labelClasses: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  labelFor: PropTypes.string,
  labelForm: PropTypes.string,
};
