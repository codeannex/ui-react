import * as React from "react";

export const usePreSubmit = (asyncFn: any) => {
  const [status, setStatus] = React.useState<boolean | null>(null);

  const executePreSubmit = React.useCallback(() => {
    setStatus(null);

    return asyncFn()
      .then(() => {
        setStatus(true);
      })
      .catch(() => {
        setStatus(false);
      });
  }, [asyncFn]);

  return { executePreSubmit, status };
};

export default usePreSubmit;
