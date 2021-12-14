import * as React from 'react';

import { PanelOverlay } from './components';
import {
  PanelProvider,
  panelGroupHighestZIndexActionsContext,
  panelGroupActionsContext,
  panelGroupCountContext
} from './PanelContext';

import { getHighestZIndex } from './utils/getHighestZIndex';

export interface PanelGroupProp extends React.HTMLAttributes<HTMLDivElement> {
  overlay?: boolean;
  zindex?: number;
}

export const PANEL_GROUP_TEST_ID = 'codeannex-panel-component';

/**
 * @Codeannex UI React: Panel Component
 *
 * Panel Group Component
 */
const PanelGroupComponent = ({
  children,
  overlay = false,
  zindex = null
}: PanelGroupProp): JSX.Element => {
  const panelGroupCount = panelGroupCountContext();
  const setPanelGroupHighestZIndex = panelGroupHighestZIndexActionsContext();
  const setPanelGroupUsed = panelGroupActionsContext();

  const [highestZIndex, setHighestZIndex] = React.useState(null);
  const [overlayVisible, setOverlayVisible] = React.useState(false);

  /**
   * Handles finding the highest z-index on the page after render.
   * This value will be used as the benchmark to set the z-index
   * of the panel overlay as the associated panel components.
   */
  React.useEffect(() => {
    const highestIndex = zindex || getHighestZIndex();

    setPanelGroupHighestZIndex(highestIndex);
    setHighestZIndex(highestIndex);
  }, [zindex]);

  React.useEffect(() => {
    setOverlayVisible(!!panelGroupCount.length);
    setPanelGroupUsed(true);
  }, [panelGroupCount, setOverlayVisible, setPanelGroupUsed]);

  return (
    <div id={PANEL_GROUP_TEST_ID}>
      {overlay && (
        <PanelOverlay
          visibility={overlayVisible}
          zindex={highestZIndex}
        />
      )}
      {children}
    </div>
  );
};

export const PanelGroup = (props: PanelGroupProp): JSX.Element => {
  return (
    <PanelProvider>
      <PanelGroupComponent { ...props } />
    </PanelProvider>
  );
};
