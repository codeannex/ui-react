import * as React from "react";

import { getGuid } from "@utils/getGuid";

import { STATE_ACTION_TYPE, State, StateAction, StateReducerActionContext } from "../types";

export const FormStateContext = React.createContext<State>({
  preSubmit: "",
  submit: false,
  errors: {},
  touched: {},
  values: {},
});

export const FormStateActionContext = React.createContext<StateReducerActionContext>(
  () => undefined
);

export const useFormStateContext = (): State => {
  const context = React.useContext(FormStateContext);

  if (context == undefined) {
    throw new Error();
  }

  return context;
};

export const useFormStateActionContext = () => {
  const context = React.useContext(FormStateActionContext);

  if (context == undefined) {
    throw new Error();
  }

  return context;
};

export const formStateReducer = (state: State, action: StateAction) => {
  const { errors = {}, touched = {}, values = {} } = state;

  switch (action.type) {
    case STATE_ACTION_TYPE.SET_ERROR:
      return {
        ...state,
        errors: { ...errors, ...action.payload },
      };
    case STATE_ACTION_TYPE.SET_ERRORS:
      return {
        ...state,
        errors: { ...errors, ...action.payload },
      };
    case STATE_ACTION_TYPE.SET_TOUCHED:
      return {
        ...state,
        touched: { ...touched, ...action.payload },
      };
    case STATE_ACTION_TYPE.SET_SUBMIT:
      return {
        ...state,
        preSubmit: getGuid(),
      };
    case STATE_ACTION_TYPE.SET_VALID:
      return {
        ...state,
        submit: true,
      };
    case STATE_ACTION_TYPE.UPDATE_VALUE:
      return {
        ...state,
        values: { ...values, ...action.payload },
      };
    default:
      return state;
  }
};
