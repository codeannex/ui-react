import * as React from "react";

import PropTypes from "prop-types";

import {
  Control,
  ControlProps,
  FieldRef,
  FieldRefState,
  FormProvider,
  Validator,
  hasError,
  sanitizeErrors,
  sanitizeTouched,
  useFormControls,
  useFormStateActionContext,
  useFormStateContext,
  usePreSubmit,
  useStaticPropsContext,
} from "@components/client/Form/index";

import { deepEqual, isFunction } from "@utils/index";

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
import { Errors, FormRef, STATE_ACTION_TYPE, StaticProps, Validators, Values } from "./types";

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

  const { validator, fieldRef } = useStaticPropsContext();

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

  const { preSubmit, submit, postSubmit, values = {}, errors = {} } = state;

  const [cachedPreSubmitId, setCachedPreSubmitId] = React.useState<any>("");

  /**
   * @name Form_Ref_Setter
   *
   * Set and update external ref.
   */
  React.useEffect(() => {
    formRef && isFunction(formRef) && formRef({ controls, state });
  }, [state]);

  /**
   * @name Validator_Tracker
   *
   * Tracks validator changes updating the form state errors object by
   * either adding or removing the errors based on conditions determined
   * by the validators. Validators are constantly checked against change
   * events and updated according to the conditions defined within the
   * validators.
   */
  React.useEffect(() => {
    const fieldRefs = fieldRef.getFieldRefs();
    const validators = validator.getValidators();

    const validatorsUpdate = (onValidate && onValidate(values)) || {};

    /** Field refs must exist before the form is considered a valid form. **/
    if (Object.keys(fieldRefs).length && !deepEqual(validatorsUpdate, validators)) {
      const { errors: updatedErrors } = sanitizeErrors(validatorsUpdate, fieldRefs);

      /** <1> Handles validation before pre-submit. **/
      if (!validateOnSubmitOnly && !preSubmit && Object.entries(updatedErrors).length) {
        if (!deepEqual(updatedErrors, errors)) {
          validator.operationalSet(({ setter }: any) => {
            Object.entries(validatorsUpdate).map((validator) => {
              setter(validator[0], { [validator[0]]: validator[1] });
            });
          });

          displatch({
            type: STATE_ACTION_TYPE.SET_ERRORS,
            payload: updatedErrors,
          });
        }
      }

      /** <2> Handles validation during pre-submit. **/
      if (preSubmit && !submit && Object.entries(updatedErrors).length) {
        if (!deepEqual(updatedErrors, errors)) {
          validator.operationalSet(({ setter }: any) => {
            Object.entries(validatorsUpdate).map((validator) => {
              setter(validator[0], { [validator[0]]: validator[1] });
            });
          });

          displatch({
            type: STATE_ACTION_TYPE.SET_ERRORS,
            payload: updatedErrors,
          });
        }
      }
    }
  }, [errors, preSubmit, submit, validateOnSubmitOnly, values]);

  /**
   * @name Change_Handler
   *
   * Handles calling prop onChange function. The process is
   * triggered by state changes occurring within the form
   * state `values` object.
   */
  useUpdateEffect(() => {
    onChange && onChange(values);
  }, [values]);

  /**
   * @name Pre_Submit_Flow_Handler
   *
   * Handles validation during pre-submit in union with
   * Validator_Tracker<2>. The flow is triggerd by the user
   * selecting the submit button. Aytime the submit button
   * is selected the pre-submit id is updated causing this
   * code to run. If errors are found the associated code
   * will execute updating the errors and touched objects
   * and allowing the optional auto focus code to run. If
   * errors are not found the submit flag is set allowing
   * the form to move into the next submit phase.
   */
  useUpdateEffect(() => {
    if (preSubmit && !submit && preSubmit !== cachedPreSubmitId) {
      const fieldRefs = fieldRef.getFieldRefs();

      setCachedPreSubmitId(preSubmit);

      const validatorsUpdate = (onValidate && onValidate(values)) || {};

      const { touched } = sanitizeTouched(validatorsUpdate, fieldRefs);
      const { errors: updatedErrors } = sanitizeErrors(validatorsUpdate, fieldRefs);

      const errorCount = hasError(updatedErrors);

      /** Errors found */
      if (errorCount) {
        validator.operationalSet(({ setter }: any) => {
          Object.entries(validatorsUpdate).map((validator) => {
            setter(validator[0], { [validator[0]]: validator[1] });
          });
        });

        displatch({
          type: STATE_ACTION_TYPE.SET_ERRORS,
          payload: updatedErrors,
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
            if (updatedErrors[key]) {
              value.current.focus();

              break;
            }
          }
        }
      } else {
        /**
         * Form errors have been cleared permitting the form to move
         * into the next `submit` phase.
         */
        displatch({
          type: STATE_ACTION_TYPE.SET_SUBMIT,
          payload: null,
        });

        if (onPreSubmit) {
          executePreSubmit();
        }
      }
    }
  }, [preSubmit, submit]);

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

  /**
   * @name Mount_Unmount_Init
   *
   * Initialize any code that must run once and/or require
   * cleanup.
   */
  React.useEffect(() => {
    if (!validateOnSubmitOnly) {
      const fieldRefs = fieldRef.getFieldRefs();
      const validators = (onValidate && onValidate(values)) || {};

      const { errors } = sanitizeErrors(validators, fieldRefs);

      validator.operationalSet(({ setter }: any) => {
        Object.entries(validators).map((validator) => {
          setter(validator[0], { [validator[0]]: validator[1] });
        });
      });

      displatch({
        type: STATE_ACTION_TYPE.SET_ERRORS,
        payload: errors,
      });
    }

    return () => {};
  }, []);

  return <form>{children}</form>;
};

export const Form = Object.assign(
  React.forwardRef((props: FormProps, ref: React.Ref<FormRef>): JSX.Element => {
    const staticProps = React.useMemo((): StaticProps => {
      return {
        classesError: props?.classesError,
        classesField: props?.classesField,
        fieldRef: new FieldRef<FieldRefState>(),
        validator: new Validator<Validators>(),
      };
    }, []);

    return (
      <FormProvider staticProps={staticProps}>
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
