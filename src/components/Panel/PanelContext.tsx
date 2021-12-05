import React, { useState, useContext } from 'react';

import { getHighestZIndex } from "./utils/getHighestZIndex";
import { PanelController } from "./PanelController";

export const PanelControllerContext = React.createContext(undefined);
const PanelOverlayContext = React.createContext(undefined);
const PanelOverlayActionsContext = React.createContext(undefined);

export const panelOverlayContext = (): boolean => {
  const context = useContext(PanelOverlayContext);

  if (context === undefined) {
    throw new Error(`Error`);
  }

  return context;
};

export const panelOverlayActionsContext = ()  => {
  const context = useContext(PanelOverlayActionsContext);

  if (context === undefined) {
    throw new Error(`Error`);
  }

  return context;
};

interface Props {
  children: React.ReactElement;
}

export const PanelProvider: React.FC<Props> = ({
  // eslint-disable-next-line react/prop-types
  children,
}): React.ReactElement => {
  const [overlay, setOverlay] = useState(false);

  const panelController = new PanelController(
    getHighestZIndex,
  );

  return (
    <PanelControllerContext.Provider value={panelController}>
      <PanelOverlayContext.Provider value={overlay}>
        <PanelOverlayActionsContext.Provider value={setOverlay}>
          {children}
        </PanelOverlayActionsContext.Provider>
      </PanelOverlayContext.Provider>
    </PanelControllerContext.Provider>
  );
};
