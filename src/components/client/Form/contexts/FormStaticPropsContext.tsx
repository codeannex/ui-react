import * as React from "react";

export const FormStaticPropsContext = React.createContext({});

export const useStaticPropsContext = (): any => {
  const context = React.useContext(FormStaticPropsContext);

  if (context == undefined) {
    throw new Error();
  }

  return context;
};
