import * as React from 'react';
import classNames from 'classnames';

import { Portal } from '../Portal';

import {
  PanelHeaderDefault,
  PanelHeader,
  PanelHeaderProps,
  PanelContent,
  PanelContentProps,
  PanelOverlay,
  PanelLoader
} from './components';

import {
  panelGroupHighestZIndexContext,
  panelGroupCountContext,
  panelGroupContext,
  panelGroupCountActionsContext,
  PanelCount
} from './PanelGroupContext';

import {
  PanelProvider,
  panelPanelControllerContext
} from './PanelContext';

import { PanelController } from './PanelController';

import { usePreviousState } from '../../hooks/usePreviousState';

import { getZIndexValues } from './utils/getZIndex';
import { getGuid } from '../../../utils';

import './Panel.scss';

const CONSTANT = {
  DATA_ANIMATION: 'data-animation',
  TRANSITION_END: 'transitionend'
}

const TIMEOUT = {
  PORTAL_RENDER_DELAY: 200,
  PANEL_CLOSED_DELAY: 400
};

const LIBRARY_CLASSES = {
  CONTAINER: 'codeannex-panel',
  CONTAINER_INNER: 'codeannex-panel__inner',
  CONTENT: 'codeannex-panel-content',
  CONTENT_INNER: 'codeannex-panel-content__inner'
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
  open: boolean;
  position: PanelPosition;

  forwardedRef?: React.Ref<HTMLDivElement>;
  classes?: string;
  controller?: boolean;
  errorText?: string;
  expanse?: string;
  loaderTheme?: string;
  loading?: boolean;
  loadingText?: string;
  overlay?: boolean;
  renderPortal?: boolean;
  zindex?: number;
  openState?: boolean;

  // Lifecycle callbacks
  onClose?: () => void;
  onClosed?: () => void;
  onOpen?: () => void;
  onOpened?: () => void;

  defaultCloseCallback?: () => void;
  closeCompletedCallback?: () => void;
}

export const PANEL_TEST_ID = 'codeannex-panel-component';

/**
 * @Codeannex UI React: Panel Component
 *
 * Panel Component
 */
