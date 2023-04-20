# Basic Form Setup

This tutorial walks through a basic form setup. Features will be added and explained along the way to give an overall view of how the `Form` component works.

## Step 1

Import the `Form` component and add the minimum required markup. The form has a single field labeled first name. This form will technically work, however it has no limitations or features enabled and will submit the form regardless of any field state.

`*` An important item to note is the `field` prop is set on every sibling component. This is required for the forms internal validation to work and is the key to providing a relationship between the form elements. Ensuring the htmlFor value matches the input id is important for accessibility.

```
import {
  Form,
  Label,
  InputText,
  Error,
  InputEmail,
  FormButton,
} from "@codeannex/ui-react";

const [formRef, setFormRef] = React.useState<FormRef>(null);

const handleSubmit = (values: Value) => {
  // code...
};

<Form
  formRef={setFormRef}
  onSubmit={handleSubmit}
>
  <div>
    <Label field="firstName" htmlFor="first-name" label="First Name" />
    <InputText field="firstName" id="first-name" />
    <Error field="firstName" as="div" />
  </div>
</Form>
<FormButton formRef={formRef}>Submit</FormButton>
```

## Step 2

Lets add a couple more fields to make the form more realistic. Adding two more fields gives us a more realistic form containing first, last names and email.

`*` To reiterate the form currently has no special functionality. Next we will learn how validation works.

```
import {
  Form,
  Label,
  InputText,
  Error,
  InputEmail,
  FormButton,
} from "@codeannex/ui-react";

const [formRef, setFormRef] = React.useState<FormRef>(null);

const handleSubmit = (values: Value) => {
  // code...
};

<Form
  formRef={setFormRef}
  onSubmit={handleSubmit}
>
  <div>
    <Label field="firstName" htmlFor="first-name" label="First Name" />
    <InputText field="firstName" id="first-name" />
    <Error field="firstName" as="div" />
  </div>
  <div>
    <Label field="lastName" htmlFor="last-name" label="Last Name" />
    <InputText field="lastName" id="last-name" />
    <Error field="lastName" as="div" />
  </div>
  <div>
    <Label field="email" htmlFor="email" label="Email" />
    <InputText field="email" id="email" />
    <Error field="email" as="div" />
  </div>
</Form>
<FormButton formRef={formRef}>Submit</FormButton>
```

## Step 3

Lets add validation to the form. Validation is registered into the form via the `onValidate` prop. Below is a basic example of how we can create `validators` for the three fields in our form. In this example the first and last name fields are passing validation as long as a text value exists. The email shows a slightly more complicated validation.

`*` An important item to note is the validators can do any type of validation, however the return value must be either `undefined` for valid input, or `error message` for invalid input. When the input is invalid the error message provided will be render to the associated field.

`* Currently` The form will validate as the user causes change events to fire. However the error message will not render as an `invalid` field until the `touched` state of that field has been set to true while validation fails. This can be tested by simply tabbing off any of the fields. The blur event will cause the `touched` state to change and the fields empty state will fail validation triggering the error to render. The current setup will track every change toggling the errors depending on the field state.

`*` The validation process described is the default behavior of the `Form` component when interacting with its declarative components. If you need more robust control over this process see instruction on how to use the `Control` component.

```
const handleValidate = (values: Values) => {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const validateEmail = (value: string) => {
    return value.match(validRegex);
  };

  return {
    firstName: values.firstName ? undefined : "* First name is missing",
    lastName: values.lastName ? undefined : "* Last name is missing",
    email:
      values.email && validateEmail(values.email)
        ? undefined
        : "* Email is missing",
  };
};
```

Here is the full code thus far:

```
import {
  Values,
  Form,
  Label,
  InputText,
  Error,
  InputEmail,
  FormButton,
} from "@codeannex/ui-react";

const [formRef, setFormRef] = React.useState<FormRef>(null);

const handleSubmit = (values: Value) => {
  // code...
};

const handleValidate = (values: Values) => {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const validateEmail = (value: string) => {
    return value.match(validRegex);
  };

  return {
    firstName: values.firstName ? undefined : "* First name is missing",
    lastName: values.lastName ? undefined : "* Last name is missing",
    email:
      values.email && validateEmail(values.email)
        ? undefined
        : "* Email is missing",
  };
};

<Form
  formRef={setFormRef}
  onSubmit={handleSubmit}
  onValidate={handleValidate}
>
  <div>
    <Label field="firstName" htmlFor="first-name" label="First Name" />
    <InputText field="firstName" id="first-name" />
    <Error field="firstName" as="div" />
  </div>
  <div>
    <Label field="lastName" htmlFor="last-name" label="Last Name" />
    <InputText field="lastName" id="last-name" />
    <Error field="lastName" as="div" />
  </div>
  <div>
    <Label field="email" htmlFor="email" label="Email" />
    <InputText field="email" id="email" />
    <Error field="email" as="div" />
  </div>
</Form>
<FormButton formRef={formRef}>Submit</FormButton>
```

## Step 4 _<sub><sup><span style="color:#c3e88d">optional</span></sup></sub>_

So far the form is setup to work properly and no further setup is required provided we're ok with the current behavior. However validation during change events is not always desired. If we would like to regulate validation to only occur during form submission all that needs to be done is to add the prop validateOnSubmitOnly.

```
<Form
  validateOnSubmitOnly
  formRef={setFormRef}
  onSubmit={handleSubmit}
  onValidate={handleValidate}
>
```

Another nice feature option is to add the `autoFocus` prop. This prop will enable the form to set focus on the first error found in standard DOM order. This behavior will occur during form submission if validation fails and errors are rendered.

```
<Form
  autoFocus
  formRef={setFormRef}
  onSubmit={handleSubmit}
  onValidate={handleValidate}
>
```
