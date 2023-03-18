import * as React from "react";

const setRef = <T>(ref: React.Ref<T>, value: T | null): any => {
  if (typeof ref === "function") {
    ref(value);

    return;
  }

  (ref as React.MutableRefObject<any>).current = value;
};

export const useMergeRefs = <T>(...refs: React.Ref<T>[]): any => {
  return React.useMemo(() => {
    const filteredRefs = refs.filter(Boolean);

    if (filteredRefs.length === 0) {
      return null;
    }

    if (filteredRefs.length === 1) {
      return filteredRefs[0];
    }

    return (value: T): any => {
      filteredRefs.forEach((ref) => {
        setRef(ref, value);
      });
    };
  }, [refs]);
};

export default useMergeRefs;