const PanelComponent = ({
  children,
  classes,
  controller,
  errorText,
  expanse,
  loaderTheme,
  loading = false,
  loadingText,
  overlay,
  position,
  renderPortal,
  zindex,

  openState,

  onClose,
  onClosed,
  onOpen,
  onOpened,
  defaultCloseCallback,
  closeCompletedCallback
}: PanelProps): JSX.Element => {
  let expanseValue = {};

  const containerRef = React.useRef(undefined);
  const openStateRef = React.useRef(undefined);

  /**
   * This group of values are only used when a PanelGroup exists.
   */
  const panelGroupUsed = panelGroupContext();
  const panelGroupCount = panelGroupCountContext();
  const setPanelGroupCount = panelGroupCountActionsContext();
  const panelGroupHighestZIndex = panelGroupHighestZIndexContext();

  const panelController = panelPanelControllerContext();

  const [headerFound, setHeaderFound] = React.useState<boolean>(false);
  const [internalId, setInternalId] = React.useState<string>(null);
  const [open, setOpen] = React.useState<boolean>(false);
  const [portal, setPortal] = React.useState<boolean>(false);
  const [zIndex, setZindex] = React.useState<ZIndex>({
    panel: null,
    overlay: null
  });

  const openPrev: boolean = usePreviousState(open);

  /**
   * Handles prop override of width or height for the panel.
   */
  if (expanse) {
    const property = expanse ?
      position === PanelPosition.TOP ||
      position === PanelPosition.BOTTOM ?
      'height' : 'width' : '';

    expanseValue = {
      [property]: expanse
    }
  }

  const setOpenStateRef = (openStateChange): void => {
    openStateRef.current = openStateChange;
  };

  const panelClasses = classNames(
    LIBRARY_CLASSES.CONTAINER,
    open && 'open',
    position && PanelClasses[position],
    classes
  );

  const animationEnd = React.useCallback(() => {
    openStateRef.current ? onHandleOpened() : onHandleClosed();
  }, [openStateRef]);

  /**
   * Handlers and lifecycle callbacks
   */
  const onHandleOpen = (): void => {
    panelController.addPanel({
      id: internalId,
      position: position,
      isChild: true
    });

    setOpen(true);

    onOpen && onOpen();
  };

  const onHandleOpened = (): void => {
    onOpened && onOpened();
  };

  const onHandleClose = (): void => {
    setOpen(false);

    panelController.removePanel({ id: internalId });

    onClose && onClose();
  };

  const onHandleClosed = (): void => {
    closeCompletedCallback();

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
      if (controller && panelGroupUsed && panelGroupHighestZIndex) {
        position === PanelPosition.TOP || position === PanelPosition.BOTTOM ?
          setZindex({ ...zIndex, panel: panelGroupHighestZIndex + 2 }) :
          setZindex({ ...zIndex, panel: panelGroupHighestZIndex + 1 });
      }

      /**
       * Adds zindex to a panel. This panel is not managed by the
       * Panel Group.
       */
      if (!controller && !zIndex.panel && !zindex) {
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
      if (!controller && !zIndex.panel && zindex) {
        setZindex({
          panel: zindex + 1,
          overlay: zindex
        });
      }
    }

  }, [
    controller,
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
          return panel.id === internalId;
        });

        !found && panelGroupUsed && setPanelGroupCount([...panelGroupCount, {
          id: internalId
        }]);
      }
    }
  }, [
    open,
    openPrev,
    openState,
    openPrev,
    internalId,
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
     * 1. openState prop has been set to false
     * 2. open is true - when openState is set to false the close process
     * begins and open will be true.
     */
    if (!openState && open) {
      onHandleClose();

      /**
       * Removes the panel from the Panel Group when Panel Group is enabled.
       */
      if (panelGroupUsed) {
        const newPanelCountContext = panelGroupCount.filter((panel: PanelCount) => {
          return panel.id !== internalId;
        });

        panelGroupUsed && setPanelGroupCount(newPanelCountContext);
      }
    }
  }, [open, openState, openPrev, panelGroupUsed, internalId]);

  /**
   * Use Effect 5
   *
   * Handles cleanup by resetting the external open state to false
   * and destroys the portal if portal was enabled.
   */
  React.useEffect(() => {

    /**
     * Checks:
     *
     * open state is set to false
     * openPrev is true - indicates the panel has been closed as
     * the previous state is true.
     */
    if (!open && openPrev) {
      setTimeout(() => {
        portal && setPortal(false);
      }, TIMEOUT.PANEL_CLOSED_DELAY);
    }
  }, [open, openPrev]);

  /**
   * Use Effect 6
   *
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

  /**
   * Use Effect 7
   *
   * Setup animation transition end event handler.
   */
  React.useEffect(() => {
    if (containerRef?.current &&
        !containerRef.current.getAttribute(CONSTANT.DATA_ANIMATION)) {

      containerRef.current.addEventListener(CONSTANT.TRANSITION_END, animationEnd);
      containerRef.current.setAttribute(CONSTANT.DATA_ANIMATION, 'animation');
    }
  });

  /**
   * Use Effect 8
   *
   * Updates openStateRef so animationEnd callback has
   * access to the latest state change from openState.
   */
  React.useEffect(() => {
    setOpenStateRef(openState);
  }, [openState]);

  /**
   * Use Effect 9
   *
   * Handles on mount simulation and cleanup when component unmounts.
   */
  React.useEffect(() => {
    setInternalId(getGuid());

    return (): void => {
      containerRef.current.removeEventListener(CONSTANT.TRANSITION_END, animationEnd);
    }
  }, []);

  /**
   * Gets current panel
   */
  // React.useEffect(() => {
  //   if (openState) {
  //     const panel = panelController.getPanel({ id: internalId });
  //   }
  // }, [openState, panelController])

  console.log('render =================');
  console.log(panelGroupCount);
  console.log('render =================');

  /**
   * Render content.
   */
  const renderOverlay = (): JSX.Element => {
    return (
      <Portal>
        <PanelOverlay
          visibility={openState}
          zindex={zIndex.overlay}

          onClick={defaultCloseCallback}
        />
      </Portal>
    );
  };

  const renderPanel = (): JSX.Element => {
    return (
      <>
        <div
          className={panelClasses}
          style={{ zIndex: zIndex.panel, ...expanseValue }}
          ref={containerRef}
        >
          <div className={LIBRARY_CLASSES.CONTAINER_INNER}>
            {!headerFound ? (
              <>
                <PanelHeaderDefault
                  onClose={defaultCloseCallback}
                />
                <div className={LIBRARY_CLASSES.CONTENT}>
                  {loading ? <PanelLoader theme={loaderTheme} /> : (
                    <div className={LIBRARY_CLASSES.CONTENT_INNER}>
                      {children}
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                {children}
              </>
            )}
          </div>
        </div>
        {overlay && open && renderOverlay()}
      </>
    );
  };

  if (renderPortal) {
    return portal ? (
      <Portal>
        {renderPanel()}
      </Portal>
    ): null;
  } else {
    return renderPanel();
  }
};

export const Panel = Object.assign(
  React.forwardRef(
    (props: PanelProps, ref: React.Ref<HTMLDivElement>): JSX.Element => {
      const { open, renderPortal } = props;

      const [openProp, ] = React.useState<boolean>(open);
      const [closing, setClosing] = React.useState<boolean>(false);
      const [openState, setOpenState] = React.useState<boolean>(false);

      const openPropPrev = usePreviousState(openProp);
      const openStatePrev = usePreviousState(openState);

      const handleDefaultCloseButtonCallback = (): void => {
        setClosing(true);
        setOpenState(false);
      };

      const handleCloseCompletedCallback = (): void => {
        setClosing(false);
      };

      /**
       * Handles preventing the panel from opening when renderPortal
       * prop is enabled. This check should only run on initial load.
       */
      React.useLayoutEffect(() => {
        if (renderPortal && !open && openPropPrev === undefined) {
          setOpenState(null);
        }
      }, [open, renderPortal, openPropPrev]);

      /**
       * Handles opening the panel when the external prop open is
       * set to true.
       */
      React.useLayoutEffect(() => {
        if (!closing && open && !openState && !openStatePrev) {
          setOpenState(true);
        }
      }, [closing, open, openState, openStatePrev]);


      React.useLayoutEffect(() => {

        /**
         * Check closes panel when open prop is set to false. This check
         * handles closing the panel when the user has opted to use the
         * Panel.Header compound component and because the default header
         * close button which is handled internally will not be used.
         */
        if (!open && openStatePrev !== undefined && openState) {
          setOpenState(false);
        }

      }, [open, openState, openStatePrev]);

      return (
        <PanelProvider controller={PanelController}>
          <PanelComponent
            {...props }
            openState={openState}
            forwardedRef={ref}
            data-testid={PANEL_TEST_ID}
            defaultCloseCallback={handleDefaultCloseButtonCallback}
            closeCompletedCallback={handleCloseCompletedCallback}
          />
        </PanelProvider>
      );
    }
  ),
  {
    Header: PanelHeader,
    Content: PanelContent
  }
);

export default Panel;
