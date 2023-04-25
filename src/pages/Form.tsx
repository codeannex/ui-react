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
                  <Label field="firstName" htmlFor="first-name" label="First Name" />
                </Element>
                <InputText field="firstName" id="first-name" aria-describedby="first-name-error" />
                <Info field="firstName" id="first-name" />
                <Error field="firstName" id="first-name-error" />
              </Element>

              {/* <SmartInput
                asType="text"
                field="firstName"
                id="standard-form-1-first-name"
                info="InfoFirstName"
                label="First Name"
              /> */}
            </Element>
            {/* <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-1-last-name-input">
              <SmartInput
                asType="text"
                field="lastName"
                id="standard-form-1-last-name"
                info="InfoLastName"
                label="Last Name"
              />
            </Element> */}
            {/* <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-1-email-input">
              <SmartInput
                asType="email"
                field="email"
                id="standard-form-1-email"
                info="InfoEmail"
                label="Email"
              />
            </Element> */}
            {/* <Element as={ELEMENT_OPTION_TYPE.DIV} id="standard-form-1-password-input">
              <SmartInput
                asType="password"
                field="password"
                id="standard-form-1-password"
                info="InfoPassword."
                label="Password"
              />
            </Element> */}
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
