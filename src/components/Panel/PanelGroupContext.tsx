import React, { useState, useContext } from 'react';

const PanelGroupCountContext = React.createContext([]);
const PanelGroupCountActionsContext = React.createContext(undefined);
const PanelGroupHighestZIndexContext = React.createContext(undefined);
const PanelGroupHighestZIndexActionsContext = React.createContext(undefined);
const PanelGroupOverlayCloseClickContext = React.createContext(undefined);
const PanelGroupOverlayCloseClickActionsContext = React.createContext(undefined);

export interface PanelCount {
  id: string;
}

export const panelGroupCountContext = (): PanelCount[] => {
  return useContext(PanelGroupCountContext);
};

export const panelGroupCountActionsContext = (): (panel: PanelCount[]) => void => {
  return useContext(PanelGroupCountActionsContext);
};

export const panelGroupHighestZIndexContext = (): number => {
  return useContext(PanelGroupHighestZIndexContext);
};

export const panelGroupHighestZIndexActionsContext = (): (zindex: number) => void => {
  return useContext(PanelGroupHighestZIndexActionsContext);
};

export const panelGroupOverlayCloseClickContext = (): boolean => {
  return useContext(PanelGroupOverlayCloseClickContext);
};

export const panelGroupOverlayCloseClickActionsContext = (): (event: boolean) => void => {
  return useContext(PanelGroupOverlayCloseClickActionsContext);
};

interface Props {
  children: React.ReactElement;
}

export const PanelGroupProvider: React.FC<Props> = ({
  // eslint-disable-next-line react/prop-types
  children,
}): React.ReactElement => {

  /**
   * Contains an array of active panels (panels in the open state). When a
   * group managed panel is opened the associated panel object is added to
   * this array. Inversely when the group managed panel is closed the
   * associated panel object is removed. This state is tracked in the system
   * and used to drive other state changes.
   */
  const [panelGroupCount, setPanelGroupCount] = useState([]);

  /**
   * Contains a numeric value associated to the highest zindex. The highest
   * zindex is determined by the system when the GroupPanel component is
   * initialized. The system queries the DOM for all the zindex rules found
   * in the DOM, whether it is inline or CSS. This state is tracked in the system
   * and used to drive other state changes.
   */
  const [panelGroupHighestZIndex, setPanelGroupHighestZIndex] = useState(null);

  /**
   * Contains a boolean value associated with the click event attached to the overlay
   * managed by the PanelGroup component.
   */
  const [panelGroupOverlayCloseClick, setPanelGroupOverlayCloseClick] = useState(false);

  return (
    <PanelGroupCountContext.Provider value={panelGroupCount}>
      <PanelGroupCountActionsContext.Provider value={setPanelGroupCount}>
        <PanelGroupHighestZIndexContext.Provider value={panelGroupHighestZIndex}>
          <PanelGroupHighestZIndexActionsContext.Provider value={setPanelGroupHighestZIndex}>
            <PanelGroupOverlayCloseClickContext.Provider value={panelGroupOverlayCloseClick}>
              <PanelGroupOverlayCloseClickActionsContext.Provider value={setPanelGroupOverlayCloseClick}>
                {children}
              </PanelGroupOverlayCloseClickActionsContext.Provider>
            </PanelGroupOverlayCloseClickContext.Provider>
          </PanelGroupHighestZIndexActionsContext.Provider>
        </PanelGroupHighestZIndexContext.Provider>
      </PanelGroupCountActionsContext.Provider>
    </PanelGroupCountContext.Provider>
  );
};
