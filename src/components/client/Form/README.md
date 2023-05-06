# Form

The form component handles all the complexities surrounding form submission, validation and error handling.

## Table of Contents

1. [Props](#props)
2. [Props Definitions](#props-definitions)
3. [Form Controls](#formcontrols)

## Props

| Props                | Required |
| -------------------- | :------: |
| autoFocus            |          |
| classesError         |          |
| formRef              |          |
| validateOnSubmitOnly |          |
| onChange             |          |
| onPreSubmit          |          |
| onPostSubmit         |          |
| onSubmit             |    X     |
| onValidate           |          |

## Props Definitions

Descriptions of the `Form` components props.

**autoFocus` ?`**: Auto focus is a feature that works in conjunction with the forms internal validation process. When form validation is enabled auto focus will allow the form to determine the first identified field error according to DOM order and set the focus to that field following the failed submission. (see [Validation](#installation))

---

**classesError` ?`**: Sets CSS class/classes on all the form error fields.

---

**formRef` *`**: Exposes form state and controls to the caller component (see [Installation](#installation)). This prop is required giving the submit button access to the submit method within the Form component. Regardless of whether the **FormButton** component is used as seen in the example, or a standard html button is declared, the call to the submit method must be made via form controls to submit the form. The **FormButton** handles this under the hood while using a standard html button requires adding the call to the onClick handler and accessing submit through the controls object returned in the **formRef**.

---

**validateOnSubmitOnly` ?`**: Disallows the occurrence of validation when form state changes are detected which typically happens subsequent to any change event, and restricts validation to occur only during form submission.

---

**onChange` ?`**: Allows the caller component to track changes. The callback will fire on any change event passing the forms current state values.

---

**onPreSubmit` ?`**: Allows the caller component to track the submission of the form. The callback is fired after the form has passed validaion before completing the pre-submit phase. This callback must return a promise resolve or the form will not follow through into the post-submit phase.

---

**onPostSubmit` ?`**: Allows the caller component to track the completion of a succcessfull form submission.

---

**onSubmit` *`**: A required callback needed to handle form submissions. onSubmit is called after a successful form submission exposing the form field values to the caller component through the values parameter. The values associated to the form fields can then be used to handle the submission.

---

**onValidate` ?`**: Returns validators to the form used for validaton. Validation is constantly tracked and when any change event is fired they are updated accrding to the logic of the validators (see [Installation](#installation)).

---

---

## Form Ref Object

The form ref object is comprised of two objects, namely the state and controls objects. The state object contains the forms most current state of the touched, errors, validators, values and various flags pre-submit, submit and post-submit, for tracking the forms current progress.

### Usage

```
const [formRef, setFormRef] = React.useState<FormRef>(null);

const { controls, state } = formRef;

<Form formRef={setFormRef}>
  <Form.Control />
</Form>
```

### State

The state object contains all of the forms most recent state.

```
state = {
  touched: {},
  errors: {},
  validators: {},
  values: {}
  formLoadComplete: true,
  preSubmit: false,
  submit: false,
  postSubmit: false
}
```

**preSubmit**: A boolean value indicating the status of the pre submit flag.

---

**postSubmit**: A boolean value indicating the status of the post submit flag.

---

**submit**: A boolean value indicating the status of the submit flag.

---

**errors**: An object containing the key/value pairs of error states. The pairs are diplayed by the `field` name (key) and the (value) as either the error message rendered when a field has a valid error or undefined when the error has been cleared. If form validation is performing validation on every change event the errors are set when the form loads and rendered after a fields touched state is set to true while validation fails (see [Installation](#installation)).

---

**touched**: A boolean value indicating the status of the post submit flag.

---

**validators**: A boolean value indicating the status of the post submit flag.

---

**values**: A boolean value indicating the status of the post submit flag.

---

**formLoadComplete**: A boolean value indicating the form has completed the initial load.

---

### Controls

The `controls` object allows access to the forms internal methods and can be used to handle any of the methods objectives from outside the `Form` component context.

**clearForm**: Used to clear the form values and reset the form state. Calling this method will set the form in its origin pristine state.

---

**getValue**: Return the current value of the requested field. The method accepts a single parameter of the field requested. The parameter would be the field name of the field in question.

---

**getValues**: Return the complete values object containing all values in their most current state.

---

**setError**: Sets the error state of a particular field. The method accepts two parameters, the field name being targeted for change, and the string value of the error message for rendering.

---

**setErrors**: Sets the error state of multiple fields. The method accepts a single parameter consisting of the `Error` object containing key/value pairs of the field name and error message for rendering. See example below:

```
setErrors({ firstName: "John", lastName: "Doe" });
```

---

**setTouched**: Sets the touched value of the targeted field. The method accepts two parameters, the field name being targeted for change, and the boolean value of the desired touch state true/false.

---

**submit**: Initializes the submit process of the form.

---

**updateValue**: Sets the value of the targeted field. The method accepts two parameters, the field name being targeted for change, and the value of the change.

---
