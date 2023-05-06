# Basic Form Setup

This tutorial walks through setting up a form using the base components. Features will be added and explained along the way to give an overall view of how the `Form` components work. This example will build a basic signup form to illustrate how the main features are implemented.

## Step 1

Import the `Form` component and add the minimum required code for creating the first form field. After adding the code seen below, the form will contain a single field. Technically the form will work, however the form has no limitations enabled and will submit the form regardless of the field state. The base form components allow adding standard html form elements to the form by wrapping them with the base components. The base components handle all the heavy lifting of form submission, validation, and error handling, while allowing access to the current state as well as controls for updating or manipulating form state.

```
import { Form } from "@codeannex/ui-react";

const handleSubmit = (values: Value) => {
  // code...
};

<Form onSubmit={handleSubmit}>
  <Form.Control
    field="email"
    render={({ ref, error, value, onChange, onBlur }) => (
      <div>
        <div>
          <label htmlFor="email">
            Name
            <span aria-hidden="true" aria-required="true" aria-label="required">
              *
            </span>
          </label>
        </div>
        <input
          aria-describedby="info-email error-email"
          aria-invalid={!!error}
          id="email"
          required
          type="email"
          value={value}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
        />
        {!error && <div id="info-email">Enter email</div>}
        {error && (
          <div
            id="error-email"
            role="alert"
          >
            {error}
          </div>
        )}
      </div>
    )}
  />
  <button type="submit">Submit</button>
</Form>
```

## Step 2

Lets add the remaining fields to complete the form. Adding password and password confirm fields gives us the remaining fields needed to complete the signup form.

`*` To reiterate the form currently has no special functionality. Next we will learn how validation works.

```
import { Form } from "@codeannex/ui-react";

const handleSubmit = (values: Value) => {
  // code...
};

<Form onSubmit={handleSubmit}>
  <Form.Control
    field="email"
    render={({ ref, error, value, onChange, onBlur }: any) => (
      <div>
        <div>
          <label htmlFor="email">
            Name
            <span aria-hidden="true" aria-required="true" aria-label="required">
              *
            </span>
          </label>
        </div>
        <input
          aria-describedby="info-email error-email"
          aria-invalid={!!error}
          id="email"
          required
          type="email"
          value={value}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
        />
        {!error && <div id="info-email">Enter email</div>}
        {error && (
          <div id="error-email" role="alert">
            {error}
          </div>
        )}
      </div>
    )}
  />
  <Form.Control
    field="password"
    render={({ ref, error, value, onChange, onBlur }: any) => (
      <div>
        <div>
          <label htmlFor="password">
            Name
            <span aria-hidden="true" aria-required="true" aria-label="required">
              *
            </span>
          </label>
        </div>
        <input
          aria-describedby="info-password error-password"
          aria-invalid={!!error}
          id="password"
          required
          type="password"
          value={value}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
        />
        {!error && <div id="info-password">Enter password</div>}
        {error && (
          <div id="error-password" role="alert">
            {error}
          </div>
        )}
      </div>
    )}
  />
  <Form.Control
    field="confirm"
    render={({ ref, error, values, value, onChange, onBlur }: any) => {
      return (
        <div>
          <div>
            <label htmlFor="confirm">
              Name
              <span aria-hidden="true" aria-required="true" aria-label="required">
                *
              </span>
            </label>
          </div>
          <input
            aria-describedby="info-confirm error-confirm"
            aria-invalid={!!error}
            id="confirm"
            required
            type="password"
            value={value}
            ref={ref}
            disabled={!values?.password}
            onChange={onChange}
            onBlur={onBlur}
          />
          {!error && <div id="info-confirm">Confirm password</div>}
          {error && (
            <div id="error-confirm" role="alert">
              {error}
            </div>
          )}
        </div>
      );
    }}
  />
  <button className="submit" type="submit">
    Submit
  </button>
</Form>
```

## Step 3

Lets add validation to the form. Validation is registered into the form via the `onValidate` prop. Below is a basic example of how we can create `validators` for the three fields in our form.

`*` An important item to note is the validators can do any type of validation, however the return value must be either `undefined` for valid input, or `error message` for invalid input. When the input is invalid the error message provided will be render to the associated field.

`* Currently` Additionally the form will validate as the user causes change events to fire. However the form will not register a fields error state for the first time until the fields `touched` state has been set. This occurs after the onBlur event fires when the user leaves the field. This behavior can be changed by passing the validateOnSubmitOnly prop into the `Form` component `see step 4 below.`

