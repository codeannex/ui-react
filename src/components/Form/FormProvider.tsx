import * as React from "react";

import {
  FieldRefActionContext,
  FieldRefContext,
  FormStateActionContext,
  FormStateContext,
  fieldRefsReducer,
  formStateReducer,
} from "@components/Form/index";

import "./types";

interface Props {
  children: React.ReactElement;
}

export const FormProvider: React.FC<Props> = ({ children }) => {
  const [fieldRefs, registerFieldRef] = React.useReducer(fieldRefsReducer, {});
  const [formState, setFormState] = React.useReducer(formStateReducer, {
    preSubmit: "",
    submit: false,
    postSubmit: false,
    errors: {},
    touched: {},
    values: {},
  });

  const memoizedFieldRefs = React.useMemo(() => {
    return fieldRefs;
  }, [fieldRefs]);

  const memoizedregisterFieldRef = React.useMemo(() => {
    return registerFieldRef;
  }, [registerFieldRef]);

  const memoizedFormState = React.useMemo(() => {
    return formState;
  }, [formState]);

  const memoizedSetFormState = React.useMemo(() => {
    return setFormState;
  }, [setFormState]);

  return (
    <FieldRefContext.Provider value={memoizedFieldRefs}>
      <FieldRefActionContext.Provider value={memoizedregisterFieldRef}>
        <FormStateContext.Provider value={memoizedFormState}>
          <FormStateActionContext.Provider value={memoizedSetFormState}>
            {children}
          </FormStateActionContext.Provider>
        </FormStateContext.Provider>
      </FieldRefActionContext.Provider>
    </FieldRefContext.Provider>
  );
};
