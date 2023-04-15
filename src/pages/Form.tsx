import React from "react";

import { Form } from "@components/client/Form/Form";
import { Field } from "@components/client/Form/components/Field/Field";
import { FormButton } from "@components/client/Form/components/FormButton/FormButton";
import { InputEmail } from "@components/client/Form/components/Input/InputEmail/InputEmail";
import { InputPassword } from "@components/client/Form/components/Input/InputPassword/InputPassword";
import { InputText } from "@components/client/Form/components/Input/InputText/InputText";
import { Radio } from "@components/client/Form/components/Radio/Radio";
import { Select } from "@components/client/Form/components/Select/Select/Select";
import { TextArea } from "@components/client/Form/components/TextArea/TextArea";
import { FormRef, Values } from "@components/client/Form/types";

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

  const handleSubmit = () => {};

  const handleValidate1 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required",
      lastName: values.lastName ? undefined : "Required",
      email: values.email ? undefined : "Required",
      password: values.password ? undefined : "Required",
      class: values.class ? undefined : "Required",
      classType: values.classType ? undefined : "Required",
      comment: values.comment ? undefined : "Required",
    };
  };

  const handleValidate2 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required",
      lastName: values.lastName ? undefined : "Required",
      email: values.email ? undefined : "Required",
      password: values.password ? undefined : "Required",
      class: values.class ? undefined : "Required",
      classType: values.classType ? undefined : "Required",
      comment: values.comment ? undefined : "Required",
    };
  };

  const handleValidate3 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required",
      lastName: values.lastName ? undefined : "Required",
      email: values.email ? undefined : "Required",
      password: values.password ? undefined : "Required",
      class: values.class ? undefined : "Required",
      classType: values.classType ? undefined : "Required",
      comment: values.comment ? undefined : "Required",
    };
  };

  const handleValidate4 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required",
      lastName: values.lastName ? undefined : "Required",
      email: values.email ? undefined : "Required",
      password: values.password ? undefined : "Required",
      class: values.class ? undefined : "Required",
      classType: values.classType ? undefined : "Required",
      comment: values.comment ? undefined : "Required",
    };
  };

  return (
    <div id="page" data-test-id="component-app">
      <main id="main">
        <div id="basic">
          <Form formRef={setFormRef1} onSubmit={handleSubmit} onValidate={handleValidate1}>
            <Field label="First Name">
              <InputText id="first-name-basic" fieldName="firstName" />
            </Field>
            <Field label="Last Name">
              <InputText id="last-name-basic" fieldName="lastName" />
            </Field>
            <Field label="Email">
              <InputEmail id="email-basic" fieldName="email" />
            </Field>
            <Field label="Password">
              <InputPassword id="password-basic" fieldName="password" />
            </Field>
            <Field label="Class">
              <Select id="class-basic" fieldName="class" options={selectOptions} />
            </Field>
            <Field label="Class Type">
              <Radio id="class-type-basic" fieldName="classType" options={radioOptions} />
            </Field>
            <Field label="Comment">
              <TextArea id="comment-basic" fieldName="comment" />
            </Field>
          </Form>
          <FormButton id="submit-btn-basic" formRef={formRef1}>
            Clicker
          </FormButton>
        </div>
        <div id="auto-focus">
          <Form
            autoFocus
            formRef={setFormRef2}
            onSubmit={handleSubmit}
            onValidate={handleValidate2}
          >
            <Field label="First Name">
              <InputText id="first-name-auto" fieldName="firstName" />
            </Field>
            <Field label="Last Name">
              <InputText id="last-name-auto" fieldName="lastName" />
            </Field>
            <Field label="Email">
              <InputEmail id="email-auto" fieldName="email" />
            </Field>
            <Field label="Password">
              <InputPassword id="password-auto" fieldName="password" />
            </Field>
            <Field label="Class">
              <Select id="class-auto" fieldName="class" options={selectOptions} />
            </Field>
            <Field label="Class Type">
              <Radio id="class-type-auto" fieldName="classType" options={radioOptions} />
            </Field>
            <Field label="Comment">
              <TextArea id="comment-auto" fieldName="comment" />
            </Field>
          </Form>
          <FormButton id="submit-btn-auto" formRef={formRef2}>
            Clicker
          </FormButton>
        </div>
        <div id="validate-submit">
          <Form
            validateOnSubmitOnly
            formRef={setFormRef3}
            onSubmit={handleSubmit}
            onValidate={handleValidate3}
          >
            <Field label="First Name">
              <InputText id="first-name-validate-submit" fieldName="firstName" />
            </Field>
            <Field label="Email">
              <InputEmail id="email-validate-submit" fieldName="email" />
            </Field>
            <Field label="Password">
              <InputPassword id="password-validate-submit" fieldName="password" />
            </Field>
            <Field label="Class">
              <Select id="class-validate-submit" fieldName="class" options={selectOptions} />
            </Field>
            <Field label="Class Type">
              <Radio id="class-type-validate-submit" fieldName="classType" options={radioOptions} />
            </Field>
            <Field label="Comment">
              <TextArea id="comment-validate-submit" fieldName="comment" />
            </Field>
          </Form>
          <FormButton id="submit-btn-validate-submit" formRef={formRef3}>
            Clicker
          </FormButton>
        </div>
        <div id="control-basic">
          <Form formRef={setFormRef4} onSubmit={handleSubmit} onValidate={handleValidate4}>
            <Form.Control
              fieldName={FIELD.FIRST_NAME}
              render={({ fieldName, ref, error, value, onChange, onBlur }) => (
                <div>
                  <label>First Name</label>
                  <input
                    id={fieldName}
                    type="text"
                    value={value}
                    ref={ref}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                  {error && <p>{error}</p>}
                </div>
              )}
            />
            <Form.Control
              fieldName={FIELD.EMAIL}
              render={({ fieldName, ref, error, value, onChange, onBlur }) => (
                <div>
                  <label>Email</label>
                  <input
                    id={fieldName}
                    type="email"
                    value={value}
                    ref={ref}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                  {error && <p>{error}</p>}
                </div>
              )}
            />
            <Form.Control
              fieldName={FIELD.PASSWORD}
              render={({ fieldName, ref, error, value, onChange, onBlur }) => (
                <div>
                  <label>Email</label>
                  <input
                    id={fieldName}
                    type="password"
                    value={value}
                    ref={ref}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                  {error && <p>{error}</p>}
                </div>
              )}
            />
          </Form>
          <FormButton id="control-submit-btn-validate-submit" formRef={formRef4}>
            Clicker
          </FormButton>
        </div>
      </main>
    </div>
  );
};