```
const handleValidators = (values: Values) => {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const validateEmail = () => {
    if (!values.email) {
      return "* Email is required";
    }

    if (!values.email.match(validRegex)) {
      return "* Email is invalid";
    }

    return undefined;
  };

  const validatePassword = () => {
    return values.password ? undefined : "* Password is missing";
  };

  const validateConfirm = () => {
    if (values.password && !values.confirm) {
      return "* Password is required";
    }

    if (values.password !== values.confirm) {
      return "* Passwords do not match";
    }

    return undefined;
  };

  return {
    email: validateEmail(),
    confirm: validateConfirm(),
    password: validatePassword(),
  };
};
```

Here is the full code thus far:

```
export const MainPage = () => {
  const handleSubmit = () => {};

  const handleValidators = (values: Values) => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const validateEmail = () => {
      if (!values.email) {
        return "* Email is required";
      }

      if (!values.email.match(validRegex)) {
        return "* Email is invalid";
      }

      return undefined;
    };

    const validatePassword = () => {
      return values.password ? undefined : "* Password is missing";
    };

    const validateConfirm = () => {
      if (values.password && !values.confirm) {
        return "* Password is required";
      }

      if (values.password !== values.confirm) {
        return "* Passwords do not match";
      }

      return undefined;
    };

    return {
      email: validateEmail(),
      confirm: validateConfirm(),
      password: validatePassword(),
    };
  };

  return (
    <Form onSubmit={handleSubmit} onValidate={handleValidators}>
      <Form.Control
        field="email"
        render={({ ref, error, value, onChange, onBlur }: any) => (
          <div>
            <div>
              <label htmlFor="email">
                Name
                <span aria-hidden="true" aria-required="true" aria-label="required">
                  *
                </span>
              </label>
            </div>
            <input
              aria-describedby="info-email error-email"
              aria-invalid={!!error}
              id="email"
              required
              type="email"
              value={value}
              ref={ref}
              onChange={onChange}
              onBlur={onBlur}
            />
            {!error && <div id="info-email">Enter email</div>}
            {error && (
              <div id="error-email" role="alert">
                {error}
              </div>
            )}
          </div>
        )}
      />
      <Form.Control
        field="password"
        render={({ ref, error, value, onChange, onBlur }: any) => (
          <div>
            <div>
              <label htmlFor="password">
                Name
                <span aria-hidden="true" aria-required="true" aria-label="required">
                  *
                </span>
              </label>
            </div>
            <input
              aria-describedby="info-password error-password"
              aria-invalid={!!error}
              id="password"
              required
              type="password"
              value={value}
              ref={ref}
              onChange={onChange}
              onBlur={onBlur}
            />
            {!error && <div id="info-password">Enter password</div>}
            {error && (
              <div id="error-password" role="alert">
                {error}
              </div>
            )}
          </div>
        )}
      />
      <Form.Control
        field="confirm"
        render={({ ref, error, values, value, onChange, onBlur }: any) => {
          return (
            <div>
              <div>
                <label htmlFor="confirm">
                  Name
                  <span aria-hidden="true" aria-required="true" aria-label="required">
                    *
                  </span>
                </label>
              </div>
              <input
                aria-describedby="info-confirm error-confirm"
                aria-invalid={!!error}
                id="confirm"
                required
                type="password"
                value={value}
                ref={ref}
                disabled={!values?.password}
                onChange={onChange}
                onBlur={onBlur}
              />
              {!error && <div id="info-confirm">Confirm password</div>}
              {error && (
                <div id="error-confirm" role="alert">
                  {error}
                </div>
              )}
            </div>
          );
        }}
      />
      <button className="submit" type="submit">
        Submit
      </button>
    </Form>
  );
};
```

## Step 4 _<sub><sup><span style="color:#c3e88d">optional</span></sup></sub>_

So far the form is setup to work properly and no further setup is required. However validation during change events is not always desired. We can regulate validation to only during form submission by passing validateOnSubmitOnly to the `Form` component.

```
<Form
  validateOnSubmitOnly
  onSubmit={handleSubmit}
  onValidate={handleValidate}
>
```

Another optional feature allows enabling auto focus by passing `autoFocus` to the `Form` component. This prop will enable the form to set focus on the first error found in standard DOM order. This behavior will occur during form submission if validation fails and errors are triggered.

```
<Form
  autoFocus
  onSubmit={handleSubmit}
  onValidate={handleValidate}
>
```
