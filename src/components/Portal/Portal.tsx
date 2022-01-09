import * as React from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  children: React.ReactElement;
  parentId?: string;
}

export const Portal = ({
  children,
  parentId
}: PortalProps): React.ReactElement => {

  let ref = React.useRef(
    parentId ?
      document.getElementById(parentId) :
      document.createElement('div')
  );

  React.useEffect((): VoidFunction => {
    return (): void => {
      if (!parentId && ref.current) {
        document.body.removeChild(ref.current);
      }

      ref = null;
    };
  }, []);

  React.useEffect(() => {
    if (!parentId && ref.current) {
      document.body.appendChild(ref.current);
    }
  }, [ref, parentId]);

  return createPortal(children, ref.current);
};

export default Portal;
