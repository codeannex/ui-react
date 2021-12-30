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
  position?: PanelPosition;
  classes?: string;
  expanse?: string;
  loaderTheme?: string;
  loading?: boolean;
  overlay?: boolean;
  renderPortal?: boolean;
  zindex?: number;
  controller?: boolean;

  // Lifecycle callbacks
  onClose?: () => void;
  onClosed?: () => void;
  onOpened?: () => void;
}

export const PANEL_TEST_ID = 'codeannex-panel-component';

/**
 * @Codeannex UI React: Panel Component
 *
 * Panel Component
 */
const PanelComponent = React.memo(({
  // Props
  children,
  classes,
  controller,
  expanse,
  loaderTheme,
  loading = false,
  overlay,
  position = PanelPosition.RIGHT,
  renderPortal,
  zindex,
  openState,

  // Functions
  onClose,
  onClosed,
  onOpened
}: PanelProps & { forwardedRef: React.Ref<HTMLElement> } & { openState: boolean }): JSX.Element => {
  let expanseValue = {};

  const containerRef = React.useRef(undefined);
  const openStateRef = React.useRef(undefined);
  const portalStateRef = React.useRef(undefined);

  /**
   * This group of values are only used when a PanelGroup exists.
   */
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

  const panelClasses = classNames(
    LIBRARY_CLASSES.CONTAINER,
    open && 'open',
    position && PanelClasses[position],
    classes
  );

  /**
   * Handles prop override of panel width or height. Whether it is a width or height
   * dependes on the position of the panel.
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

  /**
   * Handles firing the related callback based on the completion of the
   * animation, signaling whether the panel has finished opening or closing.
   */
  const animationEnd = React.useCallback(() => {
    openStateRef.current ? onHandleOpened() : onHandleClosed();
  }, [openStateRef]);

  /**
   * Functions for tracking state via ref
   */
  const setOpenStateRef = (openStateChange): void => {
    openStateRef.current = openStateChange;
  };

  const setPortalStateRef = (portalStateChange): void => {
    portalStateRef.current = portalStateChange;
  };

  /**
   * Handlers and lifecycle callbacks
   */
  const onHandleOpen = (): void => {
    setOpen(true);
  };

  const onHandleClose = (): void => {
    setOpen(false);
  };

  const onHandleOpened = (): void => {
    onOpened && onOpened();
  };

  const onHandleClosed = (): void => {
    if (portalStateRef.current) {
      setPortal(false);
      setPortalStateRef(false);
    }

    onClosed && onClosed();
  };

  /**
   * Use Effect 1
   *
   * Handles adding the zindex to the panel. The top and bottom panels
   * will be give a higher zindex precedence than the side panels.
   */
  React.useEffect(() => {
    if (!zIndex.panel) {

      /**
       * Adds zindex to a panel managed by the Panel Group.
       */
      if (controller && panelGroupHighestZIndex) {
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
       * Adds zindex to the panel based on zindex prop being explicitly
       * set. This will override the panels auto setting of zindex.
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
    panelGroupHighestZIndex,
    position,
    zIndex,
    zindex
  ]);

  /**
   * Use Effect 2
   *
   * Handles rendering the portal before opening the panel when renderPortal
   * prop is enabled and after zindex is calculated.
   */
  React.useEffect(() => {
    if (openState && zIndex.panel && renderPortal && !portal) {
      setPortal(true);
      setPortalStateRef(true);
    }
  }, [openState, portal, renderPortal, zIndex]);


  /**
   * Use Effect 3
   *
   * Handles opening the panel.
   */
  React.useEffect(() => {
    if (openState && !open) {

      /**
       * Adds a short delay to allow the portal to render before
       * opening the panel. This is done when renderPortal prop is set
       * and the portal has been created.
       */
      portal && setTimeout(() => {
        onHandleOpen();
      }, TIMEOUT.PORTAL_RENDER_DELAY);

      if (!renderPortal) {
        onHandleOpen();
      }

      /**
       * Adds the panel to the panel group when PanelGroup component has
       * been instantiated.
       */
      if (controller) {
        const found = panelGroupCount.find((panel: PanelCount) => {
          return panel.id === internalId;
        });

        !found && setPanelGroupCount([...panelGroupCount, {
          id: internalId
        }]);
      }

      /**
       * Adds the panel object to the panel controller.
       */
      panelController.addPanel({
        id: internalId,
        position: position,
        isChild: true
      });
    }
  }, [
    internalId,
    open,
    openState,
    panelController,
    panelGroupCount,
    portal,
    position,
    renderPortal
  ]);

  /**
   * Use Effect 4
   *
   * Handles closing the panel
   */
  React.useEffect(() => {
    if (!openState && open) {
      onHandleClose();

      /**
       * Removes the panel from the Panel Group when Panel Group is enabled.
       */
      if (controller) {
        const newPanelCountContext = panelGroupCount.filter((panel: PanelCount) => {
          return panel.id !== internalId;
        });

        setPanelGroupCount(newPanelCountContext);
      }

      /**
       * Removes the panel object from the panel controller.
       */
      panelController.removePanel({
        id: internalId,
        position: position,
        isChild: true
      });
    }
  }, [
    internalId,
    open,
    openState,
    panelGroupCount,
    portal,
    renderPortal
  ]);

  /**
   * Use Effect 5
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
   * Updates openStateRef so animationEnd callback has
   * access to the latest state change from openState.
   */
  React.useEffect(() => {
    setOpenStateRef(openState);
  }, [openState]);

  /**
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
  React.useEffect(() => {
    if (openState) {
      const panel = panelController.getPanel({ id: internalId });
    }
  }, [openState, panelController]);

  /**
   * Render content.
   */
   const renderOverlay = (): JSX.Element => {
    return (
      <Portal>
        <PanelOverlay
          visibility={openState}
          zindex={zIndex.overlay}

          onClick={onClose}
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
                  onClose={onClose}
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
}, (prevProps, nextProps) => {

  // Limits re-rendering the PanelComponent until the openState prop has been changed.
  return prevProps.openState !== nextProps.openState ||
    prevProps.loading !== nextProps.loading ? false : true;
});

export const Panel = Object.assign(
  React.forwardRef((
    props: PanelProps,
    ref: React.Ref<HTMLDivElement>
  ): JSX.Element => {
      const { open, onClose } = props;

      const [openState, setOpenState] = React.useState<boolean>(false);

      const openPrev = usePreviousState(open);

      const handleOnClose = (): void => {
        onClose && onClose();
      };

      React.useLayoutEffect(() => {
        if (open) {
          setOpenState(true);
        }
      }, [open]);

      React.useLayoutEffect(() => {
        if (!open && openPrev) {
          setOpenState(false);
        }
      }, [open, openPrev]);

      return (
        <PanelProvider controller={PanelController}>
          <PanelComponent
            { ...props }
            openState={openState}
            forwardedRef={ref}
            data-testid={PANEL_TEST_ID}
            onClose={handleOnClose}
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
