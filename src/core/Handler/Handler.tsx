import * as React from "react";

type HandlerProps = {
  children: React.ReactElement;
  disabled?: boolean;

  onBlur?: React.FocusEventHandler;
  onChange?: React.ChangeEventHandler;
  onClick?: React.MouseEventHandler;
  onFocus?: React.FocusEventHandler;
};

export const Handler: React.FC<HandlerProps> = ({
  children,
  disabled,
  onBlur,
  onChange,
  onClick,
  onFocus,
}) => {
  const handleBlur = React.useCallback<React.FocusEventHandler>(
    (e: React.FocusEvent) => {
      if (disabled) {
        e.stopPropagation();
        e.preventDefault();

        return;
      }

      if (onBlur) {
        onBlur(e);
      }
    },
    [disabled, onBlur]
  );

  const handleChange = React.useCallback<React.ChangeEventHandler>(
    (e: React.ChangeEvent) => {
      if (disabled) {
        e.stopPropagation();
        e.preventDefault();

        return;
      }

      if (onChange) {
        onChange(e);
      }
    },
    [disabled, onChange]
  );

  const handleClick = React.useCallback<React.MouseEventHandler>(
    (e: React.MouseEvent) => {
      if (disabled) {
        e.stopPropagation();
        e.preventDefault();

        return;
      }

      if (onClick) {
        onClick(e);
      }
    },
    [disabled, onClick]
  );

  const handleFocus = React.useCallback<React.FocusEventHandler>(
    (e: React.FocusEvent) => {
      if (disabled) {
        e.stopPropagation();
        e.preventDefault();

        return;
      }

      if (onFocus) {
        onFocus(e);
      }
    },
    [disabled, onFocus]
  );

  const _onBlur = onBlur ? { onBlur: handleBlur } : {};
  const _onChange = onChange ? { onChange: handleChange } : {};
  const _onClick = onClick ? { onClick: handleClick } : {};
  const _onCFocus = onFocus ? { onFocus: handleFocus } : {};

  return (
    <React.Fragment>
      {React.Children.map(children, (child: React.ReactElement) => {
        return React.cloneElement(child, {
          ..._onBlur,
          ..._onChange,
          ..._onClick,
          ..._onCFocus,
        });
      })}
    </React.Fragment>
  );
};
