import * as React from 'react';
import classNames from 'classnames';

import { Portal } from '../Portal';

import { usePanelController} from './usePanelController';

import {
  PanelHeaderDefault,
  PanelHeader,
  PanelHeaderProps,
  PanelContent,
  PanelContentProps
} from './components';

import { usePreviousState } from '../../hooks/usePreviousState';

import { getGuid } from '../../../utils';

import './Panel.scss';

/**
 * Creates a unique id which can be used by the Panel Controller to
 * manage multiple panels.
 */
const guid = (function (): string {
  return getGuid();
}());

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
  controller?: boolean;
  forwardedRef?: React.Ref<HTMLDivElement>;
  open: boolean;
  position?: string;
  renderPortal?: boolean;
  ZIndex?: number;

  // Lifecycle callbacks
  onClose?: () => void;
  onClosed?: () => void;
  onOpen?: () => void;
  onOpened?: () => void;
}

interface IPanel
  extends React.ForwardRefExoticComponent<
    PanelProps & React.RefAttributes<HTMLDivElement>
    > {
  Header: typeof PanelHeader;
  Content: typeof PanelContent;
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
  open,
  position,
  renderPortal,
  ZIndex,
  onClose,
  onClosed,
  onOpen,
  onOpened
}: PanelProps): JSX.Element => {
  const panelController = usePanelController();

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
   * Handles opening the panel and invokes the onOpen callback.
   */
  React.useEffect(() => {
    if (open) {
      controller && panelController.addPanel({ id: guid });

      portal && setTimeout(() => {
        onHandleOpen();
      }, 200);

      if (!renderPortal) {
        onHandleOpen();
      }
    }
  }, [open, renderPortal, portal, controller]);

  /**
   * Handles closing the panel when the external open property is
   * set to false.
   */
  React.useEffect(() => {
    if (!open && openPrev !== undefined &&
      openPrev !== false && guid) {

      setIsOpen(false);
      panelController.removePanel({ id: guid });
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
          ZIndex ? { zIndex: ZIndex } : null
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
