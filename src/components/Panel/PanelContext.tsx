import React, { useState, useContext } from 'react';

import { IPanelController } from './PanelController';

const PanelPanelControllerContext = React.createContext(undefined);
const PanelPanelControllerActionsContext = React.createContext(undefined);

export const panelPanelControllerContext = (): IPanelController => {
  return useContext(PanelPanelControllerContext);
};

export const panelPanelControllerActionsContext = (): (IPanelController) => void => {
  return useContext(PanelPanelControllerActionsContext);
};

interface Props {
  children: React.ReactElement;
  controller: any;
}

export const PanelProvider: React.FC<Props> = ({
  // eslint-disable-next-line react/prop-types
  controller,
   // eslint-disable-next-line react/prop-types
  children
}): React.ReactElement => {
  const [panelController, ] = useState<any>(controller);

  return (
    <PanelPanelControllerContext.Provider value={panelController}>
      {children}
    </PanelPanelControllerContext.Provider>
  );
};
