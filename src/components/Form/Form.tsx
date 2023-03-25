import * as React from "react";

import PropTypes from "prop-types";

import {
  FormProvider,
  hasError,
  sanitizeErrors,
  sanitizeTouched,
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
  /**
   * Enables auto focus to be set on the first form field in DOM order
   * containing an error following form submission.
   */
  autoFocus?: boolean;
  children: React.ReactNode;

  /**
   * Allows a reference to be set externally containing form state and
   * controls giving the caller components access to make modifications
   * to state and respond to changes.
   */
  proxyRef: (ref: FormRef) => void;

  /**
   * Disallows the occurrence of validation when form state changes are
   * detected which typically happens subsequent to any change event, and
   * restricts validation to occur only during form submission.
   */
  validateOnSubmitOnly?: boolean;

  /** Hanlders **/

  /**
   * Called upon any change event passing the updated form state as
   * a paramter.
   */
  onChange?: (values: Values) => void;

  /**
   * Called upon form submission.
   *
   * TODO: Incomplete
   */
  onPreSubmit?: (values: Values) => void;

  /**
   * Called subsequent to a successful form submission. The means validation
   * was passed and the submission of the form completed.
   */
  onPostSubmit?: (ref: FormRef) => void;

  /**
   * Called upon form submission.
   */
  onSubmit: (values: Values) => void;

  /**
   * Called upon any change event passing the updated form state as
   * a paramter. The form state can be used to validate any field. A
   * return object must contain either `undefined` or a `string value`
   * of the validation error rendered with the form field.
   */
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
 * @rules
 * https://developer.mozilla.org/en-US/docs/Learn/Forms
 *
 */
const _Form: React.FC<FormProps> = ({
  autoFocus,
  children,
  proxyRef,
  validateOnSubmitOnly,

  onChange,
  onPreSubmit,
  onPostSubmit,
  onSubmit,
  onValidate,
}): JSX.Element => {
  const state = useFormStateContext();
  const displatch = useFormStateActionContext();

  const fieldRefs = useFormFieldRefContext();

  // TODO: !!! EXPERIMENTAL !!! develop futher as the API must be simple and useful.
  const { executePreSubmit, status } = usePreSubmit(onPreSubmit);

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

  const { preSubmit, submit, postSubmit, values = {} } = state;

  /**
   * Set and update external ref.
   */
  React.useEffect(() => {
    proxyRef && isFunction(proxyRef) && proxyRef({ controls, state });
  }, [state]);

  /**
   * Handles validation during change events triggered by user input
   * field changes. The process is triggered by state changes occurring
   * with the `values` form state object. The prop validation function must
   * return the expected object and key values to update the form state
   * `errors` object.
   *
   * If validateOnSubmitOnly is enabled and validation
   * fails during pre-submit, error handlding will take place until
   * errors are cleared and pr-submit is successful.
   *
   */
  React.useEffect(() => {
    const validationErrors = (onValidate && onValidate(values)) || {};

    if (Object.keys(fieldRefs).length) {
      const { errors } = sanitizeErrors(validationErrors, fieldRefs);

      /**
       * Handles validation before pre-submit
       */
      if (!validateOnSubmitOnly && !preSubmit && Object.entries(errors).length) {
        displatch({
          type: STATE_ACTION_TYPE.SET_ERRORS,
          payload: errors,
        });
      }

      /**
       * Handles validation after pre-submit
       */
      if (preSubmit && !submit && Object.entries(errors).length) {
        displatch({
          type: STATE_ACTION_TYPE.SET_ERRORS,
          payload: errors,
        });
      }
    }
  }, [preSubmit, submit, values, validateOnSubmitOnly, fieldRefs]);

  /**
   * Handles calling prop onChange function. The process is
   * triggered by state changes occurring with the `values`
   * form state object.
   */
  useUpdateEffect(() => {
    onChange && onChange(values);
  }, [values]);

  /**
   * Handles validation during form submission and is triggerd by
   * user selecting the submit button.
   */
  useUpdateEffect(() => {
    if (preSubmit && !submit) {
      const validationErrors = (onValidate && onValidate(values)) || {};

      const { touched } = sanitizeTouched(validationErrors, fieldRefs);
      const { errors } = sanitizeErrors(validationErrors, fieldRefs);

      const errorCount = hasError(errors);

      /** Executes after pre-submit **/
      if (errorCount) {
        displatch({
          type: STATE_ACTION_TYPE.SET_ERRORS,
          payload: errors,
        });

        displatch({
          type: STATE_ACTION_TYPE.SET_TOUCHED,
          payload: touched,
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
          for (const [key, value] of refs.entries()) {
            if (errors[key]) {
              value.current.focus();

              break;
            }
          }
        }
      } else {
        displatch({
          type: STATE_ACTION_TYPE.SET_SUBMIT,
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
    if (submit && !postSubmit) {
      onSubmit(values);

      displatch({
        type: STATE_ACTION_TYPE.SET_POST_SUBMIT,
        payload: null,
      });
    }
  }, [onSubmit, submit, postSubmit]);

  /**
   * Handles post submission.
   */
  useUpdateEffect(() => {
    if (postSubmit) {
      onPostSubmit && isFunction(onPostSubmit) && onPostSubmit({ controls, state });

      displatch({
        type: STATE_ACTION_TYPE.RESET_FORM_STATE,
        payload: null,
      });
    }
  }, [postSubmit]);

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
  children: PropTypes.node,
  proxyRef: PropTypes.func.isRequired,
  validateOnSubmitOnly: PropTypes.bool,

  /** Handlers */
  onChange: PropTypes.func,
  onPreSubmit: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  onValidate: PropTypes.func,
};
