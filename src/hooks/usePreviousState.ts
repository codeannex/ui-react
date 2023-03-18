import * as React from "react";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const usePreviousState = (value: any): any => {
  const ref = React.useRef<any>();

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default usePreviousState;
