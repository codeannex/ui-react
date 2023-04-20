# Form

## Table of Contents

1. [Declarative Form Components](#declarative)
2. [Basic Setup](#basicsetup)
3. [Form Controls](#formcontrols)

## Declarative Form Components

Declarative form components are intended to be used with simple forms. When the components are setup properly the following functionalities are handled.

- Validation
- Error handling
- Third point

## Basic Setup

The most basic setup can be achieved by the following example. The `formRef` and `onSubmit` props are required for the form to work with its most basic usage.

```
const [formRef, setFormRef] = React.useState<FormRef>(null);

const handleSubmit = (values: Value) => {
  // code...
};

<Form
  formRef={setFormRef}
  onSubmit={handleSubmit}
>
  <div>
    <Label field="name" htmlFor="name" label="Name" />
    <InputText field="name" id="name" />
    <Error field="name" as="div" />
  </div>
</Form>
<FormButton formRef={formRef}>Submit</FormButton>
```

## Form Props

| Props                | Required |
| -------------------- | :------: |
| autoFocus            |          |
| classesError         |    X     |
| formRef              |          |
| validateOnSubmitOnly |          |
| onChange             |          |
| onPreSubmit          |          |
| onPostSubmit         |          |
| onSubmit             |    X     |
| onValidate           |          |

## Props Definitions

**autoFocus` ?`** :

Auto focus is a feature that works in conjunction with the forms internal validation process. When form validation is enabled auto focus will allow the form to determine the first identified field error according to DOM order and set the focus to that field following the failed submission. (see [Validation](#installation))

---

**classesError` ?`** :

Sets CSS class/classes on all the form error fields.

---

**formRef` *`** :

Exposes form state and controls to the caller component (see [Installation](#installation)). This prop is required giving the submit button access to the submit method within the Form component. Regardless of whether the **FormButton** component is used as seen in the example, or a standard html button is declared, the call to the submit method must be made via form controls to submit the form. The **FormButton** handles this under the hood while using a standard html button requires adding the call to the onClick handler and accessing submit through the controls object returned in the **formRef**.

---

**validateOnSubmitOnly` ?`** :

Disallows the occurrence of validation when form state changes are detected which typically happens subsequent to any change event, and restricts validation to occur only during form submission.

---

**onChange` ?`** :

Allows the caller component to track changes. The callback will fire on any change event passing the forms current state values.

---

**onPreSubmit` ?`** :

Allows the caller component to track the submission of the form. The callback is fired after the form has passed validaion before completing the pre-submit phase. This callback must return a promise resolve or the form will not follow through into the post-submit phase.

---

**onPostSubmit` ?`** :

Allows the caller component to track the completion of a succcessfull form submission.

---

**onSubmit` *`** :

A required callback needed to handle form submissions. onSubmit is called after a successful form submission exposing the form field values to the caller component through the values parameter. The values associated to the form fields can then be used to handle the submission.

---

**onValidate` ?`** :

Returns validators to the form used for validaton. Validation is constantly tracked and when any change event is fired they are updated accrding to the logic of the validators (see [Installation](#installation)).

## Form Ref Object

The form ref object contains two objects; the state and controls objects.

### State

**preSubmit** :

A boolean value indicating the status of the pre submit flag.

---

**postSubmit** :

A boolean value indicating the status of the post submit flag.

---

**submit** :

A boolean value indicating the status of the submit flag.

---

**errors** :

An object containing the key/value pairs of error states. The pairs are diplayed by the `field` name (key) and the (value) as either the error message rendered when a field has a valid error or undefined when the error has been cleared. If form validation is performing validation on every change event the errors are set when the form loads and rendered after a fields touched state is set to true while validation fails (see [Installation](#installation)).

---

**touched** :

A boolean value indicating the status of the post submit flag.

---

**validators** :

A boolean value indicating the status of the post submit flag.

---

**values** :

A boolean value indicating the status of the post submit flag.

---
