import * as React from 'react';

import { PanelOverlay } from './components';
import {
  PanelProvider,
  panelHighestZIndexActionsContext,
  panelCountContext
} from './PanelContext';

import { getHighestZIndex } from './utils/getHighestZIndex';

export interface PanelGroupProp extends React.HTMLAttributes<HTMLDivElement> {
  placeholder?: string;
}

const PanelGroupComponent = ({
  children
}: PanelGroupProp): JSX.Element => {
  const panelCount = panelCountContext();
  const setPanelHighestZIndex = panelHighestZIndexActionsContext();

  const [highestZIndex, setHighestZIndex] = React.useState(null);
  const [overlayVisible, setOverlayVisible] = React.useState(false);

  /**
   * Handles finding the highest index on the page after render. This value
   * will be used as the benchmark to set the z-index of the panel
   * components managed by this component.
   */
  React.useEffect(() => {
    const highestIndex = getHighestZIndex();

    setPanelHighestZIndex(highestIndex);
    setHighestZIndex(highestIndex);
  }, []);

  React.useEffect(() => {
    setOverlayVisible(!!panelCount.length);
  }, [panelCount, setOverlayVisible]);

  return (
    <>
      <PanelOverlay
        visibility={overlayVisible}
        zindex={highestZIndex}
      />
      {children}
    </>
  );
};

export const PanelGroup = (props: PanelGroupProp): JSX.Element => {
  return (
    <PanelProvider>
      <PanelGroupComponent { ...props } />
    </PanelProvider>
  );
};
