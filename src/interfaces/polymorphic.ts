import * as React from "react";

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = unknown
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

export type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>["ref"];

export type Props<C extends React.ElementType, P> = PolymorphicComponentProps<C, P>;

export type PolymorphicComponentPropsWithRef<
  C extends React.ElementType,
  P
> = PolymorphicComponentProps<C, P> & { ref?: PolymorphicRef<C> };
