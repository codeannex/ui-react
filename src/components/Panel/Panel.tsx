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
}

export const PANEL_TEST_ID = 'codeannex-panel-component';

/**
 * @Codeannex UI React: Panel Component
 *
 * Panel Component
 */
const PanelComponent = React.memo(({
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
}: PanelProps): JSX.Element => {
  let expanseValue = {};

  const containerRef = React.useRef(undefined);
  const openStateRef = React.useRef(undefined);

  const [headerFound, setHeaderFound] = React.useState<boolean>(false);
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

  const animationEnd = React.useCallback(() => {
    openStateRef.current ? onHandleOpened() : onHandleClosed();
  }, [openStateRef]);

  /**
   * Handlers and lifecycle callbacks
   */
  const onHandleOpen = (): void => {
    setOpen(true);

    // panelController.addPanel({
    //   id: internalId,
    //   position: position,
    //   isChild: true
    // });
  };

  const onHandleClose = (): void => {
    setOpen(false);

    // panelController.addPanel({
    //   id: internalId,
    //   position: position,
    //   isChild: true
    // });
  };

  const onHandleOpened = (): void => {
    // code...
  };

  const onHandleClosed = (): void => {
    // code...
  };

  /**
   * Use Effect 1
   *
   * Handles adding the zindex to a panel. The top and bottom panels
   * will be give a higher precedence than the side panels.
   */
  React.useEffect(() => {
    if (!zIndex.panel) {

      /**
       * Adds zindex to a panel. This panel is not managed by the
       * Panel Group.
       */
      if (!zIndex.panel && !zindex) {
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
       if (!zIndex.panel && zindex) {
        setZindex({
          panel: zindex + 1,
          overlay: zindex
        });
      }
    }
  }, [openState, zIndex, zindex]);

  /**
   * Use Effect 2
   *
   * Handles rendering the portal before opening the panel when renderPortal
   * prop is enabled and after zindex is calculated.
   */
  React.useEffect(() => {
    if (openState && zIndex.panel && renderPortal && !portal) {
      setPortal(true);
    }
  }, [openState, portal, renderPortal, zIndex]);


  /**
   * Use Effect 3
   *
   * Handles opening the panel
   */
  React.useEffect(() => {
    if (openState && !open) {

      portal && setTimeout(() => {
        onHandleOpen();
      }, TIMEOUT.PORTAL_RENDER_DELAY);

      if (!renderPortal) {
        onHandleOpen();
      }
    }
  }, [open, openState, portal, renderPortal]);

  /**
   * Use Effect 4
   *
   * Handles closing the panel
   */
  React.useEffect(() => {
    if (!openState && open) {
      onHandleClose();

      portal && setTimeout(() => {
        setPortal(false);
      }, TIMEOUT.PANEL_CLOSED_DELAY);
    }
  }, [open, openState, portal, renderPortal]);

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

    return (): void => {
      containerRef.current.removeEventListener(CONSTANT.TRANSITION_END, animationEnd);
    }
  }, []);

  // console.log('RENDER panel =================');
  // console.log('openState ', openState);
  // console.log('RENDER panel =================');

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
  return prevProps.openState === nextProps.openState;
});

export const Panel = React.memo(Object.assign(
  React.forwardRef((
    props: PanelProps,
    ref: React.Ref<HTMLDivElement>
  ): JSX.Element => {
      const { open, onClose } = props;

      const [openState, setOpenState] = React.useState<boolean>(false);

      const openPrev = usePreviousState(open);

      // console.log('RENDER =================');
      // console.log('open ', open);
      // console.log('openState ', openState);
      // console.log('RENDER =================');

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
), ((prevProps, nextProps) => {
  // Limits re-rendering the Panel until the open prop has been changed.
  return prevProps.open === nextProps.open;
}));

export default Panel;
