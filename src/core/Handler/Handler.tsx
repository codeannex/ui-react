import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BaseProps = Pick<React.HTMLAttributes<any>, 'children'> & React.RefAttributes<any>;

type Props = Readonly<BaseProps & {

  ariaLabel?: string;

  ariaLabelledBy?: string

  /**
   * Click event handler.
   */
  onClick?: React.MouseEventHandler;

  /**
   * Sets the underlying DOM element tag.
   * @default "button"
   */
  from: string;

} & DefaultProps>

const defaultProps = {

  /**
   * Sets the element's `aria-disabled` attribute.
   * @default false
   */
  disabled: false,
};

export type DefaultProps = typeof defaultProps;

/**
 * @Codeannex UI React: Core <Element Components>
 *
 * Handler Component
 * Returns a button element by default with encapsulated functionality.
 */
const _Handler = ({
  ariaLabel,
  ariaLabelledBy,
  disabled,
  from: HTMLElement,
  forwardedRef,
  onClick,
  ...rest
}: Props & { forwardedRef: React.Ref<HTMLButtonElement> }): JSX.Element => {

  // Handlers
  const handleClick = React.useCallback<React.MouseEventHandler>(
    (event) => {
      if (disabled) {
        event.stopPropagation();
        event.preventDefault();

        return;
      }

      if (onClick) {
        onClick(event);
      }

    }, [disabled, onClick]
  );

  const props = {
    ref: forwardedRef,
    disabled,
    onClick: handleClick,
    ...rest
  };

  return (
    <HTMLElement
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      { ...props }
    />
  );
};

_Handler.defaultProps = defaultProps;

export const Handler = React.forwardRef((
  props: Omit<Props, keyof DefaultProps> & Partial<DefaultProps>,
  ref: React.Ref<HTMLButtonElement>
): JSX.Element => {
  return <_Handler { ...props } forwardedRef={ref} />;
});
