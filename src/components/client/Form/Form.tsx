import * as React from "react";

import PropTypes from "prop-types";

import {
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

type FormProps = {
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
    proxyRef && isFunction(proxyRef) && proxyRef({ controls, state });
  }, [state]);

  /**
   * Handles validation when validateOnSubmitOnly is enabled.
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

      console.log("+++++++++++++++++++++");
      console.log(updatedValidators);
      console.log("+++++++++++++++++++++");
    }
  }, [validateOnSubmitOnly, preSubmit]);

  /**
   * Handles standard validation.
   */
  React.useEffect(() => {
    if (Object.keys(fieldRefs).length) {
      console.log("1 ******************");
      const { validators: updatedValidators } = sanitizeValidators(
        (onValidate && onValidate(values)) || {},
        fieldRefs
      );

      if (!deepEqual(updatedValidators, validators)) {
        console.log("1 in ******************");
        displatch({
          type: STATE_ACTION_TYPE.SET_VALIDATORS,
          payload: updatedValidators,
        });
      }
    }
  }, [values, fieldRefs]);

  /**
   * Handles setting errors in response to changes in the
   * validators.
   */
  React.useEffect(() => {
    console.log("2 ******************");
    const updatedErrors = Object.entries(validators)
      .filter((validator) => touched[validator[0]] && validator[1])
      .reduce((accumulator, key) => Object.assign(accumulator, { [key[0]]: key[1] }), {});

    if (!deepEqual(updatedErrors, errors)) {
      console.log("2 in ******************");
      displatch({
        type: !Object.keys(updatedErrors).length
          ? STATE_ACTION_TYPE.RESET_ERRORS
          : STATE_ACTION_TYPE.SET_ERRORS,
        payload: updatedErrors,
      });
    }
  }, [validators, touched]);

  /**
   * Handles validation during form submission triggered by the
   * selection of the submit function and presubmit flag.
   */
  useUpdateEffect(() => {
    if (preSubmit) {
      console.log("3 ******************");
      const { validators: updatedValidators } = sanitizeValidators(
        (onValidate && onValidate(values)) || {},
        fieldRefs
      );

      const { touched: updatedTouched } = sanitizeTouched(updatedValidators, fieldRefs);

      if (!deepEqual(updatedTouched, touched)) {
        console.log("3 in ******************");
        displatch({
          type: STATE_ACTION_TYPE.SET_TOUCHED,
          payload: updatedTouched,
        });
      }
    }
  }, [preSubmit]);

  /**
   * Handles validation during form submission triggered by the
   * selection of the submit function and presubmit flag and sets
   * the focus on the first error found in the form. If enabled
   * the form determines field order based on DOM position and maps the
   * associated errors to the first field in the DOM setting focus. If
   * validation passes the submit flag.
   */
  useUpdateEffect(() => {
    if (!autoFocus) {
      return;
    }

    console.log("@@@@@@@@@@@@@@@@@@@@@");
    console.log(preSubmit);
    console.log(cachedPreSubmitId);
    console.log("@@@@@@@@@@@@@@@@@@@@@");

    if (preSubmit !== cachedPreSubmitId && Object.keys(errors).length && !submit) {
      console.log("4.1 ******************");
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
      console.log("4.2 ******************");
      const { validators: updatedValidators } = sanitizeValidators(
        (onValidate && onValidate(values)) || {},
        fieldRefs
      );

      const errorCount = hasError(updatedValidators);

      if (!errorCount) {
        console.log("4.2 in ******************");
        displatch({
          type: STATE_ACTION_TYPE.SET_SUBMIT,
          payload: null,
        });

        if (onPreSubmit) {
          executePreSubmit();
        }
      }
    }
  }, [preSubmit, errors, autoFocus]);

  /**
   * Handles calling prop onChange function. The process is
   * triggered by state changes occurring with the `values`
   * form state object.
   */
  useUpdateEffect(() => {
    onChange && onChange(values);
  }, [values]);

  /**
   * Handles form submission.
   */
  useUpdateEffect(() => {
    if (submit && !postSubmit) {
      console.log("5 ******************");
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
      console.log("6 ******************");
      onPostSubmit && isFunction(onPostSubmit) && onPostSubmit(values);

      displatch({
        type: STATE_ACTION_TYPE.RESET_FORM_STATE,
        payload: null,
      });

      setCachedPreSubmitId("");
    }
  }, [postSubmit]);

  /**
   * Component mount and un-mount.
   */
  React.useEffect(() => {
    const subscribe = fieldRefsCtr.subscribe("register", () => {
      console.log("adfjadjk");
    });

    return () => {};
  }, []);

  return <form>{children}</form>;
};

export const Form: React.FC<FormProps> = (props) => {
  const fieldRefsContoller = React.useMemo(() => {
    return new Store<FieldRefState>();
  }, []);

  const staticProps: StaticProps = {
    classesError: props?.classesError,
    classesField: props?.classesField,
  };

  return (
    <FormProvider staticProps={staticProps} fieldRefController={fieldRefsContoller}>
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
