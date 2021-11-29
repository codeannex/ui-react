import * as React from 'react';

export const usePreviousState = (value): any => {
  const ref = React.useRef();

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default usePreviousState;
