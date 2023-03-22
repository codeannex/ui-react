import React from "react";
import ReactDOM from "react-dom/client";

import { Form } from "./src/components/Form/Form";
import { Field } from "./src/components/Form/components/Field/Field";
import { FormButton } from "./src/components/Form/components/FormButton/FormButton";
import { Input } from "./src/components/Form/components/Input/Input/Input";
import { InputEmail } from "./src/components/Form/components/Input/InputEmail/InputEmail";
import { InputPassword } from "./src/components/Form/components/Input/InputPassword/InputPassword";
import { InputText } from "./src/components/Form/components/Input/InputText/InputText";
import { Radio } from "./src/components/Form/components/Radio/Radio";
import { TextArea } from "./src/components/Form/components/TextArea/TextArea";
import { FormRef } from "./src/components/Form/index";
import { Select } from "./src/components/Form/index";
import { Element } from "./src/core/Element/Element";

export const App = () => {
  // const [state, setState] = React.useState(0);
  const [formRef, setFormRef] = React.useState<FormRef>(null);

  // const getFormRef = (current) => {
  //   setFormRef(current);
  // };

  const handleClick = () => {
    // formRef?.controls.setError({ fieldName: "firstName", value: "This was required" });
    // formRef?.controls.updateValue({ fieldName: "firstName", value: "Happly Man" });
    // console.log(formRef?.controls.getValues());
    // console.log(formRef?.controls.getValue("firstName"));
    console.log(formRef);
  };

  const asyncTest = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve("Submitted successfully 🙌");
        reject();
      }, 2000);
    });
  };

  const handleSubmit = (values) => {
    // console.log(values);
  };

  const handleChange = (values) => {
    // console.log(values);
  };

  const handleValidate = (values) => {
    return {
      firstName: values.firstName ? undefined : "Required",
      lastName: values.lastName ? undefined : "Required",
      email: values.email ? undefined : "Required",
      select: values.select ? undefined : "Required",
      textarea: values.textarea ? undefined : "Required",
      radio: values.radio ? undefined : "Required",
    };
  };

  const handlePostSubmit = (form) => {
    console.log("post submit ========");
    console.log(form);
    console.log("post submit ========");
  };

  // React.useEffect(() => {
  //   let value = 0;
  //   setInterval(() => {
  //     setState(value);
  //     value = value + 1;
  //   }, 3000);
  // }, []);

  React.useEffect(() => {
    console.log("external ========");
    console.log(formRef);
    console.log("external ========");
  }, [formRef]);

  const selectOptions = [
    { value: "", label: "--Please choose an option--" },
    { value: "cow", label: "cow" },
    { value: "cat", label: "cat" },
    { value: "dog", label: "dog" },
  ];

  const radioOptions = [
    { value: "cow", label: "cow", name: "cow" },
    { value: "cat", label: "cat", name: "cat" },
    { value: "dog", label: "dog", name: "dog" },
  ];

  return (
    <div id="page" data-test-id="component-app">
      <main id="main">
        <Form
          proxyRef={setFormRef}
          onSubmit={handleSubmit}
          onChange={handleChange}
          onValidate={handleValidate}
          onPreSubmit={asyncTest}
          onPostSubmit={handlePostSubmit}
          validateOnSubmitOnly
          autoFocus
        >
          <Field fieldName={"firstName"} label="First Name">
            <InputText />
          </Field>
          <Field fieldName={"lastName"} label="Last Name">
            <InputText />
          </Field>
          <Field fieldName={"email"} label="Email">
            <InputEmail />
          </Field>
          <Field fieldName={"password"} label="Password">
            <InputPassword />
          </Field>
          <Field fieldName={"select"} label="Select">
            <Select options={selectOptions} />
          </Field>
          <Field fieldName={"radio"} label="Radio">
            <Radio options={radioOptions} />
          </Field>
          <Field fieldName={"textarea"} label="Text Area">
            <TextArea />
          </Field>
        </Form>
        {/* <p>{state.toString()}</p> */}
        <Element as="button" onClick={handleClick}>
          Click to test stuff
        </Element>
        <FormButton formRef={formRef}>Submit</FormButton>
      </main>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(<App />);
