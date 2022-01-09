import * as React from 'react';
import classNames from 'classnames';

import { Handler } from 'core';

export enum ButtonType {

  /** Regular HTML buttons with no default behavior */
  BUTTON = 'button',

  /** Reset button resets the form-data to its initial values */
  RESET = 'reset',

  /** Submit button submits form-data */
  SUBMIT = 'submit',
}

 export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

  /**
   * Alternative accessibility information.
   */
  ariaLabel?: string;

  /**
   * Alternative accessibility information.
   */
  ariaLabelledBy?: string

  /**
   * Custom class names
   * @default false
   */
  classes?: string[];

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
  children,
  classes,
  forwardedRef,
  label,
  ...rest
}: ButtonProps & { forwardedRef: React.Ref<HTMLButtonElement> }): JSX.Element => {

  const props = {
    className: classNames(
      classes && classes
    ),
    ...rest
  };

  const content = label ? label : children;

  return (
    <Handler
      from={'button'}
      ref={forwardedRef}
      data-testid={BUTTON_TEST_ID}
      { ...props }
    >
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
