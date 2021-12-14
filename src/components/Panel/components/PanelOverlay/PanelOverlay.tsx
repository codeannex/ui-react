import * as React from 'react';
import classNames from 'classnames';

import './PanelOverlay.scss';

export interface PanelOverlayProps {
  visibility: boolean;
  zindex?: number;
}

export const PanelOverlay = ({
  visibility,
  zindex
}: PanelOverlayProps): JSX.Element  => {

  const classes = classNames(
    'codeannex-panel-overlay',
    visibility && 'visible'
  );

  return (
    <div className={classes} style={{ zIndex: zindex }} />
  );
};

export default PanelOverlay;
