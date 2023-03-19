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
  autoFocus?: boolean;
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
 * @Codeannex UI React: Form Component
 *
 * A React form component. The form component and associated components follow
 * the principles found in Mozilla documentation which are linked below in the
 * tutorial tag.
 *
 * @description
 * Currently the form component/components take on a declarative approach, however
 * development of a use as hook option is underway.
 *
 * @tutorial
 * https://developer.mozilla.org/en-US/docs/Learn/Forms
 */
const _Form: React.FC<FormProps> = ({
  autoFocus,
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

  // TODO: !!! EXPERIMENTAL !!! develop futher as the API must be simple and useful.
  const { executePreSubmit, status } = usePreSubmit(onPreSubmit);

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

        /**
         * Auto focus enables the form to set focus on the first error found
         * in the form. If enabled the form determines field order based on
         * DOM position and maps the associated errors to the first field in
         * the DOM setting focus.
         */
        if (autoFocus) {
          /** Sorts field refs according to position in the DOM. **/
          const refs = new Map(
            [...Object.entries(fieldRefs)].sort((a, b) => {
              // @ts-ignore
              return a[1].current.compareDocumentPosition(b[1].current) &
                Node.DOCUMENT_POSITION_FOLLOWING
                ? -1
                : 1;
            })
          );

          /** Set focus on first error found **/
          // @ts-ignore
          for (let [key, value] of refs.entries()) {
            if (errors[key]) {
              value.current.focus();

              break;
            }
          }
        }
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
  }, [fieldRefs, preSubmit, submit]);

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
  autoFocus: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element),
  proxyRef: PropTypes.func,
  validateOnSubmitOnly: PropTypes.bool,

  /** Handlers */
  onChange: PropTypes.func,
  onPreSubmit: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  onValidate: PropTypes.func,
};
