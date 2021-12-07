import React, { useState, useContext } from 'react';

const PanelCountContext = React.createContext([]);
const PanelCountActionsContext = React.createContext(undefined);
const PanelOverlayContext = React.createContext(undefined);
const PanelOverlayActionsContext = React.createContext(undefined);
const PanelHighestZIndexContext = React.createContext(undefined);
const PanelHighestZIndexActionsContext = React.createContext(undefined);

export const panelCountContext = (): any[] => {
  const context = useContext(PanelCountContext);

  if (context === undefined) {
    throw new Error(`Error`);
  }

  return context;
};

export const panelCountActionsContext = ()  => {
  const context = useContext(PanelCountActionsContext);

  if (context === undefined) {
    throw new Error(`Error`);
  }

  return context;
};

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

export const panelHighestZIndexContext = (): number => {
  const context = useContext(PanelHighestZIndexContext);

  if (context === undefined) {
    throw new Error(`Error`);
  }

  return context;
};

export const panelHighestZIndexActionsContext = ()  => {
  const context = useContext(PanelHighestZIndexActionsContext);

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
  const [panelCount, setPanelCount] = useState([]);
  const [panelOverlay, setPanelOverlay] = useState(false);
  const [panelHighestZIndex, setPanelHighestZIndex] = useState(null);

  return (
    <PanelCountContext.Provider value={panelCount}>
      <PanelCountActionsContext.Provider value={setPanelCount}>
        <PanelOverlayContext.Provider value={panelOverlay}>
          <PanelOverlayActionsContext.Provider value={setPanelOverlay}>
            <PanelHighestZIndexContext.Provider value={panelHighestZIndex}>
              <PanelHighestZIndexActionsContext.Provider value={setPanelHighestZIndex}>
                {children}
              </PanelHighestZIndexActionsContext.Provider>
            </PanelHighestZIndexContext.Provider>
          </PanelOverlayActionsContext.Provider>
        </PanelOverlayContext.Provider>
      </PanelCountActionsContext.Provider>
    </PanelCountContext.Provider>
  );
};
