import * as React from 'react';
import classNames from 'classnames';

import { ElementType } from '../../core';

export enum HeadingType {

  /**
   * Node types.
   */
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export enum HeadingClasses {

  /**
   * Shared
   */
  Shared = 'heading__base',

  /**
   * Headings default classes.
   */
  h1 = 'heading__h1',
  h2 = 'heading__h2',
  h3 = 'heading__h3',
  h4 = 'heading__h4',
  h5 = 'heading__h5',
  h6 = 'heading__h6',
}

export interface HeadingProps extends React.HtmlHTMLAttributes<HTMLBaseElement> {

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
   * Element type
   */
  el: HeadingType;

  /**
   * Heading class 
   */
  headingClass?: boolean;

  /**
   * Provides the button text
   */
  label?: string;

  /**
   * Node reference
   */
  ref?: React.Ref<HTMLHeadingElement>;
}

export const HEADING_TEST_ID = 'codeannex-heading-component';

/**
 * @Codeannex UI React: Heading Component
 * 
 * Heading Component
 */
 const _Heading = ({
  children,
  classes,
  classPrefix,
  el,
  forwardedRef,
  headingClass,
  label,
  ...rest
}: HeadingProps & { forwardedRef: React.Ref<HTMLHeadingElement> }): JSX.Element => {
  let classBase = '';
  let classHeading = '';
  let htmlElement = '';

  for (const value of Object.values(HeadingType)) {
    if (el === value) {
      htmlElement = value;

      break;
    }
  }

  if (!htmlElement) {
    throw new Error('Heading node type must be h1 thru h6');
  }

  if (headingClass) {
    if (classPrefix) {
      classBase = classPrefix + HeadingClasses.Shared;
      classHeading = classPrefix + HeadingClasses[htmlElement];
    } else {
      classBase = HeadingClasses.Shared;
      classHeading = HeadingClasses[htmlElement]
    }
  }

  const classList = classNames(
    classBase,
    classHeading,
    classes && classes.length && classes.join(' ')
  );

  const props = {
    ...rest,
    from: htmlElement,
    className: classList ? classList : null
  };

  const content = label ? label : children;

  return (
    <ElementType { ...props } ref={forwardedRef}>
      { content }
    </ElementType>
  );
};

export const Heading = React.forwardRef((
  props: HeadingProps,
  ref: React.Ref<HTMLHeadingElement>
): JSX.Element => {
  return <_Heading { ...props } forwardedRef={ref} data-testid={HEADING_TEST_ID} />
});
