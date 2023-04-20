import * as React from "react";

import classNames from "classnames";

import { Handler } from "@core/server/Handler/Handler";

import { internalStyles } from "@styles/Element";

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
  Props,
} from "../../../interfaces/polymorphic";

export const enum ELEMENT_OPTION_TYPE {
  BUTTON = "button",
  DIV = "div",
  IMAGE = "image",
  INPUT = "input",
  LABEL = "label",
  OPTION = "option",
  PARAGRAPH = "p",
  SELECT = "select",
  SPAN = "span",
  STRONG = "strong",
  SVG = "svg",
  TEXT_AREA = "textarea",
}

export const enum INPUT_TYPE {
  RADIO = "radio",
  TEXT = "text",
}

type ElementProps = {
  classes?: string | string[];

  /**
   * Available handlers.
   */
  onBlur?: React.FocusEventHandler;
  onChange?: React.ChangeEventHandler;
  onClick?: React.MouseEventHandler;
  onFocus?: React.FocusEventHandler;
};

type ElementComponent = <C extends React.ElementType>(
  props: PolymorphicComponentPropsWithRef<C, ElementProps>
) => React.ReactElement | null;

/**
 * @Codeannex UI React: Element Component
 *
 * A React component capable of creating any type of html element. Element
 * component is typed with polymorphic type definitions and supports forwarded
 * refs. The polymorphic support is smart enough to know which html attributes
 * are supported by the html tag used.
 *
 */
export const Element: ElementComponent = React.forwardRef(
  <C extends React.ElementType = "div">(
    {
      as,
      children,
      classes,
      style,

      /** Callback Handlers **/
      onBlur,
      onChange,
      onClick,
      onFocus,
      ...restProps
    }: Props<C, ElementProps>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || ELEMENT_OPTION_TYPE.DIV;

    const _classes = classNames(classes && classes);
    const _style = { ...internalStyles, ...style };

    return (
      <Handler
        onBlur={onBlur && onBlur}
        onClick={onClick && onClick}
        onChange={onChange && onChange}
        onFocus={onFocus && onFocus}
      >
        <Component {...restProps} className={_classes || undefined} ref={ref} style={_style}>
          {children}
        </Component>
      </Handler>
    );
  }
);
