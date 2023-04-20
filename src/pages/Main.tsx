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
    // console.log("handleValidate ========");
    // console.log(values);
    // console.log("handleValidate ========");
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
          <Element as={ELEMENT_OPTION_TYPE.DIV}>
            <Element as={ELEMENT_OPTION_TYPE.DIV}>
              <Label field="firstName" htmlFor="first-name" label="First Name" />
            </Element>
            <InputText field="firstName" id="first-name" />
            <Error field="firstName" as="div" />
          </Element>
          <Element as={ELEMENT_OPTION_TYPE.DIV}>
            <Element as={ELEMENT_OPTION_TYPE.DIV}>
              <Label field="lastName" htmlFor="last-name" label="Last Name" />
            </Element>
            <InputText field="lastName" id="last-name" />
            <Error field="lastName" as="div" />
          </Element>
          <Element as={ELEMENT_OPTION_TYPE.DIV}>
            <Element as={ELEMENT_OPTION_TYPE.DIV}>
              <Label field="email" htmlFor="email" label="Email" />
            </Element>
            <InputEmail field="email" id="email" />
            <Error field="email" as="div" />
          </Element>
          <Element as={ELEMENT_OPTION_TYPE.DIV}>
            <Element as={ELEMENT_OPTION_TYPE.DIV}>
              <Label field="password" htmlFor="password" label="Password" />
            </Element>
            <InputPassword field="password" id="password" />
            <Error field="password" as="div" />
          </Element>
          <Element as={ELEMENT_OPTION_TYPE.DIV}>
            <Element as={ELEMENT_OPTION_TYPE.DIV}>
              <Label field="class" htmlFor="class" label="Class" />
            </Element>
            <Select field="class" options={selectOptions} id="class" />
            <Error field="class" as="div" />
          </Element>
          <Element as={ELEMENT_OPTION_TYPE.DIV}>
            <Element as={ELEMENT_OPTION_TYPE.DIV}>
              <Label field="classType" htmlFor="classType" label="Class Type" />
            </Element>
            <Radio field="classType" options={radioOptions} id="classType" />
            <Error field="classType" as="div" />
          </Element>
          <Element as={ELEMENT_OPTION_TYPE.DIV}>
            <Element as={ELEMENT_OPTION_TYPE.DIV}>
              <Label field="comment" htmlFor="comment" label="Comment" />
            </Element>
            <TextArea field="comment" id="comment" />
            <Error field="comment" as="div" />
          </Element>

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
