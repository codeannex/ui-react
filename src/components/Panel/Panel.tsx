import * as React from 'react';
import classNames from 'classnames';

import { Portal } from '../Portal';

import { usePreviousState } from '../../hooks/usePreviousState';

import './Panel.scss';

export enum PanelClasses {

  /** Class hook for base panel styles */
  SHARED = 'panel__base',
}

export interface PanelProps {
  children: React.ReactElement;
  open?: boolean;
  position?: string;
  renderPortal?: boolean;

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
const _Panel = ({
  forwardedRef,
  children,
  open,
  renderPortal,
  onClose,
  onClosed,
  onOpen,
  onOpened
}: PanelProps & { forwardedRef: React.Ref<HTMLDivElement> }): JSX.Element => {

  const [isOpen, setIsOpen] = React.useState(false);
  const [portal, setPortal] = React.useState(false);

  const isOpenPrev: boolean = usePreviousState(isOpen);

  const classes = classNames('panel', isOpen && 'open');

  const onHandleClose = (): void => {
    onClose && onClose();

    setIsOpen(false);
  };

  const onHandleClosed = (): void => {
    onClosed && onClosed();
  };

  /**
   * Handles rendering the portal before opening the panel when the
   * renderPortal prop is defined.
   */
  React.useEffect(() => {
    if (open && renderPortal) {
      setPortal(true);
    }

  }, [open, renderPortal]);

  /**
   * Handles opening the panel and invokes the onOpen callback.
   */
  React.useEffect(() => {
    if (open && portal) {
      setTimeout(() => {
        setIsOpen(true);

        onOpen && onOpen();
      }, 200);
    }

    if (open && !renderPortal) {
      setIsOpen(true);

      onOpen && onOpen();
    }
  }, [open, renderPortal, portal]);

  /**
   * Handles state changes with the panel. Removes the portal from the DOM
   * after a timeout to allow the animation to complete and invokes the
   * onClosed callback or responds after the panel is opened to invoke the
   * onOpened callback.
   */
  React.useEffect(() => {
    if (!isOpen &&
      isOpen !== isOpenPrev &&
      isOpenPrev !== undefined) {

      setTimeout(() => {
        setPortal(false);

        onHandleClosed();
      }, 500);
    }

    if (isOpen && !isOpenPrev) {
      onOpened && onOpened();
    }
  }, [isOpen, isOpenPrev]);

  /**
   * Render content.
   */
  if (renderPortal) {
    return portal ? (
      <Portal>
        <div ref={forwardedRef} className={classes}>
          {children}

          <button onClick={onHandleClose}>Close</button>
        </div>
      </Portal>
    ): null;
  } else {
    return (
      <div ref={forwardedRef} className={classes}>
        {children}

        <button onClick={onHandleClose}>Close</button>
      </div>
    );
  }
};

export const Panel = React.forwardRef((
  props: PanelProps,
  ref: React.Ref<HTMLDivElement>
): JSX.Element => {
  return <_Panel { ...props } forwardedRef={ref} data-testid={PANEL_TEST_ID} />
});
