import React from 'react';

import { PanelStateContext } from './PanelContext';

export const useModalState = (): any => {
  const context = React.useContext(PanelStateContext);

  return context;
};
