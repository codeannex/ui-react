import React from "react";

import { Form } from "@components/client/Form/Form";
import { Error } from "@components/client/Form/components/Error/Error";
import { FormButton } from "@components/client/Form/components/FormButton/FormButton";
import { InputEmail } from "@components/client/Form/components/Input/InputEmail/InputEmail";
import { InputPassword } from "@components/client/Form/components/Input/InputPassword/InputPassword";
import { InputText } from "@components/client/Form/components/Input/InputText/InputText";
import { Label } from "@components/client/Form/components/Label/Label";
import { Radio } from "@components/client/Form/components/Radio/Radio";
import { Select } from "@components/client/Form/components/Select/Select/Select";
import { TextArea } from "@components/client/Form/components/TextArea/TextArea";
import { FormRef, Values } from "@components/client/Form/types";

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
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="basic">
          <Form formRef={setFormRef1} onSubmit={handleSubmit} onValidate={handleValidate1}>
            <Element as={ELEMENT_OPTION_TYPE.DIV}>
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Label field="firstName" htmlFor="first-name-basic" label="First Name" />
              </Element>
              <InputText id="first-name-basic" field="firstName" />
              <Error field="firstName" as="span" />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV}>
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Label field="lastName" htmlFor="last-name-basic" label="Last Name" />
              </Element>
              <InputText id="last-name-basic" field="lastName" />
              <Error field="lastName" as="span" />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV}>
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Label field="email" htmlFor="email-basic" label="Email" />
              </Element>
              <InputEmail id="email-basic" field="email" />
              <Error field="email" as="span" />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV}>
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Label field="password" htmlFor="password-basic" label="Password" />
              </Element>
              <InputPassword id="password-basic" field="password" />
              <Error field="password" as="span" />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV}>
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Label field="class" htmlFor="lass-basic" label="Class" />
              </Element>
              <Select id="class-basic" field="class" options={selectOptions} />
              <Error field="class" as="span" />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV}>
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Label field="classType" htmlFor="class-type-basic" label="Class Type" />
              </Element>
              <Radio id="class-type-basic" field="classType" options={radioOptions} />
              <Error field="classType" as="span" />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV}>
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Label field="comment" htmlFor="comment-basic" label="Comment" />
              </Element>
              <TextArea id="comment-basic" field="comment" />
              <Error field="comment" as="span" />
            </Element>
          </Form>
          <FormButton id="submit-btn-basic" formRef={formRef1}>
            Clicker
          </FormButton>
        </Element>
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="auto-focus">
          <Form
            autoFocus
            formRef={setFormRef2}
            onSubmit={handleSubmit}
            onValidate={handleValidate2}
          >
            <Element as={ELEMENT_OPTION_TYPE.DIV}>
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Label field="firstName" htmlFor="first-name-auto" label="First Name" />
              </Element>
              <InputText id="first-name-auto" field="firstName" />
              <Error field="firstName" as="span" />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV}>
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Label field="lastName" htmlFor="last-name-auto" label="Last Name" />
              </Element>
              <InputText id="last-name-auto" field="lastName" />
              <Error field="lastName" as="span" />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV}>
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Label field="email" htmlFor="email-auto" label="Email" />
              </Element>
              <InputEmail id="email-auto" field="email" />
              <Error field="email" as="span" />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV}>
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Label field="password" htmlFor="password-auto" label="Password" />
              </Element>
              <InputPassword id="password-auto" field="password" />
              <Error field="password" as="span" />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV}>
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Label field="class" htmlFor="class-auto" label="Class" />
              </Element>
              <Select id="class-auto" field="class" options={selectOptions} />
              <Error field="class" as="span" />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV}>
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Label field="classType" htmlFor="class-type-auto" label="Class Type" />
              </Element>
              <Radio id="class-type-auto" field="classType" options={radioOptions} />
              <Error field="classType" as="span" />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV}>
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Label field="comment" htmlFor="comment-auto" label="Comment" />
              </Element>
              <TextArea id="comment-auto" field="comment" />
              <Error field="comment" as="span" />
            </Element>
          </Form>
          <FormButton id="submit-btn-auto" formRef={formRef2}>
            Clicker
          </FormButton>
        </Element>
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="validate-submit">
          <Form
            validateOnSubmitOnly
            formRef={setFormRef3}
            onSubmit={handleSubmit}
            onValidate={handleValidate3}
          >
            <Element as={ELEMENT_OPTION_TYPE.DIV}>
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Label field="firstName" htmlFor="first-name-validate-submit" label="First Name" />
              </Element>
              <InputText id="first-name-validate-submit" field="firstName" />
              <Error field="firstName" as="span" />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV}>
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Label field="email" htmlFor="email-validate-submit" label="Email" />
              </Element>
              <InputEmail id="email-validate-submit" field="email" />
              <Error field="email" as="span" />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV}>
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Label field="password" htmlFor="password-validate-submit" label="Password" />
              </Element>
              <InputPassword id="password-validate-submit" field="password" />
              <Error field="password" as="span" />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV}>
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Label field="class" htmlFor="class-validate-submit" label="Class" />
              </Element>
              <Select id="class-validate-submit" field="class" options={selectOptions} />
              <Error field="class" as="span" />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV}>
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Label field="classType" htmlFor="class-type-validate-submit" label="Class Type" />
              </Element>
              <Radio id="class-type-validate-submit" field="classType" options={radioOptions} />
              <Error field="classType" as="span" />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV}>
              <Element as={ELEMENT_OPTION_TYPE.DIV}>
                <Label field="comment" htmlFor="comment-validate-submit" label="Class Type" />
              </Element>
              <TextArea id="comment-validate-submit" field="comment" />
              <Error field="comment" as="span" />
            </Element>
          </Form>
          <FormButton id="submit-btn-validate-submit" formRef={formRef3}>
            Clicker
          </FormButton>
        </Element>
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-basic">
          <Form formRef={setFormRef4} onSubmit={handleSubmit} onValidate={handleValidate4}>
            <Form.Control
              field={FIELD.FIRST_NAME}
              render={({ field, ref, error, value, onChange, onBlur }) => (
                <Element as={ELEMENT_OPTION_TYPE.DIV}>
                  <Element as={ELEMENT_OPTION_TYPE.LABEL}>First Name</Element>
                  <Element
                    as={ELEMENT_OPTION_TYPE.INPUT}
                    id={field}
                    type="text"
                    value={value}
                    ref={ref}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                  {error && <Element as={ELEMENT_OPTION_TYPE.PARAGRAPH}>{error}</Element>}
                </Element>
              )}
            />
            <Form.Control
              field={FIELD.EMAIL}
              render={({ field, ref, error, value, onChange, onBlur }) => (
                <Element as={ELEMENT_OPTION_TYPE.DIV}>
                  <Element as={ELEMENT_OPTION_TYPE.LABEL}>Email</Element>
                  <Element
                    as={ELEMENT_OPTION_TYPE.INPUT}
                    id={field}
                    type="email"
                    value={value}
                    ref={ref}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                  {error && <Element as={ELEMENT_OPTION_TYPE.PARAGRAPH}>{error}</Element>}
                </Element>
              )}
            />
            <Form.Control
              field={FIELD.PASSWORD}
              render={({ field, ref, error, value, onChange, onBlur }) => (
                <Element as={ELEMENT_OPTION_TYPE.DIV}>
                  <Element as={ELEMENT_OPTION_TYPE.LABEL}>Password</Element>
                  <Element
                    as={ELEMENT_OPTION_TYPE.INPUT}
                    id={field}
                    type="password"
                    value={value}
                    ref={ref}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                  {error && <Element as={ELEMENT_OPTION_TYPE.PARAGRAPH}>{error}</Element>}
                </Element>
              )}
            />
          </Form>
          <FormButton id="control-submit-btn-validate-submit" formRef={formRef4}>
            Clicker
          </FormButton>
        </Element>
      </main>
    </div>
  );
};
