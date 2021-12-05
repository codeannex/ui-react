import * as React from 'react';
import classNames from 'classnames';

import { Handler } from '../../core';

export enum ButtonType {

  /** Regular HTML button with no default behavior */
  BUTTON = 'button',

  /** Reset button resets the form-data to its initial values */
  RESET = 'reset',

  /** Submit button submits form-data */
  SUBMIT = 'submit',
}

export enum ButtonClasses {

  /** Class hook for basic button reset styles */
  SHARED = 'btn__base',

  /** Modifier button class hooks */
  DEFAULT = 'btn__primary',
  SECONDARY = 'btn__secondary',
  SUCCESS = 'btn__success',
  DANGER = 'btn__danger',
  WARNING = 'btn__warning',
  INFO = 'btn__info',
  LIGHT = 'btn__light',
  DARK = 'btn__dark',
  LINK = 'btn__link'
}

 export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

  /**
   * Button style adds the corresponding target class name
   * @default Default
   *
   *  Default | Secondary | Success |
   *  Danger | Warning | Info | Light | Dark
   */
  buttonClass?: ButtonClasses;

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
  buttonClass,
  children,
  classes,
  classPrefix,
  forwardedRef,
  label,
  ...rest
}: ButtonProps & { forwardedRef: React.Ref<HTMLButtonElement> }): JSX.Element => {
  let classBase = '';

  if (buttonClass) {
    if (classPrefix) {
      classBase = `${classPrefix}-${ButtonClasses.SHARED}`;
    } else {
      classBase = ButtonClasses.SHARED
    }
  }

  const props = {
    ...rest,
    className: classNames(
      classBase,
      buttonClass && classPrefix ? `${classPrefix}-${buttonClass}` : buttonClass,
      classes && classes.length && classes.join(' ')
    )
  };

  const content = label ? label : children;

  return (
    <Handler { ...props } ref={forwardedRef} data-testid={BUTTON_TEST_ID}>
      { content }
    </Handler>
  );
};

export const Button = React.forwardRef((
  props: ButtonProps,
  ref: React.Ref<HTMLButtonElement>
): JSX.Element => {
  return <_Button { ...props } forwardedRef={ref} />;
});
