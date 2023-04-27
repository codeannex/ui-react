import React from "react";

import {
  Error,
  Form,
  FormButton,
  FormRef,
  Info,
  InputEmail,
  InputPassword,
  InputText,
  Label,
  Radio,
  Select,
  SmartInput,
  TextArea,
  Values,
} from "@components/client/Form";

import { ELEMENT_OPTION_TYPE, Element } from "@core/server/Element/Element";

const selectOptions = [
  { id: "a", value: "", label: "--Please choose an option--" },
  { id: "instructional", value: "instructional", label: "Instructional" },
  { id: "interactive", value: "interactive", label: "Interactive" },
];

const radioOptions = [
  { id: "boxing", value: "boxing", label: "Boxing", name: "boxing" },
  { id: "kick-boxing", value: "kick-boxing", label: "Kick Boxing", name: "kick-boxing" },
  { id: "bjj", value: "bjj", label: "BJJ", name: "bjj" },
];

const FIELD = {
  FIRST_NAME: "firstName",
  EMAIL: "email",
  PASSWORD: "password",
};

export const FormPage = () => {
  /** Smart */
  const [formRefSmart1, setFormRefSmart1] = React.useState<FormRef>(null);
  const [formRefSmart2, setFormRefSmart2] = React.useState<FormRef>(null);
  const [formRefSmart3, setFormRefSmart3] = React.useState<FormRef>(null);
  const [formRefSmart4, setFormRefSmart4] = React.useState<FormRef>(null);
  const [formRefSmart5, setFormRefSmart5] = React.useState<FormRef>(null);
  const [formRefSmart6, setFormRefSmart6] = React.useState<FormRef>(null);

  /** Standard */
  const [formRefStandard1, setFormRefStandard1] = React.useState<FormRef>(null);
  const [formRefStandard2, setFormRefStandard2] = React.useState<FormRef>(null);
  const [formRefStandard3, setFormRefStandard3] = React.useState<FormRef>(null);
  const [formRefStandard4, setFormRefStandard4] = React.useState<FormRef>(null);
  const [formRefStandard5, setFormRefStandard5] = React.useState<FormRef>(null);
  const [formRefStandard6, setFormRefStandard6] = React.useState<FormRef>(null);

  /** Control */
  const [formRefControl1, setFormRefControl1] = React.useState<FormRef>(null);
  const [formRefControl2, setFormRefControl2] = React.useState<FormRef>(null);
  const [formRefControl3, setFormRefControl3] = React.useState<FormRef>(null);
  const [formRefControl4, setFormRefControl4] = React.useState<FormRef>(null);
  const [formRefControl5, setFormRefControl5] = React.useState<FormRef>(null);
  const [formRefControl6, setFormRefControl6] = React.useState<FormRef>(null);

  const handleSubmit = () => {};

  /** Smart */
  const handleValidateSmart1 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required Smart 1",
      email: values.email ? undefined : "Required Smart 1",
      password: values.password ? undefined : "Required Smart 1",
    };
  };

  const handleValidateSmart2 = (values: Values) => {};

  const handleValidateSmart3 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required Smart 3",
      lastName: values.lastName ? undefined : "Required Smart 3",
      email: values.email ? undefined : "Required Smart 3",
      password: values.password ? undefined : "Required Smart 3",
    };
  };

  const handleValidateSmart4 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required Smart 4",
      lastName: values.lastName ? undefined : "Required Smart 4",
      email: values.email ? undefined : "Required Smart 4",
      password: values.password ? undefined : "Required Smart 4",
    };
  };

  const handleValidateSmart5 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required Smart 5",
      lastName: values.lastName ? undefined : "Required Smart 5",
      email: values.email ? undefined : "Required Smart 5",
      password: values.password ? undefined : "Required Smart 5",
    };
  };

  const handleValidateSmart6 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required Smart 6",
      lastName: values.lastName ? undefined : "Required Smart 6",
      email: values.email ? undefined : "Required Smart 6",
      password: values.password ? undefined : "Required Smart 6",
    };
  };

  /** Standard */
  const handleValidateStandard1 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required Standard 1",
      email: values.email ? undefined : "Required Standard 1",
      password: values.password ? undefined : "Required Standard 1",
    };
  };

  const handleValidateStandard2 = (values: Values) => {};

  const handleValidateStandard3 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required Standard 3",
      lastName: values.lastName ? undefined : "Required Standard 3",
      email: values.email ? undefined : "Required Standard 3",
      password: values.password ? undefined : "Required Standard 3",
    };
  };

  const handleValidateStandard4 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required Standard 4",
      lastName: values.lastName ? undefined : "Required Standard 4",
      email: values.email ? undefined : "Required Standard 4",
      password: values.password ? undefined : "Required Standard 4",
    };
  };

  const handleValidateStandard5 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required Standard 5",
      lastName: values.lastName ? undefined : "Required Standard 5",
      email: values.email ? undefined : "Required Standard 5",
      password: values.password ? undefined : "Required Standard 5",
    };
  };

  const handleValidateStandard6 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required Standard 6",
      lastName: values.lastName ? undefined : "Required Standard 6",
      email: values.email ? undefined : "Required Standard 6",
      password: values.password ? undefined : "Required Standard 6",
    };
  };

  /** Control */
  const handleValidateControl1 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required Standard 1",
      email: values.email ? undefined : "Required Standard 1",
      password: values.password ? undefined : "Required Standard 1",
    };
  };

  const handleValidateControl2 = (values: Values) => {};

  const handleValidateControl3 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required Standard 3",
      lastName: values.lastName ? undefined : "Required Standard 3",
      email: values.email ? undefined : "Required Standard 3",
      password: values.password ? undefined : "Required Standard 3",
    };
  };

  const handleValidateControl4 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required Standard 4",
      lastName: values.lastName ? undefined : "Required Standard 4",
      email: values.email ? undefined : "Required Standard 4",
      password: values.password ? undefined : "Required Standard 4",
    };
  };

  const handleValidateControl5 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required Standard 5",
      lastName: values.lastName ? undefined : "Required Standard 5",
      email: values.email ? undefined : "Required Standard 5",
      password: values.password ? undefined : "Required Standard 5",
    };
  };

  const handleValidateControl6 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required Standard 6",
      lastName: values.lastName ? undefined : "Required Standard 6",
      email: values.email ? undefined : "Required Standard 6",
      password: values.password ? undefined : "Required Standard 6",
    };
  };

  /** Smart */
  const handleClearSmart1 = () => {
    formRefSmart1?.controls.clearForm();
  };

  const handleClearSmart2 = () => {
    formRefSmart2?.controls.clearForm();
  };

  const handleClearSmart3 = () => {
    formRefSmart3?.controls.clearForm();
  };

  const handleClearSmart4 = () => {
    formRefSmart4?.controls.clearForm();
  };

  const handleClearSmart5 = () => {
    formRefSmart5?.controls.clearForm();
  };

  const handleClearSmart6 = () => {
    formRefSmart6?.controls.clearForm();
  };

  /** Standard */
  const handleClearStandard1 = () => {
    formRefStandard1?.controls.clearForm();
  };

  const handleClearStandard2 = () => {
    formRefStandard2?.controls.clearForm();
  };

  const handleClearStandard3 = () => {
    formRefStandard3?.controls.clearForm();
  };

  const handleClearStandard4 = () => {
    formRefStandard4?.controls.clearForm();
  };

  const handleClearStandard5 = () => {
    formRefStandard5?.controls.clearForm();
  };

  const handleClearStandard6 = () => {
    formRefStandard6?.controls.clearForm();
  };

  /** Control */
  const handleClearControl1 = () => {
    formRefStandard1?.controls.clearForm();
  };

  const handleClearControl2 = () => {
    formRefStandard2?.controls.clearForm();
  };

  const handleClearControl3 = () => {
    formRefStandard3?.controls.clearForm();
  };

  const handleClearControl4 = () => {
    formRefStandard4?.controls.clearForm();
  };

  const handleClearControl5 = () => {
    formRefStandard5?.controls.clearForm();
  };

  const handleClearControl6 = () => {
    formRefStandard6?.controls.clearForm();
  };

  return (
    <div id="page" data-test-id="component-app">
      <main id="main">
        {/* Control Form 1 ======== */}
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-1">
          <Form
            formRef={setFormRefControl1}
            onSubmit={handleSubmit}
            onValidate={handleValidateControl1}
          >
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-1-first-name-input">
              <Form.Control
                field="firstName"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-1-first-name">
                        First Name
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-1-info-first-name control-form-1-error-first-name"
                      aria-invalid={!!error}
                      id="control-form-1-first-name"
                      required
                      type="text"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-1-info-first-name">InfoFirstName</div>}
                    {error && (
                      <div id="control-form-1-error-first-name" role="alert">
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-1-last-name-input">
              <Form.Control
                field="lastName"
                render={({ ref, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-1-last-name">Last Name</label>
                    </div>
                    <input
                      aria-describedby="control-form-1-info-last-name"
                      id="control-form-1-last-name"
                      type="text"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {<div id="control-form-1-info-last-name">InfoLastName</div>}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-1-email-input">
              <Form.Control
                field="email"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-1-email">
                        Email
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-1-info-email control-form-1-error-email"
                      aria-invalid={!!error}
                      id="control-form-1-email"
                      required
                      type="email"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-1-info-email">InfoEmail</div>}
                    {error && (
                      <div id="control-form-1-error-email" role="alert">
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-1-password-input">
              <Form.Control
                field="password"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-1-password">
                        Password
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-1-info-password control-form-1-error-password"
                      aria-invalid={!!error}
                      id="control-form-1-password"
                      required
                      type="password"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-1-info-password">InfoPassword</div>}
                    {error && (
                      <div id="control-form-1-error-password" role="alert">
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
          </Form>
          <FormButton id="smart-form-1-submit-btn" formRef={formRefSmart1}>
            Clicker
          </FormButton>
          <Element as="button" id="smart-form-1-clear-btn" onClick={handleClearSmart1}>
            Clear
          </Element>
        </Element>
        {/* Control Form 1 ======== END */}

        {/* Control Form 2 ======== */}
        {/* Control Form 2 ======== END */}

        {/* Control Form 3 ======== */}
        {/* Control Form 3 ======== END */}

        {/* Control Form 4 v======== */}
        {/* Control Form 4 ======== END */}

        {/* Control Form 5 ======== */}
        {/* Control Form 5 ======== END */}

        {/* Control Form 6 ======== */}
        {/* Control Form 6 ======== END */}
      </main>
    </div>
  );
};
