import React from 'react';

import { PanelDispatchContext } from './PanelContext';

export const useModalDispatch = (): any => {
  const context = React.useContext(PanelDispatchContext);

  return context;
};
