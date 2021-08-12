import * as React from 'react';
import classNames from 'classnames';

import { Actionable } from '../../core';

export enum ButtonType {

  /** Regular HTML button with no default behavior */
  Button = 'button',

  /** Reset button resets the form-data to its initial values */
  Reset = 'reset',

  /** Submit button submits form-data */
  Submit = 'submit',
}

export enum ButtonStyle {

  /** Class hook for basic button reset styles */
  Shared = 'btn--base',

  /** Modifier button class hooks */
  Default = 'btn--primary',
  Secondary = 'btn--secondary',
  Success = 'btn--success',
  Danger = 'btn--danger',
  Warning = 'btn--warning',
  Info = 'btn--info',
  Light = 'btn--light',
  Dark = 'btn--dark',
  Link = 'btn--link'
}

/**
 * Interfaces
 */
 export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

  /**
   * Button style adds the corresponding target class name
   * @default Default
   *
   *  Default | Secondary | Success |
   *  Danger | Warning | Info | Light | Dark
   */
  buttonStyle?: ButtonStyle;

  /**
   * Custom class names
   * @default false
   */
  classes?: string[];

  /**
   * Custom class prefix
   */
   classPrefix?: string;

  /**
   * Specifies whether the component is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Provides the button text
   */
  label?: string;

  /**
   * Type of button <Button | Reset | Submit>
   * @default Button
   */
  type?: ButtonType;
}

export const BUTTON_TEST_ID = 'codeannex-button-component';

/**
 * @Codeannex UI React: Button Component
 * 
 * Button Component
 */
const _Button = ({
  buttonStyle,
  children,
  classes,
  classPrefix,
  forwardedRef,
  label,
  ...rest
}: ButtonProps & { forwardedRef: React.Ref<HTMLButtonElement> }): JSX.Element => {
  let classBase = '';

  if (buttonStyle) {
    if (classPrefix) {
      classBase = classPrefix + ButtonStyle.Shared
    } else {
      classBase = ButtonStyle.Shared
    }
  }

  const props = {
    ...rest,
    className: classNames(
      classBase,
      buttonStyle && classPrefix ? classPrefix + buttonStyle : buttonStyle,
      classes && classes.length && classes.join(' ')
    )
  };

  const content = label ? label : children;

  return (
    <Actionable { ...props } ref={forwardedRef} data-testid={BUTTON_TEST_ID}>
      { content }
    </Actionable>
  );
};

export const Button = React.forwardRef((
  props: ButtonProps,
  ref: React.Ref<HTMLButtonElement>
): JSX.Element => {
  return <_Button { ...props } forwardedRef={ref} />;
});
