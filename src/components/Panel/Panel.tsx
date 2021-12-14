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
const PanelComponent = ({
  children,
  controllerId,
  open,
  overlay,
  position,
  renderPortal,
  zindex,

  onClose,
  onClosed,
  onOpen,
  onOpened
}: PanelProps): JSX.Element => {
  const panelGroupUsed = panelGroupContext();

  /**
   * This group of values are only used when a PanelGroup exists.
   */
  const panelGroupCount = panelGroupCountContext();
  const setPanelGroupCount = panelGroupCountActionsContext();
  const panelGroupHighestZIndex = panelGroupHighestZIndexContext();

  const [headerFound, setHeaderFound] = React.useState<boolean>(false);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [portal, setPortal] = React.useState<boolean>(false);
  const [zIndex, setZindex] = React.useState<ZIndex>({
    panel: null,
    overlay: null
  });

  const openPrev: boolean = usePreviousState(open);
  const isOpenPrev: boolean = usePreviousState(isOpen);

  const classes = classNames(
    LIBRARY_CLASSES.CONTAINER,
    isOpen && 'open',
    position && PanelClasses[position]
  );

  /**
   * Handlers
   */
  const onHandleOpen = (): void => {
    setIsOpen(true);

    onOpen && onOpen();
  };

  const onHandleOpened = (): void => {
    onOpened && onOpened();
  };

  const onHandleClose = (): void => {
    setIsOpen(false);

    onClose && onClose();
  };

  const onHandleClosed = (): void => {
    onClosed && onClosed();
  };

  /**
   * Handles adding the zindex to a panel managed by the Group Panel
   * component. The top and bottom panels will be give a higher
   * precedence than the side panels.
   *
   * TODO: offer and override to switch the precedence.
   */
  React.useEffect(() => {
    if (controllerId && panelGroupUsed && panelGroupHighestZIndex) {
      position === PanelPosition.TOP || position === PanelPosition.BOTTOM ?
        setZindex({ ...zIndex, panel: panelGroupHighestZIndex + 2 }) :
        setZindex({ ...zIndex, panel: panelGroupHighestZIndex + 1 });
    }

    if (!controllerId && !zIndex.panel) {
      const { zIndexPanel, zIndexOverlay } = getZIndexValues(zindex, overlay);

      setZindex({
        panel: zIndexPanel,
        overlay: zIndexOverlay
      });
    }


  }, [
    controllerId,
    panelGroupUsed,
    panelGroupHighestZIndex,
    position
  ]);

  /**
   * Handles rendering the portal before opening the panel when renderPortal
   * prop is defined and zindex is calculated.
   * Handles closing the panel if the open prop is externally changed
   * to false.
   */
  React.useEffect(() => {
    if (zIndex.panel && !portal && open && renderPortal) {
      setPortal(true);
    }
  }, [
    open,
    openPrev,
    portal,
    renderPortal,
    zIndex
  ]);

  /**
   * Handles opening the panel
   * Handles invoking the onOpen callback.
   * Handles adding the panel to the panel count context.
   */
  React.useEffect(() => {
    if (open) {
      portal && setTimeout(() => {
        onHandleOpen();
      }, 200);

      if (!renderPortal) {
        onHandleOpen();
      }

      // ensured to fire for one render.
      if (!openPrev) {
        panelGroupUsed && setPanelGroupCount([...panelGroupCount, {
          id: controllerId
        }]);
      }
    }
  }, [open, openPrev, renderPortal, portal, panelGroupUsed]);

  /**
   * Handles closing the panel when the external open property is
   * set to false.
   */
  React.useEffect(() => {
    if (!open && openPrev !== undefined &&
      openPrev !== false) {

      setIsOpen(false);

      if (panelGroupUsed) {
        const newPanelCountContext = panelGroupCount.filter((panel: PanelCount) => {
          return panel.id !== controllerId;
        });

        panelGroupUsed && setPanelGroupCount(newPanelCountContext);
      }
    }
  }, [open, openPrev, panelGroupUsed, controllerId]);

  /**
   * Handles removing the portal from the DOM after allowing the
   * animation to complete.
   * Handles invoking the onClosed callback.
   * Handles the onOpened callback.
   */
  React.useEffect(() => {
    if (!isOpen &&
      isOpen !== isOpenPrev &&
      isOpenPrev !== undefined) {

      portal && setTimeout(() => {
        setPortal(false);

        onHandleClosed();
      }, 500);
    }

    if (isOpen && !isOpenPrev) {
      onHandleOpened();
    }
  }, [isOpen, isOpenPrev]);

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
          visibility={open}
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
                onClose={onHandleClose}
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
      return (
        <PanelComponent
          {...props}
          forwardedRef={ref}
          data-testid={PANEL_TEST_ID}
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
