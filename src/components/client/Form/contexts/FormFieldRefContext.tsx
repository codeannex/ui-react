import * as React from "react";

import {
  FIELD_REF_ACTION_TYPE,
  FieldRefAction,
  FieldRefReducerActionContext,
  FieldRefState,
} from "../types";

export const FieldRefContext = React.createContext<FieldRefState>({});
export const FieldRefActionContext = React.createContext<FieldRefReducerActionContext>(
  () => undefined
);

export const useFormFieldRefContext = (): FieldRefState => {
  const context = React.useContext(FieldRefContext);

  if (context == undefined) {
    throw new Error();
  }

  return context;
};

export const useFormFieldRefActionContext = () => {
  const context = React.useContext(FieldRefActionContext);

  if (context == undefined) {
    throw new Error();
  }

  return context;
};

export const fieldRefsReducer = (state: FieldRefState, action: FieldRefAction) => {
  switch (action.type) {
    case FIELD_REF_ACTION_TYPE.REGISTER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
