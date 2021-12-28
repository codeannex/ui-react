import * as React from 'react';

import { Button } from '../../../Button';

import './PanelHeaderDefault.scss';

const LIBRARY_CLASSES = {
  HEADER: 'codeannex-panel-header',
  BTN_CLOSE: 'codeannex-panel-header__btn-close'
};

export interface PanelHeaderDefaultProps {
  onClose?: () => void;
}

export const PanelHeaderDefault = ({
  onClose
}: PanelHeaderDefaultProps): JSX.Element => {

  const handleOnClick = (): void => {
    onClose && onClose();
  };

  return (
    <header className={LIBRARY_CLASSES.HEADER}>
      <Button
        onClick={handleOnClick}
        classes={[LIBRARY_CLASSES.BTN_CLOSE]}
      >
        Close
      </Button>
    </header>
  );
};
