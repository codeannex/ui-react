import * as React from "react";

export const FieldRefsContext = React.createContext(undefined);

export const useFieldRefsContext = (): any => {
  const context = React.useContext(FieldRefsContext);

  if (context == undefined) {
    throw new Error();
  }

  return context;
};
