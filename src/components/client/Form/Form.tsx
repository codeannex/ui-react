import * as React from "react";

import PropTypes from "prop-types";

import {
  Control,
  ControlProps,
  FieldRefState,
  FormProvider,
  entriesToFieldRefs,
  hasError,
  sanitizeTouched,
  sanitizeValidators,
  useFieldRefsContext,
  useFormControls,
  useFormStateActionContext,
  useFormStateContext,
  usePreSubmit,
} from "@components/client/Form/index";

import { Store, deepEqual, isFunction } from "@utils/index";

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
import { Errors, FormRef, STATE_ACTION_TYPE, StaticProps, Values } from "./types";

export interface FormPropComposition {
  Controller?: React.FC<ControlProps>;
}

export interface FormProps extends FormPropComposition {
  /**
   * Enables auto focus to be set on the first form field in DOM order
   * containing an error following form submission.
   */
  autoFocus?: boolean;

  /**
   * React child node/nodes.
   */
  children: React.ReactNode;

  /**
   * Sets CSS class/classes on the ALL the `Error` components for
   * styling.
   */
  classesError?: string | string[];

  /**
   * Sets CSS class/classes on the ALL the `Field` components for
   * styling.
   */
  classesField?: string | string[];

  /**
   * Sets a reference externally containing form state and controls
   * giving the caller components access to make modifications to
   * state and respond to changes.
   */
  formRef: (ref: FormRef) => void;

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
  onPostSubmit?: (values: Values) => void;

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
}

/**
 * @Codeannex UI React: Form Component
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
 * @validation
 * Validation process:
 *
 * 1. Form component immediately checks for the existence of validators. Validators
 * are set to the internal form state. User interactions are tracked and checked
 * against the conditions defined within the validators. Anytime a field is
 * determined to be `invalid`, the validator is updated expressing the change of
 * state and the process of adding an error to the forms error object is
 * permissible.
 *
 * 2. Form component will only add the error to form state if the field associated
 * validator indicates the field is `invalid`, and if the fields `touched' state
 * has been set to true. The form constantly tracks these updates and anytime these
 * two conditions are met for validation enabled fields, the error object is
 * added to form state allowing the form field to display the associated error.
 *
 * Exception:
 * Validation differs slightly when validateOnSubmitOnly is enabled. Although the
 * process is the same, the form does not check for validators when the form loads.
 * Instead it performs the above process only after form submission occurs and
 * executes the sequence of checks during the forms presubmit phase.
 */
