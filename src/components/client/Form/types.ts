import { FieldRef, Validator } from "@components/client/Form";

/**
 * Actions
 */
export const enum STATE_ACTION_TYPE {
  RESET_ERRORS,
  RESET_FORM_STATE,
  SET_ERROR,
  SET_ERRORS,
  SET_TOUCHED,
  SET_PRE_SUBMIT,
  SET_SUBMIT,
  SET_POST_SUBMIT,
  SET_VALIDATORS,
  UNSET_TOUCHED,
  UPDATE_VALUE,
}

export const enum FIELD_REF_ACTION_TYPE {
  REGISTER,
}

/**
 * Controls
 */
export type GetValue = string;
export type SetError = { field: string; value: any };
export type SetErrors = Errors;
export type SetTouched = { field: string; value: any };
export type UnsetTouched = { field: string; value: any };
export type UpdateValue = { field: string; value: any };

export type _GetValue = { field: string; values: Values };
export type _GetValues = Values;
export type _SetError = { field: string; value: any; dispatch: StateReducerActionContext };
export type _SetErrors = { errors: Errors; dispatch: StateReducerActionContext };
export type _SetTouched = { field: string; value: any; dispatch: StateReducerActionContext };
export type _Submit = { dispatch: StateReducerActionContext };
export type _UnsetTouched = { field: string; value: any; dispatch: StateReducerActionContext };
export type _UpdateValue = { field: string; value: any; dispatch: StateReducerActionContext };

/**
 * Form
 */
export type StateAction = {
  type: STATE_ACTION_TYPE;
  payload: any;
};

export type StaticProps = {
  classesError?: string | string[];
  classesField?: string | string[];
  fieldRef: FieldRef<FieldRefState>;
  validator: Validator<Validators>;
};

export type Controls = {
  getValue: (field: GetValue) => string;
  getValues: () => Values;
  setError: ({ field, value }: SetError) => void;
  setErrors: (errors: SetErrors) => void;
  setTouched: ({ field, value }: SetTouched) => void;
  submit: () => void;
  unsetTouched: ({ field, value }: UnsetTouched) => void;
  updateValue: ({ field, value }: UpdateValue) => void;
};

export type _Controls = {
  _getValue: ({ field, values }: _GetValue) => string;
  _getValues: (values: _GetValues) => Values;
  _setError: ({ field, value, dispatch }: _SetError) => void;
  _setErrors: ({ errors, dispatch }: _SetErrors) => void;
  _setTouched: ({ field, value, dispatch }: _SetTouched) => void;
  _submit: ({ dispatch }: _Submit) => void;
  _unsetTouched: ({ field, value, dispatch }: _UnsetTouched) => void;
  _updateValue: ({ field, value, dispatch }: _UpdateValue) => void;
};

export type Errors = {
  [field: string]: string | undefined;
};

export type Touched = {
  [field: string]: boolean;
};

export type Validators = {
  [field: string]: string;
};

export type Values = {
  [field: string]: string;
};

export type State = {
  preSubmit?: string;
  submit?: boolean;
  postSubmit?: boolean;
  errors?: Errors;
  touched?: Touched;
  values?: Values;
};

export type FormRef = {
  controls: Controls;
  state: State;
} | null;

export type StateReducerActionContext = React.Dispatch<StateAction>;

/**
 * Refs
 */
export type FieldElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export type IFieldRef = FieldElement;
export type RegistrationOptions = any;

export type FieldDetail = {
  _field: {
    ref: IFieldRef;
    name: string;
  };
};

export type FieldRefState = {
  [x: string]: FieldDetail;
};

/**
 * Common
 */
export type RadioOption = { id: string | number; label: string; name: string; value: any };
export type SelectOption = { id: string | number; label: string; value: any };
