import * as React from 'react';

import { Panel } from 'components';
import { PanelOverlay } from './components';
import {
  PanelGroupProvider,
  panelGroupHighestZIndexActionsContext,
  panelGroupCountContext,
  panelGroupOverlayCloseClickActionsContext
} from './PanelGroupContext';

import { getHighestZIndex } from './utils/getHighestZIndex';

export interface PanelGroupProp extends React.HTMLAttributes<HTMLDivElement> {
  overlay?: boolean;
  zindex?: number;
}

export const PANEL_GROUP_TEST_ID = 'codeannex-panel-component';

/**
 * @Codeannex UI React: Panel Group Component
 */
const PanelGroupComponent = ({
  children,
  overlay = false,
  zindex = null
}: PanelGroupProp): JSX.Element => {
  const panelGroupCount = panelGroupCountContext();
  const setPanelGroupHighestZIndex = panelGroupHighestZIndexActionsContext();
  const setPanelGroupOverlayCloseClick = panelGroupOverlayCloseClickActionsContext();

  const [highestZIndex, setHighestZIndex] = React.useState(null);
  const [overlayVisible, setOverlayVisible] = React.useState(false);

  const overlayRef = React.useRef(undefined);

  const handleCloseClick = (): void => {
    setPanelGroupOverlayCloseClick(true);
  };

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

  /**
   * Handles rendering the overlay when the overlay prop is set.
   */
  React.useEffect(() => {
    if (panelGroupCount.length) {
      setPanelGroupOverlayCloseClick(false);
    }

    setOverlayVisible(!!panelGroupCount.length);
  }, [panelGroupCount, setOverlayVisible]);

  return (
    <div id={PANEL_GROUP_TEST_ID}>
      {overlay && (
        <PanelOverlay
          ref={overlayRef}
          visibility={overlayVisible}
          zindex={highestZIndex}

          onClick={handleCloseClick}
        />
      )}
      {React.Children.map(children, (child: any) => {
        return child.type === Panel ?
          React.cloneElement(child, { controller: true }) :
          child;
      })}
    </div>
  );
};

export const PanelGroup = (props: PanelGroupProp): JSX.Element => {
  return (
    <PanelGroupProvider>
      <PanelGroupComponent { ...props } />
    </PanelGroupProvider>
  );
};
