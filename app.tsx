import React from "react";
import ReactDOM from "react-dom/client";

import { Form } from "./src/components/client/Form/Form";
import { Field } from "./src/components/client/Form/components/Field/Field";
import { FormButton } from "./src/components/client/Form/components/FormButton/FormButton";
import { Input } from "./src/components/client/Form/components/Input/Input/Input";
import { InputEmail } from "./src/components/client/Form/components/Input/InputEmail/InputEmail";
import { InputPassword } from "./src/components/client/Form/components/Input/InputPassword/InputPassword";
import { InputText } from "./src/components/client/Form/components/Input/InputText/InputText";
import { Radio } from "./src/components/client/Form/components/Radio/Radio";
import { TextArea } from "./src/components/client/Form/components/TextArea/TextArea";
import { FormRef } from "./src/components/client/Form/index";
import { Select } from "./src/components/client/Form/index";
import { Element } from "./src/core/server/Element/Element";

export const App = () => {
  // const [state, setState] = React.useState(0);
  const [formRef, setFormRef] = React.useState<FormRef>(null);
  const svgRef = React.useRef<SVGElement | null>(null);

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
    // console.log("external ========");
    // console.log(formRef);
    // console.log("external ========");
  }, [formRef]);

  const selectOptions = [
    { value: "", label: "--Please choose an option--" },
    { value: "cow", label: "cow" },
    { value: "cat", label: "cat" },
    { value: "dog", label: "dog" },
  ];

  const radioOptions = [
    { id: "cow", value: "cow", label: "cow", name: "cow" },
    { id: "cat", value: "cat", label: "cat", name: "cat" },
    { id: "dog", value: "dog", label: "dog", name: "dog" },
  ];

  return (
    <div id="page" data-test-id="component-app">
      <main id="main">
        <Form
          classesField="form-field"
          classesError="errors"
          proxyRef={setFormRef}
          onSubmit={handleSubmit}
          onChange={handleChange}
          onValidate={handleValidate}
          onPreSubmit={asyncTest}
          onPostSubmit={handlePostSubmit}
          // validateOnSubmitOnly
          autoFocus
        >
          <Field label="First Name">
            <InputText fieldName="firstName" />
          </Field>
          <Field label="Password">
            <InputPassword fieldName="password" />
          </Field>
          {/* <Field fieldName={"password"} label="Password">
            <InputPassword />
          </Field> */}
          {/* <Field label="Select">
            <Select fieldName="select" options={selectOptions} />
          </Field> */}
          <Field label="Radio">
            <Radio options={radioOptions} fieldName="radio" classes="poopser" />
          </Field>
          {/* <Field fieldName={"textarea"} label="Text Area">
            <TextArea />
          </Field> */}
        </Form>
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
