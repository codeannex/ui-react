import * as React from 'react';
import classNames from 'classnames';

import { Portal } from '../Portal';

import {
  panelGroupHighestZIndexContext,
  panelGroupCountContext,
  panelGroupContext,
  panelGroupCountActionsContext,
  PanelCount
} from './PanelContext';

import {
  PanelHeaderDefault,
  PanelHeader,
  PanelHeaderProps,
  PanelContent,
  PanelContentProps,
  PanelOverlay
} from './components';

import { usePreviousState } from '../../hooks/usePreviousState';

import { getZIndexValues } from './utils/getZIndex';

import './Panel.scss';

const TIMEOUT = {
  PORTAL_RENDER_DELAY: 200,
  PANEL_CLOSED_DELAY: 400
};

const LIBRARY_CLASSES = {
  CONTAINER: 'codeannex-panel',
  CONTENT: 'codeannex-panel-content'
};

export enum PanelClasses {

  /* Class hook for base panel styles */
  SHARED = 'panel__base',

  /* Animation classes */
  RIGHT = 'slide-left',
  BOTTOM = 'slide-up',
  LEFT = 'slide-right',
  TOP = 'slide-down'
}

export enum PanelPosition {
  RIGHT = 'RIGHT',
  BOTTOM = 'BOTTOM',
  LEFT = 'LEFT',
  TOP = 'TOP'
}

interface ZIndex {
  panel: number;
  overlay: number;
}

interface PanelPropsComposition  {
  Header?: React.FC<PanelHeaderProps>;
  Content?: React.FC<PanelContentProps>;
}

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement>, PanelPropsComposition {
  forwardedRef?: React.Ref<HTMLDivElement>;
  controllerId?: string;
  open: boolean;
  overlay?: boolean;
  position: PanelPosition;
  renderPortal?: boolean;
  zindex?: number;

  openState?: boolean;

  // Lifecycle callbacks
  onClose?: () => void;
  onClosed?: () => void;
  onOpen?: () => void;
  onOpened?: () => void;

  defaultCloseCallback?: () => void;
}

export const PANEL_TEST_ID = 'codeannex-panel-component';

/**
 * @Codeannex UI React: Panel Component
 *
 * Panel Component
 */
