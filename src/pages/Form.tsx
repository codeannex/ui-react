import React from "react";

import {
  Error,
  Form,
  FormButton,
  FormRef,
  Info,
  Input,
  Label,
  SmartInput,
  Values,
} from "@components/client/Form";

import { ELEMENT_OPTION_TYPE, Element } from "@core/server/Element/Element";

export const FormPage = () => {
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

  /** Smart */
  const [formRefSmart1, setFormRefSmart1] = React.useState<FormRef>(null);
  const [formRefSmart2, setFormRefSmart2] = React.useState<FormRef>(null);
  const [formRefSmart3, setFormRefSmart3] = React.useState<FormRef>(null);
  const [formRefSmart4, setFormRefSmart4] = React.useState<FormRef>(null);
  const [formRefSmart5, setFormRefSmart5] = React.useState<FormRef>(null);
  const [formRefSmart6, setFormRefSmart6] = React.useState<FormRef>(null);

  const handleSubmit = () => {};

  /** Standard */
  const handleValidateStandard1 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required Standard 1",
      email: values.email ? undefined : "Required Standard 1",
      password: values.password ? undefined : "Required Standard 1",
    };
  };

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
  const handleValidateSmart1 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required Smart 1",
      email: values.email ? undefined : "Required Smart 1",
      password: values.password ? undefined : "Required Smart 1",
    };
  };

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
    formRefControl1?.controls.clearForm();
  };

  const handleClearControl2 = () => {
    formRefControl2?.controls.clearForm();
  };

  const handleClearControl3 = () => {
    formRefControl3?.controls.clearForm();
  };

  const handleClearControl4 = () => {
    formRefControl4?.controls.clearForm();
  };

  const handleClearControl5 = () => {
    formRefControl5?.controls.clearForm();
  };

  const handleClearControl6 = () => {
    formRefControl6?.controls.clearForm();
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

  return (
    <div id="page" data-test-id="component-app">
      <main id="main">
        {/* Standard Form 1 ======== */}
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-1">
          <Form
            formRef={setFormRefStandard1}
            onSubmit={handleSubmit}
            onValidate={handleValidateStandard1}
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
                <Input
                  asType="text"
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
                <Input
                  asType="text"
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
                <Input
                  asType="email"
                  field="email"
                  ariaDescribedby="standard-form-1-info-email standard-form-1-error-email"
                  id="standard-form-1-email"
                />
                <Info field="email" id="standard-form-1-info-email" message="InfoEmail" />
                <Error field="email" id="standard-form-1-error-email" />
              </Element>
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-1-password-input">
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Element as={ELEMENT_OPTION_TYPE.DIV}>
                  <Label field="password" htmlFor="standard-form-1-password" label="Password" />
                </Element>
                <Input
                  asType="password"
                  field="password"
                  ariaDescribedby="standard-form-1-info-password standard-form-1-error-password"
                  id="standard-form-1-password"
                />
                <Info field="password" id="standard-form-1-info-password" message="InfoPassword" />
                <Error field="password" id="standard-form-1-error-password" />
              </Element>
            </Element>
          </Form>
          <FormButton id="standard-form-1-submit-btn" formRef={formRefStandard1}>
            Clicker
          </FormButton>
          <Element as="button" id="standard-form-1-clear-btn" onClick={handleClearStandard1}>
            Clear
          </Element>
        </Element>
        {/* Standard Form 1 ======== END */}

        {/* Standard Form 2 ======== */}
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-2">
          <Form formRef={setFormRefStandard2} onSubmit={handleSubmit}>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-2-first-name-input">
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Element as={ELEMENT_OPTION_TYPE.DIV}>
                  <Label
                    field="firstName"
                    htmlFor="standard-form-2-first-name"
                    label="First Name"
                  />
                </Element>
                <Input
                  asType="text"
                  field="firstName"
                  ariaDescribedby="standard-form-2-info-first-name standard-form-2-error-first-name"
                  id="standard-form-2-first-name"
                />
                <Info
                  field="firstName"
                  id="standard-form-2-info-first-name"
                  message="InfoFirstName"
                />
                <Error field="firstName" id="standard-form-2-error-first-name" />
              </Element>
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-2-last-name-input">
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Element as={ELEMENT_OPTION_TYPE.DIV}>
                  <Label field="lastName" htmlFor="standard-form-2-last-name" label="Last Name" />
                </Element>
                <Input
                  asType="text"
                  field="lastName"
                  ariaDescribedby="standard-form-2-info-last-name standard-form-2-error-last-name"
                  id="standard-form-2-last-name"
                />
                <Info field="lastName" id="standard-form-2-info-last-name" message="InfoLastName" />
                <Error field="lastName" id="standard-form-2-error-last-name" />
              </Element>
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-2-email-input">
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Element as={ELEMENT_OPTION_TYPE.DIV}>
                  <Label field="email" htmlFor="standard-form-2-email" label="Email" />
                </Element>
                <Input
                  asType="email"
                  field="email"
                  ariaDescribedby="standard-form-2-info-email standard-form-2-error-email"
                  id="standard-form-2-email"
                />
                <Info field="email" id="standard-form-2-info-email" message="InfoEmail" />
                <Error field="email" id="standard-form-2-error-email" />
              </Element>
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-2-password-input">
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Element as={ELEMENT_OPTION_TYPE.DIV}>
                  <Label field="password" htmlFor="standard-form-2-password" label="Password" />
                </Element>
                <Input
                  asType="password"
                  field="password"
                  ariaDescribedby="standard-form-2-info-password standard-form-2-error-password"
                  id="standard-form-2-password"
                />
                <Info field="password" id="standard-form-2-info-password" message="InfoPassword" />
                <Error field="password" id="standard-form-2-error-password" />
              </Element>
            </Element>
          </Form>
          <FormButton id="standard-form-2-submit-btn" formRef={formRefStandard2}>
            Clicker
          </FormButton>
          <Element as="button" id="standard-form-2-clear-btn" onClick={handleClearStandard2}>
            Clear
          </Element>
        </Element>
        {/* Standard Form 2 ======== END */}

        {/* Standard Form 3 ======== */}
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-3">
          <Form
            formRef={setFormRefStandard3}
            onSubmit={handleSubmit}
            onValidate={handleValidateStandard3}
          >
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-3-first-name-input">
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Element as={ELEMENT_OPTION_TYPE.DIV}>
                  <Label
                    field="firstName"
                    htmlFor="standard-form-3-first-name"
                    label="First Name"
                  />
                </Element>
                <Input
                  asType="text"
                  field="firstName"
                  ariaDescribedby="standard-form-3-info-first-name standard-form-3-error-first-name"
                  id="standard-form-3-first-name"
                />
                <Info
                  field="firstName"
                  id="standard-form-3-info-first-name"
                  message="InfoFirstName"
                  hideOnError
                />
                <Error
                  field="firstName"
                  classes="standard-form-3-error"
                  id="standard-form-3-error-first-name"
                />
              </Element>
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-3-last-name-input">
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Element as={ELEMENT_OPTION_TYPE.DIV}>
                  <Label field="lastName" htmlFor="standard-form-3-last-name" label="Last Name" />
                </Element>
                <Input
                  asType="text"
                  field="lastName"
                  ariaDescribedby="standard-form-3-info-last-name standard-form-3-error-last-name"
                  id="standard-form-3-last-name"
                />
                <Info
                  field="lastName"
                  id="standard-form-3-info-last-name"
                  message="InfoLastName"
                  hideOnError
                />
                <Error
                  field="lastName"
                  classes="standard-form-3-error"
                  id="standard-form-3-error-last-name"
                />
              </Element>
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-3-email-input">
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Element as={ELEMENT_OPTION_TYPE.DIV}>
                  <Label field="email" htmlFor="standard-form-3-email" label="Email" />
                </Element>
                <Input
                  asType="email"
                  field="email"
                  ariaDescribedby="standard-form-3-info-email standard-form-3-error-email"
                  id="standard-form-3-email"
                />
                <Info
                  field="email"
                  id="standard-form-3-info-email"
                  message="InfoEmail"
                  hideOnError
                />
                <Error
                  field="email"
                  classes="standard-form-3-error"
                  id="standard-form-3-error-email"
                />
              </Element>
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-3-password-input">
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Element as={ELEMENT_OPTION_TYPE.DIV}>
                  <Label field="password" htmlFor="standard-form-3-password" label="Password" />
                </Element>
                <Input
                  asType="password"
                  field="password"
                  ariaDescribedby="standard-form-3-info-password standard-form-3-error-password"
                  id="standard-form-3-password"
                />
                <Info
                  field="password"
                  id="standard-form-3-info-password"
                  message="InfoPassword"
                  hideOnError
                />
                <Error
                  field="password"
                  classes="standard-form-3-error"
                  id="standard-form-3-error-password"
                />
              </Element>
            </Element>
          </Form>
          <FormButton id="standard-form-3-submit-btn" formRef={formRefStandard3}>
            Clicker
          </FormButton>
          <Element as="button" id="standard-form-3-clear-btn" onClick={handleClearStandard3}>
            Clear
          </Element>
        </Element>
        {/* Standard Form 3 ======== END */}

        {/* Standard Form 4 ======== */}
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-4">
          <Form
            formRef={setFormRefStandard4}
            validateOnSubmitOnly
            onSubmit={handleSubmit}
            onValidate={handleValidateStandard4}
          >
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-4-first-name-input">
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Element as={ELEMENT_OPTION_TYPE.DIV}>
                  <Label
                    field="firstName"
                    htmlFor="standard-form-4-first-name"
                    label="First Name"
                  />
                </Element>
                <Input
                  asType="text"
                  field="firstName"
                  ariaDescribedby="standard-form-4-info-first-name standard-form-4-error-first-name"
                  id="standard-form-4-first-name"
                />
                <Info
                  field="firstName"
                  id="standard-form-4-info-first-name"
                  message="InfoFirstName"
                  hideOnError
                />
                <Error
                  field="firstName"
                  classes="standard-form-4-error"
                  id="standard-form-4-error-first-name"
                />
              </Element>
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-4-last-name-input">
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Element as={ELEMENT_OPTION_TYPE.DIV}>
                  <Label field="lastName" htmlFor="standard-form-4-last-name" label="Last Name" />
                </Element>
                <Input
                  asType="text"
                  field="lastName"
                  ariaDescribedby="standard-form-4-info-last-name standard-form-4-error-last-name"
                  id="standard-form-4-last-name"
                />
                <Info
                  field="lastName"
                  id="standard-form-4-info-last-name"
                  message="InfoLastName"
                  hideOnError
                />
                <Error
                  field="lastName"
                  classes="standard-form-4-error"
                  id="standard-form-4-error-last-name"
                />
              </Element>
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-4-email-input">
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Element as={ELEMENT_OPTION_TYPE.DIV}>
                  <Label field="email" htmlFor="standard-form-4-email" label="Email" />
                </Element>
                <Input
                  asType="email"
                  field="email"
                  ariaDescribedby="standard-form-4-info-email standard-form-4-error-email"
                  id="standard-form-4-email"
                />
                <Info
                  field="email"
                  id="standard-form-4-info-email"
                  message="InfoEmail"
                  hideOnError
                />
                <Error
                  field="email"
                  classes="standard-form-4-error"
                  id="standard-form-4-error-email"
                />
              </Element>
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-4-password-input">
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Element as={ELEMENT_OPTION_TYPE.DIV}>
                  <Label field="password" htmlFor="standard-form-4-password" label="Password" />
                </Element>
                <Input
                  asType="password"
                  field="password"
                  ariaDescribedby="standard-form-4-info-password standard-form-4-error-password"
                  id="standard-form-4-password"
                />
                <Info
                  field="password"
                  id="standard-form-4-info-password"
                  message="InfoPassword"
                  hideOnError
                />
                <Error
                  field="password"
                  classes="standard-form-4-error"
                  id="standard-form-4-error-password"
                />
              </Element>
            </Element>
          </Form>
          <FormButton id="standard-form-4-submit-btn" formRef={formRefStandard4}>
            Clicker
          </FormButton>
          <Element as="button" id="standard-form-4-clear-btn" onClick={handleClearStandard4}>
            Clear
          </Element>
        </Element>
        {/* Standard Form 4 ======== END */}

        {/* Standard Form 5 ======== */}
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-5">
          <Form
            autoFocus
            formRef={setFormRefStandard5}
            onSubmit={handleSubmit}
            onValidate={handleValidateStandard5}
          >
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-5-first-name-input">
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Element as={ELEMENT_OPTION_TYPE.DIV}>
                  <Label
                    field="firstName"
                    htmlFor="standard-form-5-first-name"
                    label="First Name"
                  />
                </Element>
                <Input
                  asType="text"
                  field="firstName"
                  ariaDescribedby="standard-form-5-info-first-name standard-form-5-error-first-name"
                  id="standard-form-5-first-name"
                />
                <Info
                  field="firstName"
                  id="standard-form-5-info-first-name"
                  message="InfoFirstName"
                  hideOnError
                />
                <Error
                  field="firstName"
                  classes="standard-form-5-error"
                  id="standard-form-5-error-first-name"
                />
              </Element>
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-5-last-name-input">
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Element as={ELEMENT_OPTION_TYPE.DIV}>
                  <Label field="lastName" htmlFor="standard-form-5-last-name" label="Last Name" />
                </Element>
                <Input
                  asType="text"
                  field="lastName"
                  ariaDescribedby="standard-form-5-info-last-name standard-form-5-error-last-name"
                  id="standard-form-5-last-name"
                />
                <Info
                  field="lastName"
                  id="standard-form-5-info-last-name"
                  message="InfoLastName"
                  hideOnError
                />
                <Error
                  field="lastName"
                  classes="standard-form-5-error"
                  id="standard-form-5-error-last-name"
                />
              </Element>
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-5-email-input">
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Element as={ELEMENT_OPTION_TYPE.DIV}>
                  <Label field="email" htmlFor="standard-form-5-email" label="Email" />
                </Element>
                <Input
                  asType="email"
                  field="email"
                  ariaDescribedby="standard-form-5-info-email standard-form-5-error-email"
                  id="standard-form-5-email"
                />
                <Info
                  field="email"
                  id="standard-form-5-info-email"
                  message="InfoEmail"
                  hideOnError
                />
                <Error
                  field="email"
                  classes="standard-form-5-error"
                  id="standard-form-5-error-email"
                />
              </Element>
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-5-password-input">
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Element as={ELEMENT_OPTION_TYPE.DIV}>
                  <Label field="password" htmlFor="standard-form-5-password" label="Password" />
                </Element>
                <Input
                  asType="password"
                  field="password"
                  ariaDescribedby="standard-form-5-info-password standard-form-5-error-password"
                  id="standard-form-5-password"
                />
                <Info
                  field="password"
                  id="standard-form-5-info-password"
                  message="InfoPassword"
                  hideOnError
                />
                <Error
                  field="password"
                  classes="standard-form-5-error"
                  id="standard-form-5-error-password"
                />
              </Element>
            </Element>
          </Form>
          <FormButton id="standard-form-5-submit-btn" formRef={formRefStandard5}>
            Clicker
          </FormButton>
          <Element as="button" id="standard-form-5-clear-btn" onClick={handleClearStandard5}>
            Clearå
          </Element>
        </Element>
        {/* Standard Form 5 ======== END */}

        {/* Standard Form 6 ======== */}
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-6">
          <Form
            autoFocus
            validateOnSubmitOnly
            formRef={setFormRefStandard6}
            onSubmit={handleSubmit}
            onValidate={handleValidateStandard6}
          >
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-6-first-name-input">
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Element as={ELEMENT_OPTION_TYPE.DIV}>
                  <Label
                    field="firstName"
                    htmlFor="standard-form-6-first-name"
                    label="First Name"
                  />
                </Element>
                <Input
                  asType="text"
                  field="firstName"
                  ariaDescribedby="standard-form-6-info-first-name standard-form-6-error-first-name"
                  id="standard-form-6-first-name"
                />
                <Info
                  field="firstName"
                  id="standard-form-6-info-first-name"
                  message="InfoFirstName"
                  hideOnError
                />
                <Error
                  field="firstName"
                  classes="standard-form-6-error"
                  id="standard-form-6-error-first-name"
                />
              </Element>
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-6-last-name-input">
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Element as={ELEMENT_OPTION_TYPE.DIV}>
                  <Label field="lastName" htmlFor="standard-form-6-last-name" label="Last Name" />
                </Element>
                <Input
                  asType="text"
                  field="lastName"
                  ariaDescribedby="standard-form-6-info-last-name standard-form-6-error-last-name"
                  id="standard-form-6-last-name"
                />
                <Info
                  field="lastName"
                  id="standard-form-6-info-last-name"
                  message="InfoLastName"
                  hideOnError
                />
                <Error
                  field="lastName"
                  classes="standard-form-6-error"
                  id="standard-form-6-error-last-name"
                />
              </Element>
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-6-email-input">
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Element as={ELEMENT_OPTION_TYPE.DIV}>
                  <Label field="email" htmlFor="standard-form-6-email" label="Email" />
                </Element>
                <Input
                  asType="email"
                  field="email"
                  ariaDescribedby="standard-form-6-info-email standard-form-6-error-email"
                  id="standard-form-6-email"
                />
                <Info
                  field="email"
                  id="standard-form-6-info-email"
                  message="InfoEmail"
                  hideOnError
                />
                <Error
                  field="email"
                  classes="standard-form-6-error"
                  id="standard-form-6-error-email"
                />
              </Element>
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-6-password-input">
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Element as={ELEMENT_OPTION_TYPE.DIV}>
                  <Label field="password" htmlFor="standard-form-6-password" label="Password" />
                </Element>
                <Input
                  asType="password"
                  field="password"
                  ariaDescribedby="standard-form-6-info-password standard-form-6-error-password"
                  id="standard-form-6-password"
                />
                <Info
                  field="password"
                  id="standard-form-6-info-password"
                  message="InfoPassword"
                  hideOnError
                />
                <Error
                  field="password"
                  classes="standard-form-6-error"
                  id="standard-form-6-error-password"
                />
              </Element>
            </Element>
          </Form>
          <FormButton id="standard-form-6-submit-btn" formRef={formRefStandard6}>
            Clicker
          </FormButton>
          <Element as="button" id="standard-form-6-clear-btn" onClick={handleClearStandard6}>
            Clear
          </Element>
        </Element>
        {/* Standard Form 6 ======== END */}

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
                    {!error && <div id="control-form-1-info-first-name">Enter your first name</div>}
                    {error && (
                      <div
                        id="control-form-1-error-first-name"
                        className="control-form-1-error"
                        role="alert"
                      >
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
                      aria-describedby="control-form-1-info-last-name control-form-1-error-last-name"
                      id="control-form-1-last-name"
                      type="text"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    <div id="control-form-1-info-last-name">Enter your last name</div>
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
                    {!error && <div id="control-form-1-info-email">Enter your email</div>}
                    {error && (
                      <div
                        id="control-form-1-error-email"
                        className="control-form-1-error"
                        role="alert"
                      >
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
                    {!error && <div id="control-form-1-info-password">Enter your password</div>}
                    {error && (
                      <div
                        id="control-form-1-error-password"
                        className="control-form-1-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
          </Form>
          <FormButton id="control-form-1-submit-btn" formRef={formRefControl1}>
            Clicker
          </FormButton>
          <Element as="button" id="control-form-1-clear-btn" onClick={handleClearControl1}>
            Clear
          </Element>
        </Element>
        {/* Control Form 1 ======== END */}

        {/* Control Form 2 ======== */}
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-2">
          <Form formRef={setFormRefControl2} onSubmit={handleSubmit}>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-2-first-name-input">
              <Form.Control
                field="firstName"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-2-first-name">
                        First Name
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-2-info-first-name control-form-2-error-first-name"
                      aria-invalid={!!error}
                      id="control-form-2-first-name"
                      required
                      type="text"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-2-info-first-name">Enter your first name</div>}
                    {error && (
                      <div
                        id="control-form-2-error-first-name"
                        className="control-form-2-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-2-last-name-input">
              <Form.Control
                field="lastName"
                render={({ ref, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-2-last-name">Last Name</label>
                    </div>
                    <input
                      aria-describedby="control-form-2-info-last-name control-form-2-error-last-name"
                      id="control-form-2-last-name"
                      type="text"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    <div id="control-form-2-info-last-name">Enter your last name</div>
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-2-email-input">
              <Form.Control
                field="email"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-2-email">
                        Email
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-2-info-email control-form-2-error-email"
                      aria-invalid={!!error}
                      id="control-form-2-email"
                      required
                      type="email"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-2-info-email">Enter your email</div>}
                    {error && (
                      <div
                        id="control-form-2-error-email"
                        className="control-form-2-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-2-password-input">
              <Form.Control
                field="password"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-2-password">
                        Password
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-2-info-password control-form-2-error-password"
                      aria-invalid={!!error}
                      id="control-form-2-password"
                      required
                      type="password"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-2-info-password">Enter your password</div>}
                    {error && (
                      <div
                        id="control-form-2-error-password"
                        className="control-form-2-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
          </Form>
          <FormButton id="control-form-2-submit-btn" formRef={formRefControl2}>
            Clicker
          </FormButton>
          <Element as="button" id="control-form-2-clear-btn" onClick={handleClearControl2}>
            Clear
          </Element>
        </Element>
        {/* Control Form 2 ======== END */}

        {/* Control Form 3 ======== */}
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-3">
          <Form
            formRef={setFormRefControl3}
            onSubmit={handleSubmit}
            onValidate={handleValidateControl3}
          >
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-3-first-name-input">
              <Form.Control
                field="firstName"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-3-first-name">
                        First Name
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-3-info-first-name control-form-3-error-first-name"
                      aria-invalid={!!error}
                      id="control-form-3-first-name"
                      required
                      type="text"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-3-info-first-name">Enter your first name</div>}
                    {error && (
                      <div
                        id="control-form-3-error-first-name"
                        className="control-form-3-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-3-last-name-input">
              <Form.Control
                field="lastName"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-3-last-name">
                        First Name
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-3-info-last-name control-form-3-error-last-name"
                      aria-invalid={!!error}
                      id="control-form-3-last-name"
                      required
                      type="text"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-3-info-last-name">Enter your first name</div>}
                    {error && (
                      <div
                        id="control-form-3-error-last-name"
                        className="control-form-3-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-3-email-input">
              <Form.Control
                field="email"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-3-email">
                        Email
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-3-info-email control-form-3-error-email"
                      aria-invalid={!!error}
                      id="control-form-3-email"
                      required
                      type="email"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-3-info-email">Enter your email</div>}
                    {error && (
                      <div
                        id="control-form-3-error-email"
                        className="control-form-3-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-3-password-input">
              <Form.Control
                field="password"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-3-password">
                        Password
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-3-info-password control-form-3-error-password"
                      aria-invalid={!!error}
                      id="control-form-3-password"
                      required
                      type="password"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-3-info-password">Enter your password</div>}
                    {error && (
                      <div
                        id="control-form-3-error-password"
                        className="control-form-3-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
          </Form>
          <FormButton id="control-form-3-submit-btn" formRef={formRefControl3}>
            Clicker
          </FormButton>
          <Element as="button" id="control-form-3-clear-btn" onClick={handleClearControl3}>
            Clear
          </Element>
        </Element>
        {/* Control Form 3 ======== END */}

        {/* Control Form 4 ======== */}
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-4">
          <Form
            formRef={setFormRefControl4}
            validateOnSubmitOnly
            onSubmit={handleSubmit}
            onValidate={handleValidateControl4}
          >
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-4-first-name-input">
              <Form.Control
                field="firstName"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-4-first-name">
                        First Name
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-4-info-first-name control-form-4-error-first-name"
                      aria-invalid={!!error}
                      id="control-form-4-first-name"
                      required
                      type="text"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-4-info-first-name">Enter your first name</div>}
                    {error && (
                      <div
                        id="control-form-4-error-first-name"
                        className="control-form-4-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-4-last-name-input">
              <Form.Control
                field="lastName"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-4-last-name">
                        First Name
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-4-info-last-name control-form-4-error-last-name"
                      aria-invalid={!!error}
                      id="control-form-4-last-name"
                      required
                      type="text"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-4-info-last-name">Enter your first name</div>}
                    {error && (
                      <div
                        id="control-form-4-error-last-name"
                        className="control-form-4-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-4-email-input">
              <Form.Control
                field="email"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-4-email">
                        Email
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-4-info-email control-form-4-error-email"
                      aria-invalid={!!error}
                      id="control-form-4-email"
                      required
                      type="email"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-4-info-email">Enter your email</div>}
                    {error && (
                      <div
                        id="control-form-4-error-email"
                        className="control-form-4-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-4-password-input">
              <Form.Control
                field="password"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-4-password">
                        Password
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-4-info-password control-form-4-error-password"
                      aria-invalid={!!error}
                      id="control-form-4-password"
                      required
                      type="password"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-4-info-password">Enter your password</div>}
                    {error && (
                      <div
                        id="control-form-4-error-password"
                        className="control-form-4-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
          </Form>
          <FormButton id="control-form-4-submit-btn" formRef={formRefControl4}>
            Clicker
          </FormButton>
          <Element as="button" id="control-form-4-clear-btn" onClick={handleClearControl4}>
            Clear
          </Element>
        </Element>
        {/* Control Form 4 ======== END */}

        {/* Control Form 5 ======== */}
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-5">
          <Form
            autoFocus
            formRef={setFormRefControl5}
            onSubmit={handleSubmit}
            onValidate={handleValidateControl5}
          >
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-5-first-name-input">
              <Form.Control
                field="firstName"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-5-first-name">
                        First Name
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-5-info-first-name control-form-5-error-first-name"
                      aria-invalid={!!error}
                      id="control-form-5-first-name"
                      required
                      type="text"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-5-info-first-name">Enter your first name</div>}
                    {error && (
                      <div
                        id="control-form-5-error-first-name"
                        className="control-form-5-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-5-last-name-input">
              <Form.Control
                field="lastName"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-5-last-name">
                        First Name
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-5-info-last-name control-form-5-error-last-name"
                      aria-invalid={!!error}
                      id="control-form-5-last-name"
                      required
                      type="text"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-5-info-last-name">Enter your first name</div>}
                    {error && (
                      <div
                        id="control-form-5-error-last-name"
                        className="control-form-5-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-5-email-input">
              <Form.Control
                field="email"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-5-email">
                        Email
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-5-info-email control-form-5-error-email"
                      aria-invalid={!!error}
                      id="control-form-5-email"
                      required
                      type="email"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-5-info-email">Enter your email</div>}
                    {error && (
                      <div
                        id="control-form-5-error-email"
                        className="control-form-5-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-5-password-input">
              <Form.Control
                field="password"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-5-password">
                        Password
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-5-info-password control-form-5-error-password"
                      aria-invalid={!!error}
                      id="control-form-5-password"
                      required
                      type="password"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-5-info-password">Enter your password</div>}
                    {error && (
                      <div
                        id="control-form-5-error-password"
                        className="control-form-5-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
          </Form>
          <FormButton id="control-form-5-submit-btn" formRef={formRefControl5}>
            Clicker
          </FormButton>
          <Element as="button" id="control-form-5-clear-btn" onClick={handleClearControl5}>
            Clearå
          </Element>
        </Element>
        {/* Control Form 5 ======== END */}

        {/* Control Form 6 ======== */}
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-6">
          <Form
            autoFocus
            validateOnSubmitOnly
            formRef={setFormRefControl6}
            onSubmit={handleSubmit}
            onValidate={handleValidateControl6}
          >
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-6-first-name-input">
              <Form.Control
                field="firstName"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-6-first-name">
                        First Name
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-6-info-first-name control-form-6-error-first-name"
                      aria-invalid={!!error}
                      id="control-form-6-first-name"
                      required
                      type="text"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-6-info-first-name">Enter your first name</div>}
                    {error && (
                      <div
                        id="control-form-6-error-first-name"
                        className="control-form-6-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-6-last-name-input">
              <Form.Control
                field="lastName"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-6-last-name">
                        First Name
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-6-info-last-name control-form-6-error-last-name"
                      aria-invalid={!!error}
                      id="control-form-6-last-name"
                      required
                      type="text"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-6-info-last-name">Enter your first name</div>}
                    {error && (
                      <div
                        id="control-form-6-error-last-name"
                        className="control-form-6-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-6-email-input">
              <Form.Control
                field="email"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-5-email">
                        Email
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-6-info-email control-form-6-error-email"
                      aria-invalid={!!error}
                      id="control-form-6-email"
                      required
                      type="email"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-6-info-email">Enter your email</div>}
                    {error && (
                      <div
                        id="control-form-6-error-email"
                        className="control-form-6-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-6-password-input">
              <Form.Control
                field="password"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-6-password">
                        Password
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-6-info-password control-form-6-error-password"
                      aria-invalid={!!error}
                      id="control-form-6-password"
                      required
                      type="password"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-6-info-password">Enter your password</div>}
                    {error && (
                      <div
                        id="control-form-6-error-password"
                        className="control-form-6-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
          </Form>
          <FormButton id="control-form-6-submit-btn" formRef={formRefControl6}>
            Clicker
          </FormButton>
          <Element as="button" id="control-form-6-clear-btn" onClick={handleClearControl6}>
            Clear
          </Element>
        </Element>
        {/* Control Form 6 ======== END */}

        {/* Smart Form 1 ======== */}
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-1">
          <Form
            formRef={setFormRefSmart1}
            onSubmit={handleSubmit}
            onValidate={handleValidateSmart1}
          >
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-1-first-name-input">
              <SmartInput
                asType="text"
                field="firstName"
                id="smart-form-1-first-name"
                info="InfoFirstName"
                label="First Name"
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-1-last-name-input">
              <SmartInput
                asType="text"
                field="lastName"
                id="smart-form-1-last-name"
                info="InfoLastName"
                label="Last Name"
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-1-email-input">
              <SmartInput
                asType="email"
                field="email"
                id="smart-form-1-email"
                info="InfoEmail"
                label="Email"
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-1-password-input">
              <SmartInput
                asType="password"
                field="password"
                id="smart-form-1-password"
                info="InfoPassword."
                label="Password"
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
        {/* Smart Form 1 ======== END */}

        {/* Smart Form 2 ======== */}
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-2">
          <Form formRef={setFormRefSmart2} onSubmit={handleSubmit}>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-2-first-name-input">
              <SmartInput
                asType="text"
                field="firstName"
                id="smart-form-2-first-name"
                info="InfoFirstName"
                label="First Name"
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-2-last-name-input">
              <SmartInput
                asType="text"
                field="lastName"
                id="smart-form-2-last-name"
                info="InfoLastName"
                label="Last Name"
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-2-email-input">
              <SmartInput
                asType="email"
                field="email"
                id="smart-form-2-email"
                info="InfoEmail"
                label="Email"
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-2-password-input">
              <SmartInput
                asType="password"
                field="password"
                id="smart-form-2-password"
                info="InfoPassword."
                label="Password"
              />
            </Element>
          </Form>
          <FormButton id="smart-form-2-submit-btn" formRef={formRefSmart2}>
            Clicker
          </FormButton>
          <Element as="button" id="smart-form-2-clear-btn" onClick={handleClearSmart2}>
            Clear
          </Element>
        </Element>
        {/* Smart Form 2 ======== END */}

        {/* Smart Form 3 ======== */}
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-3">
          <Form
            classesError={"smart-form-3-error"}
            formRef={setFormRefSmart3}
            onSubmit={handleSubmit}
            onValidate={handleValidateSmart3}
          >
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-3-first-name-input">
              <SmartInput
                asType="text"
                field="firstName"
                id="smart-form-3-first-name"
                info="InfoFirstName"
                label="First Name"
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-3-last-name-input">
              <SmartInput
                asType="text"
                field="lastName"
                id="smart-form-3-last-name"
                info="InfoLastName"
                label="Last Name"
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-3-email-input">
              <SmartInput
                asType="email"
                field="email"
                id="smart-form-3-email"
                info="InfoEmail"
                label="Email"
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-3-password-input">
              <SmartInput
                asType="password"
                field="password"
                id="smart-form-3-password"
                info="InfoPassword."
                label="Password"
              />
            </Element>
          </Form>
          <FormButton id="smart-form-3-submit-btn" formRef={formRefSmart3}>
            Clicker
          </FormButton>
          <Element as="button" id="smart-form-3-clear-btn" onClick={handleClearSmart3}>
            Clear
          </Element>
        </Element>
        {/* Smart Form 3 ======== END */}

        {/* Smart Form 4 ======== */}
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-4">
          <Form
            classesError={"smart-form-4-error"}
            validateOnSubmitOnly
            formRef={setFormRefSmart4}
            onSubmit={handleSubmit}
            onValidate={handleValidateSmart4}
          >
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-4-first-name-input">
              <SmartInput
                asType="text"
                field="firstName"
                id="smart-form-4-first-name"
                info="InfoFirstName"
                label="First Name"
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-4-last-name-input">
              <SmartInput
                asType="text"
                field="lastName"
                id="smart-form-4-last-name"
                info="InfoLastName"
                label="Last Name"
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-4-email-input">
              <SmartInput
                asType="email"
                field="email"
                id="smart-form-4-email"
                info="InfoEmail"
                label="Email"
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-4-password-input">
              <SmartInput
                asType="password"
                field="password"
                id="smart-form-4-password"
                info="InfoPassword."
                label="Password"
              />
            </Element>
          </Form>
          <FormButton id="smart-form-4-submit-btn" formRef={formRefSmart4}>
            Clicker
          </FormButton>
          <Element as="button" id="smart-form-4-clear-btn" onClick={handleClearSmart4}>
            Clear
          </Element>
        </Element>
        {/* Smart Form 4 ======== END */}

        {/* Smart Form 5 ======== */}
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-5">
          <Form
            classesError={"smart-form-5-error"}
            autoFocus
            formRef={setFormRefSmart5}
            onSubmit={handleSubmit}
            onValidate={handleValidateSmart5}
          >
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-5-first-name-input">
              <SmartInput
                asType="text"
                field="firstName"
                id="smart-form-5-first-name"
                info="InfoFirstName"
                label="First Name"
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-5-last-name-input">
              <SmartInput
                asType="text"
                field="lastName"
                id="smart-form-5-last-name"
                info="InfoLastName"
                label="Last Name"
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-5-email-input">
              <SmartInput
                asType="email"
                field="email"
                id="smart-form-5-email"
                info="InfoEmail"
                label="Email"
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-5-password-input">
              <SmartInput
                asType="password"
                field="password"
                id="smart-form-5-password"
                info="InfoPassword."
                label="Password"
              />
            </Element>
          </Form>
          <FormButton id="smart-form-5-submit-btn" formRef={formRefSmart5}>
            Clicker
          </FormButton>
          <Element as="button" id="smart-form-5-clear-btn" onClick={handleClearSmart5}>
            Clear
          </Element>
        </Element>
        {/* Smart Form 5 ======== END */}

        {/* Smart Form 6 ======== */}
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-6">
          <Form
            classesError={"smart-form-6-error"}
            autoFocus
            validateOnSubmitOnly
            formRef={setFormRefSmart6}
            onSubmit={handleSubmit}
            onValidate={handleValidateSmart6}
          >
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-6-first-name-input">
              <SmartInput
                asType="text"
                field="firstName"
                id="smart-form-6-first-name"
                info="InfoFirstName"
                label="First Name"
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-6-last-name-input">
              <SmartInput
                asType="text"
                field="lastName"
                id="smart-form-6-last-name"
                info="InfoLastName"
                label="Last Name"
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-6-email-input">
              <SmartInput
                asType="email"
                field="email"
                id="smart-form-6-email"
                info="InfoEmail"
                label="Email"
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-6-password-input">
              <SmartInput
                asType="password"
                field="password"
                id="smart-form-6-password"
                info="InfoPassword."
                label="Password"
              />
            </Element>
          </Form>
          <FormButton id="smart-form-6-submit-btn" formRef={formRefSmart6}>
            Clicker
          </FormButton>
          <Element as="button" id="smart-form-6-clear-btn" onClick={handleClearSmart6}>
            Clear
          </Element>
        </Element>
        {/* Smart Form 6 ======== END */}
      </main>
    </div>
  );
};
