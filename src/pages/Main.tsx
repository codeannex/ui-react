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
  LAST_NAME: "lastName",
  EMAIL: "email",
};

export const MainPage = () => {
  const [formRef, setFormRef] = React.useState<FormRef>(null);

  const handleClick = () => {
    formRef?.controls.setError({ field: "firstName", value: "This was required" });
  };

  const handleSubmit = () => {};

  const handleValidate = (values: Values) => {
    console.log("handleValidate ========");
    console.log(values);
    console.log("handleValidate ========");
    return {
      firstName: values.firstName ? undefined : "Required",
      lastName: values.lastName ? undefined : "Required",
      email: values.email ? undefined : "Required",
      password: values.password ? undefined : "Required",
      class: values.class ? undefined : "Required",
      classType: values.classType ? undefined : "Required",
      comment: values.comment ? undefined : "Required",
      poop: values.poop ? undefined : "Required",
    };
  };

  React.useEffect(() => {
    // console.log("external ========");
    // console.log(formRef);
    // console.log("external ========");
  }, [formRef]);

  return (
    <div id="page" data-test-id="component-app">
      <main id="main">
        <Form
          // validateOnSubmitOnly
          autoFocus
          formRef={setFormRef}
          onSubmit={handleSubmit}
          onValidate={handleValidate}
        >
          <Field label="First Name">
            <InputText field="firstName" placeholder="poop" />
          </Field>
          {/* <Field label="Last Name">
            <InputText field="lastName" />
          </Field> */}
          {/* <Field label="Email">
            <InputEmail field="email" />
          </Field> */}
          {/* <Field label="Password">
            <InputPassword field="password" />
          </Field> */}
          {/* <Field label="Class">
            <Select field="class" options={selectOptions} />
          </Field> */}
          {/* <Field label="Class Type">
            <Radio field="classType" options={radioOptions} />
          </Field> */}
          {/* <Field label="Comment">
            <TextArea field="comment" />
          </Field> */}
          {/* <Form.Control
            field={FIELD.FIRST_NAME}
            render={({ ref, error, value, onChange, onBlur }) => (
              <div>
                <label>First Name</label>
                <input type="text" value={value} ref={ref} onChange={onChange} onBlur={onBlur} />
                {error && <p>{error}</p>}
              </div>
            )}
          />
          <Form.Control
            field={FIELD.LAST_NAME}
            render={({ ref, error, value, onChange, onBlur }) => (
              <div>
                <label>Last Name</label>
                <input type="text" value={value} ref={ref} onChange={onChange} onBlur={onBlur} />
                {error && <p>{error}</p>}
              </div>
            )}
          /> */}
        </Form>
        <FormButton formRef={formRef}>Submit</FormButton>
        <button onClick={handleClick}>Click</button>
      </main>
    </div>
  );
};
