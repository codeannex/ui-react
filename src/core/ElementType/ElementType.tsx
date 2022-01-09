import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BaseProps = Pick<React.HTMLAttributes<any>, 'children'> & React.RefAttributes<any>

export type ElementTypeProps = Readonly<BaseProps & {
  from: string;
}>

/**
 * @Codeannex UI React: Core <Element Components>
 *
 * ElementType Component
 * Returns an HTML element based on prop argument.
 */
const _ElementType = ({
  from: Component,
  forwardedRef,
  ...rest
}: ElementTypeProps & { forwardedRef: React.Ref<HTMLElement> }): JSX.Element => {

  const props = {
    ref: forwardedRef,
    ...rest
  };

  return <Component { ...props } />
};

export const ElementType = React.forwardRef((
  props: ElementTypeProps,
  ref: React.Ref<HTMLElement>
): JSX.Element => {
  return <_ElementType { ...props } forwardedRef={ref} />
});