const PanelComponent = ({
  children,
  controllerId,
  overlay,
  position,
  renderPortal,
  zindex,

  openState,

  onClose,
  onClosed,
  onOpen,
  onOpened,
  defaultCloseCallback
}: PanelProps): JSX.Element => {
  const panelGroupUsed = panelGroupContext();

  /**
   * This group of values are only used when a PanelGroup exists.
   */
  const panelGroupCount = panelGroupCountContext();
  const setPanelGroupCount = panelGroupCountActionsContext();
  const panelGroupHighestZIndex = panelGroupHighestZIndexContext();

  const [headerFound, setHeaderFound] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);
  const [portal, setPortal] = React.useState<boolean>(false);
  const [zIndex, setZindex] = React.useState<ZIndex>({
    panel: null,
    overlay: null
  });

  const openPrev: boolean = usePreviousState(open);

  const classes = classNames(
    LIBRARY_CLASSES.CONTAINER,
    open && 'open',
    position && PanelClasses[position]
  );

  /**
   * Handlers
   */
  const onHandleOpen = (): void => {
    setOpen(true);

    onOpen && onOpen();
  };

  const onHandleOpened = (): void => {
    onOpened && onOpened();
  };

  const onHandleClose = (): void => {
    setOpen(false);

    onClose && onClose();
  };

  const onHandleClosed = (): void => {
    onClosed && onClosed();
  };

  /**
   * Use Effect 1
   *
   * Handles adding the zindex to a panel. The top and bottom panels
   * will be give a higher precedence than the side panels.
   */
  React.useEffect(() => {
    if (openState && !zIndex.panel) {

      /**
       * Adds zindex to a panel managed by the Panel Group.
       */
      if (controllerId && panelGroupUsed && panelGroupHighestZIndex) {
        position === PanelPosition.TOP || position === PanelPosition.BOTTOM ?
          setZindex({ ...zIndex, panel: panelGroupHighestZIndex + 2 }) :
          setZindex({ ...zIndex, panel: panelGroupHighestZIndex + 1 });
      }

      /**
       * Adds zindex to a panel. This panel is not managed by the
       * Panel Group.
       */
      if (!controllerId && !zIndex.panel && !zindex) {
        const { zIndexPanel, zIndexOverlay } = getZIndexValues(zindex, overlay);

        setZindex({
          panel: zIndexPanel,
          overlay: zIndexOverlay
        });
      }

      /**
       * Adds zindex to a panel when the zindex prop is explicitly
       * set.
       */
      if (!controllerId && !zIndex.panel && zindex) {
        setZindex({
          panel: zindex + 1,
          overlay: zindex
        });
      }
    }

  }, [
    controllerId,
    openState,
    panelGroupUsed,
    panelGroupHighestZIndex,
    position,
    zIndex,
    zindex
  ]);

  /**
   * Use Effect 2
   *
   * Handles rendering the portal before opening the panel when renderPortal
   * prop is enabled and after zindex is calculated by use effect 1.
   */
  React.useEffect(() => {

    /**
     * Checks:
     *
     * 1. zIndex was set by use effect 1
     * 2. render portal prop was set
     * 3. portal does not exist
     * 4. openState is true
     */
    if (openState && zIndex.panel && renderPortal && !portal) {
      setPortal(true);
    }
  }, [
    openState,
    openPrev,
    portal,
    renderPortal,
    zIndex
  ]);

  /**
   * Use Effect 3
   *
   * Handles opening the panel
   */
  React.useEffect(() => {

    /**
     * Checks:
     *
     * 1. openState is true
     * 2. open is false
     * 3. open is equal to openPrev - During re-renders isOpen can be
     * false. This ensures the check runs once when the panel is opened and
     * is not reset after any re-renders.
     */
    if (openState && !open) {

      /**
       * Opens the panel when portal is true. The delay ensures the portal is
       * rendered before the panel allowing the animation to work.
       */
      portal && setTimeout(() => {
        onHandleOpen();
      }, TIMEOUT.PORTAL_RENDER_DELAY);

      /**
       * Opens the panel when the portal prop is not enabled. No delay is needed
       * for the animation.
       */
      if (!renderPortal) {
        onHandleOpen();
      }

      /**
       * Adds the panel to the panel group when Panel Group is enabled.
       */
      if (panelGroupUsed && !openPrev) {
        const found = panelGroupCount.find((panel: PanelCount) => {
          return panel.id === controllerId;
        });

        !found && panelGroupUsed && setPanelGroupCount([...panelGroupCount, {
          id: controllerId
        }]);
      }
    }
  }, [
    open,
    openPrev,
    openState,
    openPrev,
    renderPortal,
    portal,
    panelGroupUsed
  ]);

  /**
   * Use Effect 4
   *
   * Handles closing the panel when the open prop is set to false.
   */
  React.useEffect(() => {

    /**
     * Checks:
     *
     * 1. open prop is false
     * 2. openPrev is not undefined - Ensures the check does not run on
     * initial render.
     * 3. openPrev is not false -  During re-renders openPrev can be
     * false. This ensures the check runs once when the panel is closed and
     * is not reset after any re-renders.
     *
     */
    if (!openState && open) {
      onHandleClose();

      /**
       * Removes the panel from the Panel Group when Panel Group is enabled.
       */
      if (panelGroupUsed) {
        const newPanelCountContext = panelGroupCount.filter((panel: PanelCount) => {
          return panel.id !== controllerId;
        });

        panelGroupUsed && setPanelGroupCount(newPanelCountContext);
      }
    }
  }, [open, openState, openPrev, panelGroupUsed, controllerId]);

  /**
   * Use Effect 5
   *
   * Handles cleanup and resetting the external toggle state open.
   */
  React.useEffect(() => {

    /**
     * Checks:
     *
     * open state is set to false
     * openPrev is true - indicates the panel has been closed invoking
     * the onClosed callback.
     */
    if (!open && openPrev) {
      setTimeout(() => {
        portal && setPortal(false);

        onHandleClosed();
      }, TIMEOUT.PANEL_CLOSED_DELAY);
    }
  }, [open, openPrev]);

  /**
   * Handles determining whether the user has provided a custom header using
   * the optional compound component.
   */
  React.useEffect(() => {
    React.Children.map(children, (child: React.ReactElement) => {
      if (child && child.type === PanelHeader) {
        setHeaderFound(true);
      }
    });
  }, [children]);

  const renderOverlay = (): JSX.Element => {
    return (
      <Portal>
        <PanelOverlay
          visibility={openState}
          zindex={zIndex.overlay}
        />
      </Portal>
    );
  };

  /**
   * Render content.
   */
  const renderContent = (): JSX.Element => {
    return (
      <>
        <div
          className={classes}
          style={{ zIndex: zIndex.panel }}>
          {!headerFound ? (
            <>
              <PanelHeaderDefault
                onClose={defaultCloseCallback}
              />
              <div className={LIBRARY_CLASSES.CONTENT}>
                {children}
              </div>
            </>
          ) : (
            <>
              {children}
            </>
          )}
        </div>
        {overlay && open && renderOverlay()}
      </>
    );
  };

  if (renderPortal) {
    return portal ? (
      <Portal>
        {renderContent()}
      </Portal>
    ): null;
  } else {
    return renderContent();
  }
};

export const Panel = Object.assign(
  React.forwardRef(
    (props: PanelProps, ref: React.Ref<HTMLDivElement>): JSX.Element => {

      const [openProp, ] = React.useState<boolean>(props.open);
      const [openState, setOpenState] = React.useState<boolean>(null);

      const openPropPrev = usePreviousState(openProp);
      const openStatePrev = usePreviousState(openState);

      const handleDefaultCloseButtonCallback = (): void => {
        setOpenState(false);
      };

      React.useLayoutEffect(() => {

        /**
         * Check halts panel rendering if renderPortal prop is enabled. This
         * check should only run on initial load.
         */
        if (props.renderPortal && !props.open && openPropPrev === undefined) {
          setOpenState(null);
        }

        /**
         * Check renders the panel when open prop is true. This check
         * should only run when the panel is opened.
         */
        if (props.open && !openState && !openStatePrev) {
          setOpenState(true);
        }

        /**
         * Check closes panel when open prop is set to false. This check
         * handles closing the panel when the user has opted to use the
         * Panel.Header compound component and because the default header
         * close button which is handled internally will not be used.
         */
        if (!props.open && openStatePrev !== undefined && openState) {
          setOpenState(false);
        }

      }, [props.open, openState, openStatePrev, openPropPrev, props.renderPortal]);

      return (
        <PanelComponent
          {...props }
          openState={openState}
          forwardedRef={ref}
          data-testid={PANEL_TEST_ID}
          defaultCloseCallback={handleDefaultCloseButtonCallback}
        />
      );
    }
  ),
  {
    Header: PanelHeader,
    Content: PanelContent
  }
);

export default Panel;
