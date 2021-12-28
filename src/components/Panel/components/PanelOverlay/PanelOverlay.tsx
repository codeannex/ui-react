import * as React from 'react';
import classNames from 'classnames';

import './PanelOverlay.scss';

export interface PanelOverlayProps {
  visibility: boolean;
  zindex?: number;

  onClick?: () => void;
}

export const PanelOverlay = ({
  visibility,
  zindex,

  onClick
}: PanelOverlayProps): JSX.Element  => {

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

export default PanelOverlay;
