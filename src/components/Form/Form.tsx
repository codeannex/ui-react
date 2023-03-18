import * as React from "react";

import PropTypes from "prop-types";

import {
  FormProvider,
  hasError,
  useFormControls,
  useFormFieldRefContext,
  useFormStateActionContext,
  useFormStateContext,
  usePreSubmit,
} from "@components/Form/index";

import { isFunction } from "@utils/index";

import { useUpdateEffect } from "@hooks/index";

import {
  _getValue,
  _getValues,
  _setError,
  _setErrors,
  _setTouched,
  _submit,
  _unsetTouched,
  _updateValue,
} from "./controls";
import { Errors, FormRef, STATE_ACTION_TYPE, Values } from "./types";

type FormProps = {
  children: React.ReactNode;

  proxyRef?: (ref: FormRef) => void;
  validateOnSubmitOnly?: boolean;

  /**
   * Hanlders
   */
  onChange?: (values: Values) => void;
  onPreSubmit?: (values: Values) => void;
  onSubmit: (values: Values) => void;
  onValidate?: (values: Values) => Errors;
};

/**
 *
 * @tutorial
 * https://developer.mozilla.org/en-US/docs/Learn/Forms
 */
const _Form: React.FC<FormProps> = ({
  children,
  proxyRef,
  validateOnSubmitOnly,

  onChange,
  onPreSubmit,
  onSubmit,
  onValidate,
}): JSX.Element => {
  const state = useFormStateContext();
  const displatch = useFormStateActionContext();

  const { executePreSubmit, status } = usePreSubmit(onPreSubmit);

  // TODO: develop validation focus logic
  const fieldRefs = useFormFieldRefContext();

  const controls = useFormControls({
    _getValue,
    _getValues,
    _setError,
    _setErrors,
    _setTouched,
    _submit,
    _unsetTouched,
    _updateValue,
  });

  const { preSubmit, submit, values = {} } = state;

  /**
   * Set and update external ref.
   */
  React.useEffect(() => {
    proxyRef && isFunction(proxyRef) && proxyRef({ controls, state });
  }, [state]);

  /**
   * Handles validation calling prop validation function. The prop
   * validation function must return the expected object and key
   * values to update the form state `errors` object. The process
   * is triggered by state changes occurring with the `values` form
   * state object. If validateOnSubmitOnly is enabled and validation
   * fails during pre-submit, error handlding will take place until
   * errors are cleared and pr-submit is successful.
   */
  React.useEffect(() => {
    const errors = (onValidate && onValidate(values)) || {};

    if (!validateOnSubmitOnly && Object.entries(errors).length) {
      displatch({
        type: STATE_ACTION_TYPE.SET_ERRORS,
        payload: errors,
      });
    }

    /** Executes after pre-submit **/
    if (preSubmit && !submit && Object.entries(errors).length) {
      displatch({
        type: STATE_ACTION_TYPE.SET_ERRORS,
        payload: errors,
      });
    }
  }, [preSubmit, submit, values, validateOnSubmitOnly]);

  /**
   * Handles calling prop onChange function. The process is
   * triggered by state changes occurring with the `values`
   * form state object.
   */
  useUpdateEffect(() => {
    onChange && onChange(values);
  }, [values]);

  console.log(fieldRefs);

  /**
   * Handles pre-submission logic, including validation during
   * preSubmit.
   */
  useUpdateEffect(() => {
    if (preSubmit && !submit) {
      const errors = (onValidate && onValidate(values)) || {};

      const errorCount = hasError(errors);

      /** Executes after pre-submit **/
      if (errorCount) {
        displatch({
          type: STATE_ACTION_TYPE.SET_ERRORS,
          payload: errors,
        });

        displatch({
          type: STATE_ACTION_TYPE.SET_TOUCHED,
          payload: errors,
        });
      } else {
        displatch({
          type: STATE_ACTION_TYPE.SET_VALID,
          payload: null,
        });

        if (onPreSubmit) {
          executePreSubmit();
        }
      }
    }
  }, [preSubmit, submit]);

  /**
   * Handles form submission.
   */
  useUpdateEffect(() => {
    if (submit) {
      onSubmit(values);
    }
  }, [onSubmit, submit]);

  return <form>{children}</form>;
};

export const Form: React.FC<FormProps> = (props) => {
  return (
    <FormProvider>
      <_Form {...props} />
    </FormProvider>
  );
};

Form.propTypes = {
  proxyRef: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
};
