import { DependencyList, EffectCallback, useEffect } from "react";

import { useIsFirstRender } from "@hooks/index";

export const useUpdateEffect = (effect: EffectCallback, deps?: DependencyList) => {
  const isFirst = useIsFirstRender();

  useEffect(() => {
    !isFirst && effect();
  }, deps);
};

export default useUpdateEffect;
