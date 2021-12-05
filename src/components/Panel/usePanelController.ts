import React from 'react';

import { PanelControllerContext } from './PanelContext';

export const usePanelController = (): any => {
  return React.useContext(PanelControllerContext);
};
