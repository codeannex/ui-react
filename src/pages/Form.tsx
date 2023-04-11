import React from "react";

// import { Field, Form, FormButton, FormRef, InputText, Values } from "@components/client/Form";
import { Form } from "@components/client/Form/Form";
import { Field } from "@components/client/Form/components/Field/Field";
import { FormButton } from "@components/client/Form/components/FormButton/FormButton";
import { InputText } from "@components/client/Form/components/Input/InputText/InputText";
import { FormRef, Values } from "@components/client/Form/types";

export const FormPage = () => {
  const [formRef, setFormRef] = React.useState<FormRef>(null);

  const handleSubmit = () => {};

  const handleValidate = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required",
    };
  };
  return (
    <div id="page" data-test-id="component-app">
      <main id="main">
        <Form formRef={setFormRef} onSubmit={handleSubmit} onValidate={handleValidate}>
          <Field>
            <InputText fieldName="firstName" />
          </Field>
        </Form>
        <FormButton formRef={formRef}>Clicker</FormButton>
      </main>
    </div>
  );
};
