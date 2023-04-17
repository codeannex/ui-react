import * as React from "react";

import { useFormStateActionContext, useFormStateContext } from "@components/client/Form/index";

import {
  Controls,
  GetValue,
  SetError,
  SetErrors,
  SetTouched,
  UnsetTouched,
  UpdateValue,
  _Controls,
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
    (field: GetValue) => {
      return _getValue({ values, field });
    },
    [values]
  );

  const getValues = React.useCallback(() => {
    return _getValues(values);
  }, [values]);

  const setError = ({ field, value }: SetError) => {
    _setError({ field, value, dispatch });
  };

  const setErrors = (errors: SetErrors) => {
    _setErrors({ errors, dispatch });
  };

  const setTouched = ({ field, value }: SetTouched) => {
    _setTouched({ field, value, dispatch });
  };

  const unsetTouched = ({ field, value }: UnsetTouched) => {
    _unsetTouched({ field, value, dispatch });
  };

  const updateValue = ({ field, value }: UpdateValue) => {
    _updateValue({ field, value, dispatch });
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
