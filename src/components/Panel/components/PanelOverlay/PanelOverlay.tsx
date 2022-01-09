import * as React from 'react';
import classNames from 'classnames';

import './PanelOverlay.scss';

export interface PanelOverlayProps {
  visibility: boolean;
  zindex?: number;

  onClick?: () => void;
}

const PanelOverlayComponent = ({
  forwardedRef,
  visibility,
  zindex,

  onClick
}: PanelOverlayProps & { forwardedRef: React.Ref<HTMLElement> }): JSX.Element => {

  const classes = classNames(
    'codeannex-panel-overlay',
    visibility && 'visible'
  );

  const handleOnClick = (): void => {
    onClick && onClick();
  };

  return (
    <div
      className={classes}
      style={{ zIndex: zindex }}

      onClick={handleOnClick}
    />
  );
};

export const PanelOverlay = React.forwardRef((
  props: PanelOverlayProps,
  ref: React.Ref<HTMLDivElement>
): JSX.Element => {
  return (
    <PanelOverlayComponent { ...props } forwardedRef={ref} />
  );
});

export default PanelOverlay;
