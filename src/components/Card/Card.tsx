import * as React from 'react';
import classNames from 'classnames';

import { Handler } from '../../core';

export enum CardNodeType {
  DIV = 'div',
  ARTICLE = 'article'
}

export enum CardClasses {
  SHARED = 'card__base',
  CLICKABLE = 'card__clickable'
}

export interface CardProps extends React.HtmlHTMLAttributes<HTMLBaseElement> {

  /**
   * Custom class names.
   * @default false
   */
  classes?: string[];

  /**
   * Default class hooks
   * @default none
   */
  classHooks?: boolean;

  /**
   * Specifies if the component is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Enables tab focus.
   * @default true
   */
  focusable?: boolean;

  /**
   * Element type.
   */
  el?: CardNodeType;

  /**
   * A callback for card onClick.
   */
  onClick?: () => void;
}

export const CARD_TEST_ID = 'codeannex-card-component';

/**
 * @Codeannex UI React: Card Component
 *
 * Card Component
 */
 export const Card = ({
  children,
  classes,
  classHooks,
  el,
  ...rest
}: CardProps): JSX.Element => {

  const htmlElement = el ? el : CardNodeType.DIV;

  const props = {
    ...rest,
    from: htmlElement,
    className: classNames(
      classHooks && CardClasses.SHARED,
      rest.onClick && CardClasses.CLICKABLE,
      classes && classes.length && classes.join(' ')
    )
  };

  return (
    <Handler { ...props } data-testid={CARD_TEST_ID}>
      {children}
    </Handler>
  );
};
