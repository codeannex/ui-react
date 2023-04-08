import * as React from "react";

import { useIsFirstRender } from "@hooks/index";

export const useUpdateEffect = (effect: React.EffectCallback, deps?: React.DependencyList) => {
  const isFirst = useIsFirstRender();

  React.useEffect(() => {
    !isFirst && effect();
  }, deps);
};

export default useUpdateEffect;
