import * as React from "react";

import {
  FieldRefActionContext,
  FieldRefContext,
  FormStateActionContext,
  FormStateContext,
  FormStaticPropsContext,
  fieldRefsReducer,
  formStateReducer,
} from "@components/client/Form/index";

import { StaticProps } from "./types";

interface Props {
  children: React.ReactElement;
  staticProps?: StaticProps;
}

export const FormProvider: React.FC<Props> = ({ children, staticProps }) => {
  const [fieldRefs, registerFieldRef] = React.useReducer(fieldRefsReducer, {});
  const [formState, setFormState] = React.useReducer(formStateReducer, {
    preSubmit: "",
    submit: false,
    postSubmit: false,
    errors: {},
    touched: {},
    values: {},
  });

  const memoizedStaticProps = React.useMemo(() => {
    return staticProps;
  }, [staticProps]);

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
    <FormStaticPropsContext.Provider value={memoizedStaticProps || {}}>
      <FieldRefContext.Provider value={memoizedFieldRefs}>
        <FieldRefActionContext.Provider value={memoizedregisterFieldRef}>
          <FormStateContext.Provider value={memoizedFormState}>
            <FormStateActionContext.Provider value={memoizedSetFormState}>
              {children}
            </FormStateActionContext.Provider>
          </FormStateContext.Provider>
        </FieldRefActionContext.Provider>
      </FieldRefContext.Provider>
    </FormStaticPropsContext.Provider>
  );
};
