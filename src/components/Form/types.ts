/**
 * Actions
 */
export const enum STATE_ACTION_TYPE {
  RESET_FORM_STATE,
  SET_ERROR,
  SET_ERRORS,
  SET_TOUCHED,
  SET_PRE_SUBMIT,
  SET_SUBMIT,
  SET_POST_SUBMIT,
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
export type SetError = { fieldName: string; value: any };
export type SetErrors = Errors;
export type SetTouched = { fieldName: string; value: any };
export type UnsetTouched = { fieldName: string; value: any };
export type UpdateValue = { fieldName: string; value: any };

export type _GetValue = { fieldName: string; values: Values };
export type _GetValues = Values;
export type _SetError = { fieldName: string; value: any; dispatch: StateReducerActionContext };
export type _SetErrors = { errors: Errors; dispatch: StateReducerActionContext };
export type _SetTouched = { fieldName: string; value: any; dispatch: StateReducerActionContext };
export type _Submit = { dispatch: StateReducerActionContext };
export type _UnsetTouched = { fieldName: string; value: any; dispatch: StateReducerActionContext };
export type _UpdateValue = { fieldName: string; value: any; dispatch: StateReducerActionContext };

/**
 * Form
 */
export type StateAction = {
  type: STATE_ACTION_TYPE;
  payload: any;
};

export type Controls = {
  getValue: (fieldName: GetValue) => string;
  getValues: () => Values;
  setError: ({ fieldName, value }: SetError) => void;
  setErrors: (errors: SetErrors) => void;
  setTouched: ({ fieldName, value }: SetTouched) => void;
  submit: () => void;
  unsetTouched: ({ fieldName, value }: UnsetTouched) => void;
  updateValue: ({ fieldName, value }: UpdateValue) => void;
};

export type _Controls = {
  _getValue: ({ fieldName, values }: _GetValue) => string;
  _getValues: (values: _GetValues) => Values;
  _setError: ({ fieldName, value, dispatch }: _SetError) => void;
  _setErrors: ({ errors, dispatch }: _SetErrors) => void;
  _setTouched: ({ fieldName, value, dispatch }: _SetTouched) => void;
  _submit: ({ dispatch }: _Submit) => void;
  _unsetTouched: ({ fieldName, value, dispatch }: _UnsetTouched) => void;
  _updateValue: ({ fieldName, value, dispatch }: _UpdateValue) => void;
};

export type Errors = {
  [fieldName: string]: string | undefined;
};

export type Touched = {
  [fieldName: string]: boolean;
};

export type Values = {
  [fieldName: string]: string;
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
export type FieldRefType = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export type FieldRefAction = {
  type: FIELD_REF_ACTION_TYPE;
  payload: FieldRefState;
};

export type FieldRefState = {
  [key: string]: FieldRef;
};

export type FieldRef = React.RefObject<FieldRefType>;
export type FieldRefReducerActionContext = React.Dispatch<FieldRefAction>;

/**
 * Common
 */
export type RadioOption = { label: string; value: any; name: string };
export type SelectOption = { value: any; label: string };
