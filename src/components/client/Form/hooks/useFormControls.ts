import * as React from "react";

import {
  STATE_ACTION_TYPE,
  useFieldRefsContext,
  useFormStateActionContext,
  useFormStateContext,
} from "@components/client/Form/index";

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

  const { values = {}, touched = {} } = useFormStateContext();

  const fieldRefsCtr = useFieldRefsContext();
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

  /** register inputs **/

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e?.target.value;
    const fieldName = e?.target.name;

    dispatch({
      type: STATE_ACTION_TYPE.UPDATE_VALUE,
      payload: {
        [fieldName]: value,
      },
    });
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e?.target.name;

    if (!touched[fieldName]) {
      dispatch({
        type: STATE_ACTION_TYPE.SET_TOUCHED,
        payload: {
          [fieldName]: true,
        },
      });
    }
  };

  const register = (fieldName: string): any => {
    fieldRefsCtr.operationalSet(fieldName, ({ item, setter }: any) => {
      if (!item) {
        setter(fieldName, {
          [fieldName]: {
            _field: {
              ref: null,
              name: fieldName,
            },
          },
        });
      }
    });

    return {
      name: fieldName,
      value: values[fieldName || ""] as string,
      ref: (ref: any): void => {
        register(fieldName);

        fieldRefsCtr.operationalSet(fieldName, ({ item, setter, publisher }: any) => {
          if (item[fieldName]._field.ref === null) {
            setter(fieldName, {
              [fieldName]: {
                _field: {
                  ref: ref,
                  name: fieldName,
                },
              },
            });

            publisher("register", item);
          }
        });
      },

      // Methods.
      onChange: handleChange,
      onBlur: handleBlur,
    };
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
    register,
  };

  return { ...controls?.current };
};
