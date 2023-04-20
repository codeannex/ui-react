import * as React from "react";

import { getGuid } from "@utils/getGuid";

import { STATE_ACTION_TYPE, State, StateAction, StateReducerActionContext } from "../types";

export const DEFAULT_FORM_STATE = {
  preSubmit: "",
  submit: false,
  postSubmit: false,
  errors: {},
  touched: {},
  values: {},
  validators: {},
};

export const FormStateContext = React.createContext<State>(DEFAULT_FORM_STATE);

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
  const { errors = {}, touched = {}, values = {}, validators = {} } = state;

  switch (action.type) {
    case STATE_ACTION_TYPE.SET_ERROR:
      return {
        ...state,
        errors: values[Object.keys(action.payload)[0]]
          ? { ...errors }
          : { ...errors, ...action.payload },
        touched: values[Object.keys(action.payload)[0]]
          ? { ...touched }
          : { ...touched, ...{ [Object.keys(action.payload)[0]]: true } },
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
    case STATE_ACTION_TYPE.SET_PRE_SUBMIT:
      return {
        ...state,
        preSubmit: getGuid(),
      };
    case STATE_ACTION_TYPE.SET_SUBMIT:
      return {
        ...state,
        submit: true,
      };
    case STATE_ACTION_TYPE.SET_POST_SUBMIT:
      return {
        ...state,
        postSubmit: true,
      };
    case STATE_ACTION_TYPE.SET_VALIDATORS:
      return {
        ...state,
        validators: { ...validators, ...action.payload },
      };
    case STATE_ACTION_TYPE.UPDATE_VALUE:
      return {
        ...state,
        values: { ...values, ...action.payload },
      };
    case STATE_ACTION_TYPE.RESET_FORM_STATE:
      return {
        ...DEFAULT_FORM_STATE,
      };
    default:
      return state;
  }
};
