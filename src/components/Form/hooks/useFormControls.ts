import * as React from "react";

import { useFormStateActionContext, useFormStateContext } from "@components/Form/index";

import {
  Controls,
  GetValue,
  SetError,
  SetErrors,
  SetTouched,
  UnsetTouched,
  UpdateValue,
  _Controls,
  _SetError,
  _SetErrors,
  _SetTouched,
  _Submit,
} from "../types";

export const useFormControls = ({
  _getValue,
  _getValues,
  _setTouched,
  _unsetTouched,
  _updateValue,
  _setError,
  _setErrors,
  _submit,
}: _Controls): Controls => {
  const controls = React.useRef<any>();

  const { values = {} } = useFormStateContext();

  const dispatch = useFormStateActionContext();

  const getValue = React.useCallback(
    (fieldName: GetValue) => {
      return _getValue({ values, fieldName });
    },
    [values]
  );

  const getValues = React.useCallback(() => {
    return _getValues(values);
  }, [values]);

  const setError = ({ fieldName, value }: SetError) => {
    _setError({ fieldName, value, dispatch });
  };

  const setErrors = (errors: SetErrors) => {
    _setErrors({ errors, dispatch });
  };

  const setTouched = ({ fieldName, value }: SetTouched) => {
    _setTouched({ fieldName, value, dispatch });
  };

  const unsetTouched = ({ fieldName, value }: UnsetTouched) => {
    _unsetTouched({ fieldName, value, dispatch });
  };

  const updateValue = ({ fieldName, value }: UpdateValue) => {
    _updateValue({ fieldName, value, dispatch });
  };

  const submit = () => {
    _submit({ dispatch });
  };

  controls.current = {
    getValue,
    getValues,
    setError,
    setErrors,
    setTouched,
    submit,
    unsetTouched,
    updateValue,
  };

  return { ...controls?.current };
};
