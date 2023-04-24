import * as React from "react";

import {
  FormStateActionContext,
  FormStateContext,
  FormStaticPropsContext,
  formStateReducer,
} from "@components/client/Form/index";

import { StaticProps } from "./types";

interface Props {
  children: React.ReactElement;
  staticProps?: StaticProps;
}

export const FormProvider: React.FC<Props> = ({ children, staticProps }) => {
  const [formState, setFormState] = React.useReducer(formStateReducer, {
    errors: {},
    formLoadComplete: false,
    preSubmit: "",
    postSubmit: false,
    submit: false,
    touched: {},
    values: {},
    validators: {},
  });

  const memoizedFormState = React.useMemo(() => {
    return formState;
  }, [formState]);

  const memoizedSetFormState = React.useMemo(() => {
    return setFormState;
  }, [setFormState]);

  return (
    <FormStaticPropsContext.Provider value={staticProps || {}}>
      <FormStateContext.Provider value={memoizedFormState}>
        <FormStateActionContext.Provider value={memoizedSetFormState}>
          {children}
        </FormStateActionContext.Provider>
      </FormStateContext.Provider>
    </FormStaticPropsContext.Provider>
  );
};
