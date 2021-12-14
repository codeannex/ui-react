import React, { useState, useContext } from 'react';

const PanelGroupCountContext = React.createContext([]);
const PanelGroupCountActionsContext = React.createContext(undefined);
const PanelGroupOverlayContext = React.createContext(undefined);
const PanelGroupOverlayActionsContext = React.createContext(undefined);
const PanelGroupHighestZIndexContext = React.createContext(undefined);
const PanelGroupHighestZIndexActionsContext = React.createContext(undefined);
const PanelGroupContext = React.createContext(undefined);
const PanelGroupActionsContext = React.createContext(undefined);

export interface PanelCount {
  id: string;
}

export const panelGroupCountContext = (): PanelCount[] => {
  return useContext(PanelGroupCountContext);
};

export const panelGroupCountActionsContext = (): (PanelCount) => void  => {
  return useContext(PanelGroupCountActionsContext);
};

export const panelGroupOverlayContext = (): boolean => {
  return useContext(PanelGroupOverlayContext);
};

export const panelGroupOverlayActionsContext = (): (boolean) => void  => {
  return useContext(PanelGroupOverlayActionsContext);
};

export const panelGroupHighestZIndexContext = (): number => {
  return useContext(PanelGroupHighestZIndexContext);
};

export const panelGroupHighestZIndexActionsContext = (): (number) => void  => {
  return useContext(PanelGroupHighestZIndexActionsContext);
};

export const panelGroupContext = (): boolean => {
  return useContext(PanelGroupContext);
};

export const panelGroupActionsContext = (): (boolean) => void  => {
  return useContext(PanelGroupActionsContext);
};

interface Props {
  children: React.ReactElement;
}

export const PanelProvider: React.FC<Props> = ({
  // eslint-disable-next-line react/prop-types
  children,
}): React.ReactElement => {
  const [panelGroupCount, setPanelGroupCount] = useState([]);
  const [panelGroupOverlay, setPanelGroupOverlay] = useState(false);
  const [panelGroupHighestZIndex, setPanelGroupHighestZIndex] = useState(null);
  const [panelGroupUsed, setPanelGroupUsed] = useState(false);

  return (
    <PanelGroupCountContext.Provider value={panelGroupCount}>
      <PanelGroupCountActionsContext.Provider value={setPanelGroupCount}>
        <PanelGroupOverlayContext.Provider value={panelGroupOverlay}>
          <PanelGroupOverlayActionsContext.Provider value={setPanelGroupOverlay}>
            <PanelGroupHighestZIndexContext.Provider value={panelGroupHighestZIndex}>
              <PanelGroupHighestZIndexActionsContext.Provider value={setPanelGroupHighestZIndex}>
                <PanelGroupContext.Provider value={panelGroupUsed}>
                  <PanelGroupActionsContext.Provider value={setPanelGroupUsed}>
                    {children}
                  </PanelGroupActionsContext.Provider>
                </PanelGroupContext.Provider>
              </PanelGroupHighestZIndexActionsContext.Provider>
            </PanelGroupHighestZIndexContext.Provider>
          </PanelGroupOverlayActionsContext.Provider>
        </PanelGroupOverlayContext.Provider>
      </PanelGroupCountActionsContext.Provider>
    </PanelGroupCountContext.Provider>
  );
};
