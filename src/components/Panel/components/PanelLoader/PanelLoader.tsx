import * as React from 'react';
import classNames from 'classnames';

import './PanelLoader.scss';

export const enum PanelLoaderTheme {
  DARK = 'dark',
  LIGHT = 'light'
}

export interface PanelLoaderProps {
  theme?: string;
}

export const PanelLoader = ({
  theme = 'light'
}: PanelLoaderProps): JSX.Element => {

  const classes = classNames('panel-loader', `${theme}`);

  return <div className={classes} />
};

export default PanelLoader;
