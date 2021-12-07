import * as React from 'react';
import classNames from 'classnames';

import { Portal } from '../Portal';

import {
  panelHighestZIndexContext,
  panelCountContext,
  panelCountActionsContext
} from './PanelContext';

import {
  PanelHeaderDefault,
  PanelHeader,
  PanelHeaderProps,
  PanelContent,
  PanelContentProps
} from './components';

import { usePreviousState } from '../../hooks/usePreviousState';

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

interface PanelPropsComposition  {
  Header?: React.FC<PanelHeaderProps>;
  Content?: React.FC<PanelContentProps>;
}

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement>, PanelPropsComposition {
  forwardedRef?: React.Ref<HTMLDivElement>;
  controller?: boolean;
  id?: string;
  open: boolean;
  position?: string;
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
  controller,
  id,
  open,
  position,
  renderPortal,
  zindex,
  onClose,
  onClosed,
  onOpen,
  onOpened
}: PanelProps): JSX.Element => {
  const panelCount = panelCountContext();
  const setPanelCount = panelCountActionsContext();
  const panelHighestZIndex = panelHighestZIndexContext();

  const [headerFound, setHeaderFound] = React.useState<boolean>(false);

  const [isOpen, setIsOpen] = React.useState(false);
  const [portal, setPortal] = React.useState(false);

  const openPrev: boolean = usePreviousState(open);
  const isOpenPrev: boolean = usePreviousState(isOpen);

  const classes = classNames(
    LIBRARY_CLASSES.CONTAINER,
    isOpen && 'open',
    position && PanelClasses[position]
  );

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

  React.useEffect(() => {
    if (panelHighestZIndex) {
      // TODO apply updates zindex
    }
  }, [panelHighestZIndex]);

  /**
   * Handles rendering the portal before opening the panel when
   * renderPortal prop is defined and closing the panel if the
   * open prop is externally changed to false.
   */
  React.useEffect(() => {
    if (open && renderPortal) {
      setPortal(true);
    }
  }, [open, openPrev, renderPortal]);

  /**
   * Handles opening the panel
   * Handles invoking the onOpen callback.
   * Handles added the panel to the panel count context.
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
        controller && setPanelCount([...panelCount, { id: id }]);
      }
    }
  }, [open, openPrev, renderPortal, portal, controller]);

  /**
   * Handles closing the panel when the external open property is
   * set to false.
   */
  React.useEffect(() => {
    if (!open && openPrev !== undefined &&
      openPrev !== false && id) {

      setIsOpen(false);

      if (controller) {
        const newPanelCountContext = panelCount.filter((panel: any) => {
          return panel.id !== id;
        });

        setPanelCount(newPanelCountContext);
      }
    }
  }, [open, openPrev, controller]);

  /**
   * Handles removing the portal from the DOM after allowing the
   * animation to complete and invokes the onClosed callback.
   *
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

  /**
   * Render content.
   */
  const renderContent = (): JSX.Element => {
    return (
      <div
        className={classes}
        style={
          zindex ? { zIndex: zindex } : null
        }>
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
