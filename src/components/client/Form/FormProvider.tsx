import * as React from "react";

import {
  FieldRefsContext,
  FormStateActionContext,
  FormStateContext,
  FormStaticPropsContext,
  formStateReducer,
} from "@components/client/Form/index";

import { StaticProps } from "./types";

interface Props {
  children: React.ReactElement;
  staticProps?: StaticProps;
  fieldRefController: any;
}

export const FormProvider: React.FC<Props> = ({ children, staticProps, fieldRefController }) => {
  const [formState, setFormState] = React.useReducer(formStateReducer, {
    preSubmit: "",
    submit: false,
    postSubmit: false,
    errors: {},
    touched: {},
    validators: {},
    values: {},
  });

  const memoizedStaticProps = React.useMemo(() => {
    return staticProps;
  }, [staticProps]);

  const memoizedFormState = React.useMemo(() => {
    return formState;
  }, [formState]);

  const memoizedSetFormState = React.useMemo(() => {
    return setFormState;
  }, [setFormState]);

  return (
    <FormStaticPropsContext.Provider value={memoizedStaticProps || {}}>
      <FieldRefsContext.Provider value={fieldRefController}>
        <FormStateContext.Provider value={memoizedFormState}>
          <FormStateActionContext.Provider value={memoizedSetFormState}>
            {children}
          </FormStateActionContext.Provider>
        </FormStateContext.Provider>
      </FieldRefsContext.Provider>
    </FormStaticPropsContext.Provider>
  );
};
