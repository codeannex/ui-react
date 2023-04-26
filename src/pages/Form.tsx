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
  const [formRefStandard7, setFormRefStandard7] = React.useState<FormRef>(null);

  const handleSubmit = () => {};

  /** Smart */
  const handleValidateSmart1 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required 1",
      email: values.email ? undefined : "Required 1",
      password: values.password ? undefined : "Required 1",
    };
  };

  const handleValidateSmart2 = (values: Values) => {};

  const handleValidateSmart3 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required 3",
      lastName: values.lastName ? undefined : "Required 3",
      email: values.email ? undefined : "Required 3",
      password: values.password ? undefined : "Required 3",
    };
  };

  const handleValidateSmart4 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required 4",
      lastName: values.lastName ? undefined : "Required 4",
      email: values.email ? undefined : "Required 4",
      password: values.password ? undefined : "Required 4",
    };
  };

  const handleValidateSmart5 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required 5",
      lastName: values.lastName ? undefined : "Required 5",
      email: values.email ? undefined : "Required 5",
      password: values.password ? undefined : "Required 5",
    };
  };

  const handleValidateSmart6 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required 6",
      lastName: values.lastName ? undefined : "Required 6",
      email: values.email ? undefined : "Required 6",
      password: values.password ? undefined : "Required 6",
    };
  };

  /** Standard */
  const handleValidateStandard7 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required 7",
      email: values.email ? undefined : "Required 7",
      password: values.password ? undefined : "Required 7",
    };
  };

  /** Standard */
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

  /** Smart */
  const handleClearStandard7 = () => {
    formRefStandard7?.controls.clearForm();
  };

  return (
    <div id="page" data-test-id="component-app">
      <main id="main">
        {/* Stancard Form 1 ======== */}
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-1">
          <Form
            formRef={setFormRefStandard7}
            onSubmit={handleSubmit}
            onValidate={handleValidateStandard7}
          >
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-1-first-name-input">
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Element as={ELEMENT_OPTION_TYPE.DIV}>
                  <Label
                    field="firstName"
                    htmlFor="standard-form-1-first-name"
                    label="First Name"
                  />
                </Element>
                <InputText
                  field="firstName"
                  ariaDescribedby="standard-form-1-info-first-name standard-form-1-error-first-name"
                  id="standard-form-1-first-name"
                />
                <Info
                  field="firstName"
                  id="standard-form-1-info-first-name"
                  message="InfoFirstName"
                />
                <Error field="firstName" id="standard-form-1-error-first-name" />
              </Element>
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-1-last-name-input">
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Element as={ELEMENT_OPTION_TYPE.DIV}>
                  <Label field="lastName" htmlFor="standard-form-1-last-name" label="Last Name" />
                </Element>
                <InputText
                  field="lastName"
                  ariaDescribedby="standard-form-1-info-last-name standard-form-1-error-last-name"
                  id="standard-form-1-last-name"
                />
                <Info field="lastName" id="standard-form-1-info-last-name" message="InfoLastName" />
                <Error field="lastName" id="standard-form-1-error-last-name" />
              </Element>
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-1-email-input">
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Element as={ELEMENT_OPTION_TYPE.DIV}>
                  <Label field="email" htmlFor="standard-form-1-email" label="Email" />
                </Element>
                <InputEmail
                  field="email"
                  ariaDescribedby="standard-form-1-info-email standard-form-1-error-email"
                  id="standard-form-1-email"
                />
                <Info field="email" id="standard-form-1-info-email" message="InfoEmail" />
                <Error field="email" id="standard-form-1-error-email" />
              </Element>
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-1-password-input">
              {" "}
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Element as={ELEMENT_OPTION_TYPE.DIV}>
                  <Label field="password" htmlFor="standard-form-1-password" label="Password" />
                </Element>
                <InputPassword
                  field="password"
                  ariaDescribedby="standard-form-1-info-password standard-form-1-error-password"
                  id="standard-form-1-password"
                />
                <Info field="password" id="standard-form-1-info-password" message="InfoPassword" />
                <Error field="password" id="standard-form-1-error-password" />
              </Element>
            </Element>
          </Form>
          <FormButton id="standard-form-1-submit-btn" formRef={formRefStandard7}>
            Clicker
          </FormButton>
          <Element as="button" id="standard-form-1-clear-btn" onClick={handleClearStandard7}>
            Clear
          </Element>
        </Element>
        {/* Smart Form 1 ======== END */}
      </main>
    </div>
  );
};
