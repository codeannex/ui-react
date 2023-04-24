import React from "react";

import {
  Error,
  Form,
  FormButton,
  FormRef,
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
  const [formRef1, setFormRef1] = React.useState<FormRef>(null);
  const [formRef2, setFormRef2] = React.useState<FormRef>(null);
  const [formRef3, setFormRef3] = React.useState<FormRef>(null);
  const [formRef4, setFormRef4] = React.useState<FormRef>(null);
  const [formRef5, setFormRef5] = React.useState<FormRef>(null);
  const [formRef6, setFormRef6] = React.useState<FormRef>(null);

  const handleSubmit = () => {};

  const handleValidate1 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required 1",
      email: values.email ? undefined : "Required 1",
      password: values.password ? undefined : "Required 1",
    };
  };

  const handleValidate2 = (values: Values) => {};

  const handleValidate3 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required 3",
      lastName: values.lastName ? undefined : "Required 3",
      email: values.email ? undefined : "Required 3",
      password: values.password ? undefined : "Required 3",
    };
  };

  const handleValidate4 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required 4",
      lastName: values.lastName ? undefined : "Required 4",
      email: values.email ? undefined : "Required 4",
      password: values.password ? undefined : "Required 4",
    };
  };

  const handleValidate5 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required 5",
      lastName: values.lastName ? undefined : "Required 5",
      email: values.email ? undefined : "Required 5",
      password: values.password ? undefined : "Required 5",
    };
  };

  const handleValidate6 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required 6",
      lastName: values.lastName ? undefined : "Required 6",
      email: values.email ? undefined : "Required 6",
      password: values.password ? undefined : "Required 6",
    };
  };

  const handleClear1 = () => {
    formRef1?.controls.clearForm();
  };

  const handleClear2 = () => {
    formRef2?.controls.clearForm();
  };

  const handleClear3 = () => {
    formRef3?.controls.clearForm();
  };

  const handleClear4 = () => {
    formRef4?.controls.clearForm();
  };

  const handleClear5 = () => {
    formRef5?.controls.clearForm();
  };

  const handleClear6 = () => {
    formRef6?.controls.clearForm();
  };

  return (
    <div id="page" data-test-id="component-app">
      <main id="main">
        {/* Smart Form 1 ======== */}
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-1">
          <Form formRef={setFormRef1} onSubmit={handleSubmit} onValidate={handleValidate1}>
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
          <FormButton id="smart-form-1-submit-btn" formRef={formRef1}>
            Clicker
          </FormButton>
          <Element as="button" id="smart-form-1-clear-btn" onClick={handleClear1}>
            Clear
          </Element>
        </Element>
        {/* Smart Form 1 ======== END */}

        {/* Smart Form 2 ======== */}
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-2">
          <Form formRef={setFormRef2} onSubmit={handleSubmit}>
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
          <FormButton id="smart-form-2-submit-btn" formRef={formRef2}>
            Clicker
          </FormButton>
          <Element as="button" id="smart-form-2-clear-btn" onClick={handleClear2}>
            Clear
          </Element>
        </Element>
        {/* Smart Form 2 ======== END */}

        {/* Smart Form 3 ======== */}
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-3">
          <Form
            classesError={"smart-form-3-error"}
            formRef={setFormRef3}
            onSubmit={handleSubmit}
            onValidate={handleValidate3}
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
          <FormButton id="smart-form-3-submit-btn" formRef={formRef3}>
            Clicker
          </FormButton>
          <Element as="button" id="smart-form-3-clear-btn" onClick={handleClear3}>
            Clear
          </Element>
        </Element>
        {/* Smart Form 3 ======== END */}

        {/* Smart Form 4 ======== */}
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-4">
          <Form
            classesError={"smart-form-4-error"}
            validateOnSubmitOnly
            formRef={setFormRef4}
            onSubmit={handleSubmit}
            onValidate={handleValidate4}
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
          <FormButton id="smart-form-4-submit-btn" formRef={formRef4}>
            Clicker
          </FormButton>
          <Element as="button" id="smart-form-4-clear-btn" onClick={handleClear4}>
            Clear
          </Element>
        </Element>
        {/* Smart Form 4 ======== END */}

        {/* Smart Form 5 ======== */}
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="smart-form-5">
          <Form
            classesError={"smart-form-5-error"}
            autoFocus
            formRef={setFormRef5}
            onSubmit={handleSubmit}
            onValidate={handleValidate5}
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
          <FormButton id="smart-form-5-submit-btn" formRef={formRef5}>
            Clicker
          </FormButton>
          <Element as="button" id="smart-form-5-clear-btn" onClick={handleClear5}>
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
            formRef={setFormRef6}
            onSubmit={handleSubmit}
            onValidate={handleValidate6}
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
          <FormButton id="smart-form-6-submit-btn" formRef={formRef6}>
            Clicker
          </FormButton>
          <Element as="button" id="smart-form-6-clear-btn" onClick={handleClear6}>
            Clear
          </Element>
        </Element>
        {/* Smart Form 6 ======== END */}
      </main>
    </div>
  );
};