const _Form: React.FC<FormProps> = ({
  autoFocus,
  children,
  formRef,
  validateOnSubmitOnly,

  onChange,
  onPreSubmit,
  onPostSubmit,
  onSubmit,
  onValidate,
}): JSX.Element => {
  const state = useFormStateContext();
  const displatch = useFormStateActionContext();

  /** Field refs controller **/
  const fieldRefsCtr = useFieldRefsContext();
  const fieldRefs = fieldRefsCtr.mapEntries((entries: IterableIterator<[string, unknown]>) => {
    return fieldRefsCtr.rawDate().size ? entriesToFieldRefs(entries) : {};
  });

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

  const {
    preSubmit,
    submit,
    postSubmit,
    values = {},
    validators = {},
    touched = {},
    errors = {},
  } = state;

  const [cachedPreSubmitId, setCachedPreSubmitId] = React.useState<any>("");

  /**
   * Set and update external ref.
   */
  React.useEffect(() => {
    formRef && isFunction(formRef) && formRef({ controls, state });
  }, [state]);

  /**
   * @name Validator_Tracker
   *
   * Handles validation when validateOnSubmitOnly is enabled.
   * Validators are tracked in the validator object and updated
   * when a field is identified as invalid. When a change occurs
   * the <Error_Setter> handles setting or removing the error.
   */
  React.useEffect(() => {
    if (validateOnSubmitOnly && preSubmit) {
      const { validators: updatedValidators } = sanitizeValidators(
        (onValidate && onValidate(values)) || {},
        fieldRefs
      );

      if (!deepEqual(updatedValidators, validators)) {
        displatch({
          type: STATE_ACTION_TYPE.SET_VALIDATORS,
          payload: updatedValidators,
        });
      }
    }
  }, [validateOnSubmitOnly, preSubmit]);

  /**
   * @name Validator_Tracker
   *
   * Handles standard validation. Validators are initially retrieved from
   * the onValidate response and set to form state. Validators are tracked
   * in the validator object and updated when a field is identified as
   * invalid. When a change occurs the <Error_Setter> handles setting or
   * removing the error.
   */
  React.useEffect(() => {
    if (Object.keys(fieldRefs).length) {
      const { validators: updatedValidators } = sanitizeValidators(
        (onValidate && onValidate(values)) || {},
        fieldRefs
      );

      if (!deepEqual(updatedValidators, validators)) {
        displatch({
          type: STATE_ACTION_TYPE.SET_VALIDATORS,
          payload: updatedValidators,
        });
      }
    }
  }, [values, fieldRefs]);

  /**
   * @name Error_Setter
   *
   * Handles setting or unsetting errors in response to changes with
   * validators. A validator is either added or removed via filtering
   * based on the state of the validator and the error object is
   * subsequently updated to reflect the change.
   */
  useUpdateEffect(() => {
    const updatedErrors = Object.entries(validators)
      .filter((validator) => touched[validator[0]] && validator[1])
      .reduce((accumulator, key) => Object.assign(accumulator, { [key[0]]: key[1] }), {});

    if (!deepEqual(updatedErrors, errors)) {
      displatch({
        type: !Object.keys(updatedErrors).length
          ? STATE_ACTION_TYPE.RESET_ERRORS
          : STATE_ACTION_TYPE.SET_ERRORS,
        payload: updatedErrors,
      });
    }
  }, [validators, touched]);

  /**
   * @name Pre_Submit_Touched_Handler
   *
   * Validates that all validators have associated field refs. This
   * ensures that form submission cannot be halted due to validators
   * with missing form fields.
   *
   * Validates all touched values are set to true against field refs.
   */
  useUpdateEffect(() => {
    if (preSubmit) {
      const { validators: updatedValidators } = sanitizeValidators(
        (onValidate && onValidate(values)) || {},
        fieldRefs
      );

      const { touched: updatedTouched } = sanitizeTouched(updatedValidators, fieldRefs);

      if (!deepEqual(updatedTouched, touched)) {
        displatch({
          type: STATE_ACTION_TYPE.SET_TOUCHED,
          payload: updatedTouched,
        });
      }
    }
  }, [preSubmit]);

  /**
   * @name Pre_Submit_Flow_Handler
   *
   * Controls the direction of pre-submit.
   *
   * If errors were found during pre-submit and `autoFocus` was
   * enabled, flow is regulated to handling the error. The form
   * determines field order based on DOM position and maps the
   * associated errors to the first field in the DOM setting focus.
   *
   * If no errors are found `submit` flag is set allowing the form
   * to complete form submission.
   */
  useUpdateEffect(() => {
    if (autoFocus && preSubmit !== cachedPreSubmitId && Object.keys(errors).length && !submit) {
      setCachedPreSubmitId(preSubmit);

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

    if (preSubmit !== cachedPreSubmitId && !Object.keys(errors).length && !submit) {
      const { validators: updatedValidators } = sanitizeValidators(
        (onValidate && onValidate(values)) || {},
        fieldRefs
      );

      const errorCount = hasError(updatedValidators);

      if (!errorCount) {
        displatch({
          type: STATE_ACTION_TYPE.SET_SUBMIT,
          payload: null,
        });

        if (onPreSubmit) {
          executePreSubmit();
        }
      }
    }
  }, [preSubmit, autoFocus]);

  /**
   * @name Change_Handler
   *
   * Handles calling prop onChange function. The process is
   * triggered by state changes occurring with the `values`
   * form state object.
   */
  useUpdateEffect(() => {
    onChange && onChange(values);
  }, [values]);

  /**
   * @name Submit_Handler
   *
   * Handles form submission provided pre-submit was successful
   * calling submit handler and setting the post-submit flag.
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
   * @name Post_Submit_Handler
   *
   * Handles post submission calling post-submit callback and
   * reseting internal form state.
   */
  useUpdateEffect(() => {
    if (postSubmit) {
      onPostSubmit && isFunction(onPostSubmit) && onPostSubmit(values);

      displatch({
        type: STATE_ACTION_TYPE.RESET_FORM_STATE,
        payload: null,
      });

      setCachedPreSubmitId("");
    }
  }, [postSubmit]);

  return <form>{children}</form>;
};

export const Form = Object.assign(
  React.forwardRef((props: FormProps, ref: React.Ref<FormRef>): JSX.Element => {
    const fieldRefsContoller = React.useMemo(() => {
      return new Store<FieldRefState>();
    }, []);

    const staticProps: StaticProps = {
      classesError: props?.classesError,
      classesField: props?.classesField,
    };

    return (
      <FormProvider staticProps={staticProps} fieldRefController={fieldRefsContoller}>
        <_Form {...props} formRef={props.formRef} />
      </FormProvider>
    );
  }),
  {
    Control: Control,
  }
);

Form.propTypes = {
  autoFocus: PropTypes.bool,
  children: PropTypes.node,
  formRef: PropTypes.func.isRequired,
  validateOnSubmitOnly: PropTypes.bool,

  /** Handlers */
  onChange: PropTypes.func,
  onPreSubmit: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  onValidate: PropTypes.func,
};
