import React from "react";

import { Form, FormButton, FormRef, Values } from "@components/client/Form";

import { ELEMENT_OPTION_TYPE, Element } from "@core/server/Element/Element";

export const FormPage = () => {
  /** Control */
  const [formRefControl1, setFormRefControl1] = React.useState<FormRef>(null);
  const [formRefControl2, setFormRefControl2] = React.useState<FormRef>(null);
  const [formRefControl3, setFormRefControl3] = React.useState<FormRef>(null);
  const [formRefControl4, setFormRefControl4] = React.useState<FormRef>(null);
  const [formRefControl5, setFormRefControl5] = React.useState<FormRef>(null);
  const [formRefControl6, setFormRefControl6] = React.useState<FormRef>(null);
  const [formRefControl7, setFormRefControl7] = React.useState<FormRef>(null);

  const handleSubmit = () => {};

  /** Control */
  const handleValidateControl1 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required Control 1",
      email: values.email ? undefined : "Required Control 1",
      password: values.password ? undefined : "Required Control 1",
    };
  };

  const handleValidateControl3 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required Control 3",
      lastName: values.lastName ? undefined : "Required Control 3",
      email: values.email ? undefined : "Required Control 3",
      password: values.password ? undefined : "Required Control 3",
    };
  };

  const handleValidateControl4 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required Control 4",
      lastName: values.lastName ? undefined : "Required Control 4",
      email: values.email ? undefined : "Required Control 4",
      password: values.password ? undefined : "Required Control 4",
    };
  };

  const handleValidateControl5 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required Control 5",
      lastName: values.lastName ? undefined : "Required Control 5",
      email: values.email ? undefined : "Required Control 5",
      password: values.password ? undefined : "Required Control 5",
    };
  };

  const handleValidateControl6 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required Control 6",
      lastName: values.lastName ? undefined : "Required Control 6",
      email: values.email ? undefined : "Required Control 6",
      password: values.password ? undefined : "Required Control 6",
    };
  };

  const handleValidateControl7 = (values: Values) => {
    return {
      firstName: values.firstName ? undefined : "Required Control 7",
    };
  };

  /** Control */
  const handleClearControl1 = () => {
    formRefControl1?.controls.clearForm();
  };

  const handleClearControl2 = () => {
    formRefControl2?.controls.clearForm();
  };

  const handleClearControl3 = () => {
    formRefControl3?.controls.clearForm();
  };

  const handleClearControl4 = () => {
    formRefControl4?.controls.clearForm();
  };

  const handleClearControl5 = () => {
    formRefControl5?.controls.clearForm();
  };

  const handleClearControl6 = () => {
    formRefControl6?.controls.clearForm();
  };

  const handleClearControl7 = () => {
    formRefControl6?.controls.clearForm();
  };

  return (
    <div id="page" data-test-id="component-app">
      <main id="main">
        {/* Control Form 1 ======== */}
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-1">
          <Form
            formRef={setFormRefControl1}
            onSubmit={handleSubmit}
            onValidate={handleValidateControl1}
          >
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-1-first-name-input">
              <Form.Control
                field="firstName"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-1-first-name">
                        First Name
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-1-info-first-name control-form-1-error-first-name"
                      aria-invalid={!!error}
                      aria-required="true"
                      id="control-form-1-first-name"
                      type="text"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-1-info-first-name">Enter your first name</div>}
                    {error && (
                      <div
                        id="control-form-1-error-first-name"
                        className="control-form-1-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-1-last-name-input">
              <Form.Control
                field="lastName"
                render={({ ref, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-1-last-name">Last Name</label>
                    </div>
                    <input
                      aria-describedby="control-form-1-info-last-name control-form-1-error-last-name"
                      id="control-form-1-last-name"
                      type="text"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    <div id="control-form-1-info-last-name">Enter your last name</div>
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-1-email-input">
              <Form.Control
                field="email"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-1-email">
                        Email
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-1-info-email control-form-1-error-email"
                      aria-invalid={!!error}
                      aria-required="true"
                      id="control-form-1-email"
                      type="email"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-1-info-email">Enter your email</div>}
                    {error && (
                      <div
                        id="control-form-1-error-email"
                        className="control-form-1-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-1-password-input">
              <Form.Control
                field="password"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-1-password">
                        Password
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-1-info-password control-form-1-error-password"
                      aria-invalid={!!error}
                      aria-required="true"
                      id="control-form-1-password"
                      type="password"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-1-info-password">Enter your password</div>}
                    {error && (
                      <div
                        id="control-form-1-error-password"
                        className="control-form-1-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
          </Form>
          <FormButton id="control-form-1-submit-btn" formRef={formRefControl1}>
            Clicker
          </FormButton>
          <Element as="button" id="control-form-1-clear-btn" onClick={handleClearControl1}>
            Clear
          </Element>
        </Element>
        {/* Control Form 1 ======== END */}

        {/* Control Form 2 ======== */}
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-2">
          <Form formRef={setFormRefControl2} onSubmit={handleSubmit}>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-2-first-name-input">
              <Form.Control
                field="firstName"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-2-first-name">
                        First Name
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-2-info-first-name control-form-2-error-first-name"
                      aria-invalid={!!error}
                      aria-required="true"
                      id="control-form-2-first-name"
                      type="text"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-2-info-first-name">Enter your first name</div>}
                    {error && (
                      <div
                        id="control-form-2-error-first-name"
                        className="control-form-2-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-2-last-name-input">
              <Form.Control
                field="lastName"
                render={({ ref, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-2-last-name">Last Name</label>
                    </div>
                    <input
                      aria-describedby="control-form-2-info-last-name control-form-2-error-last-name"
                      id="control-form-2-last-name"
                      type="text"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    <div id="control-form-2-info-last-name">Enter your last name</div>
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-2-email-input">
              <Form.Control
                field="email"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-2-email">
                        Email
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-2-info-email control-form-2-error-email"
                      aria-invalid={!!error}
                      aria-required="true"
                      id="control-form-2-email"
                      type="email"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-2-info-email">Enter your email</div>}
                    {error && (
                      <div
                        id="control-form-2-error-email"
                        className="control-form-2-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-2-password-input">
              <Form.Control
                field="password"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-2-password">
                        Password
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-2-info-password control-form-2-error-password"
                      aria-invalid={!!error}
                      aria-required="true"
                      id="control-form-2-password"
                      type="password"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-2-info-password">Enter your password</div>}
                    {error && (
                      <div
                        id="control-form-2-error-password"
                        className="control-form-2-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
          </Form>
          <FormButton id="control-form-2-submit-btn" formRef={formRefControl2}>
            Clicker
          </FormButton>
          <Element as="button" id="control-form-2-clear-btn" onClick={handleClearControl2}>
            Clear
          </Element>
        </Element>
        {/* Control Form 2 ======== END */}

        {/* Control Form 3 ======== */}
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-3">
          <Form
            formRef={setFormRefControl3}
            onSubmit={handleSubmit}
            onValidate={handleValidateControl3}
          >
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-3-first-name-input">
              <Form.Control
                field="firstName"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-3-first-name">
                        First Name
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-3-info-first-name control-form-3-error-first-name"
                      aria-invalid={!!error}
                      aria-required="true"
                      id="control-form-3-first-name"
                      type="text"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-3-info-first-name">Enter your first name</div>}
                    {error && (
                      <div
                        id="control-form-3-error-first-name"
                        className="control-form-3-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-3-last-name-input">
              <Form.Control
                field="lastName"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-3-last-name">
                        First Name
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-3-info-last-name control-form-3-error-last-name"
                      aria-invalid={!!error}
                      aria-required="true"
                      id="control-form-3-last-name"
                      type="text"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-3-info-last-name">Enter your first name</div>}
                    {error && (
                      <div
                        id="control-form-3-error-last-name"
                        className="control-form-3-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-3-email-input">
              <Form.Control
                field="email"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-3-email">
                        Email
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-3-info-email control-form-3-error-email"
                      aria-invalid={!!error}
                      aria-required="true"
                      id="control-form-3-email"
                      type="email"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-3-info-email">Enter your email</div>}
                    {error && (
                      <div
                        id="control-form-3-error-email"
                        className="control-form-3-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-3-password-input">
              <Form.Control
                field="password"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-3-password">
                        Password
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-3-info-password control-form-3-error-password"
                      aria-invalid={!!error}
                      aria-required="true"
                      id="control-form-3-password"
                      type="password"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-3-info-password">Enter your password</div>}
                    {error && (
                      <div
                        id="control-form-3-error-password"
                        className="control-form-3-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
          </Form>
          <FormButton id="control-form-3-submit-btn" formRef={formRefControl3}>
            Clicker
          </FormButton>
          <Element as="button" id="control-form-3-clear-btn" onClick={handleClearControl3}>
            Clear
          </Element>
        </Element>
        {/* Control Form 3 ======== END */}

        {/* Control Form 4 ======== */}
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-4">
          <Form
            formRef={setFormRefControl4}
            validateOnSubmitOnly
            onSubmit={handleSubmit}
            onValidate={handleValidateControl4}
          >
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-4-first-name-input">
              <Form.Control
                field="firstName"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-4-first-name">
                        First Name
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-4-info-first-name control-form-4-error-first-name"
                      aria-invalid={!!error}
                      aria-required="true"
                      id="control-form-4-first-name"
                      type="text"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-4-info-first-name">Enter your first name</div>}
                    {error && (
                      <div
                        id="control-form-4-error-first-name"
                        className="control-form-4-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-4-last-name-input">
              <Form.Control
                field="lastName"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-4-last-name">
                        First Name
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-4-info-last-name control-form-4-error-last-name"
                      aria-invalid={!!error}
                      aria-required="true"
                      id="control-form-4-last-name"
                      type="text"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-4-info-last-name">Enter your first name</div>}
                    {error && (
                      <div
                        id="control-form-4-error-last-name"
                        className="control-form-4-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-4-email-input">
              <Form.Control
                field="email"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-4-email">
                        Email
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-4-info-email control-form-4-error-email"
                      aria-invalid={!!error}
                      aria-required="true"
                      id="control-form-4-email"
                      type="email"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-4-info-email">Enter your email</div>}
                    {error && (
                      <div
                        id="control-form-4-error-email"
                        className="control-form-4-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-4-password-input">
              <Form.Control
                field="password"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-4-password">
                        Password
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-4-info-password control-form-4-error-password"
                      aria-invalid={!!error}
                      aria-required="true"
                      id="control-form-4-password"
                      type="password"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-4-info-password">Enter your password</div>}
                    {error && (
                      <div
                        id="control-form-4-error-password"
                        className="control-form-4-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
          </Form>
          <FormButton id="control-form-4-submit-btn" formRef={formRefControl4}>
            Clicker
          </FormButton>
          <Element as="button" id="control-form-4-clear-btn" onClick={handleClearControl4}>
            Clear
          </Element>
        </Element>
        {/* Control Form 4 ======== END */}

        {/* Control Form 5 ======== */}
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-5">
          <Form
            autoFocus
            formRef={setFormRefControl5}
            onSubmit={handleSubmit}
            onValidate={handleValidateControl5}
          >
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-5-first-name-input">
              <Form.Control
                field="firstName"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-5-first-name">
                        First Name
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-5-info-first-name control-form-5-error-first-name"
                      aria-invalid={!!error}
                      aria-required="true"
                      id="control-form-5-first-name"
                      type="text"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-5-info-first-name">Enter your first name</div>}
                    {error && (
                      <div
                        id="control-form-5-error-first-name"
                        className="control-form-5-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-5-last-name-input">
              <Form.Control
                field="lastName"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-5-last-name">
                        First Name
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-5-info-last-name control-form-5-error-last-name"
                      aria-invalid={!!error}
                      aria-required="true"
                      id="control-form-5-last-name"
                      type="text"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-5-info-last-name">Enter your first name</div>}
                    {error && (
                      <div
                        id="control-form-5-error-last-name"
                        className="control-form-5-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-5-email-input">
              <Form.Control
                field="email"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-5-email">
                        Email
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-5-info-email control-form-5-error-email"
                      aria-invalid={!!error}
                      aria-required="true"
                      id="control-form-5-email"
                      type="email"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-5-info-email">Enter your email</div>}
                    {error && (
                      <div
                        id="control-form-5-error-email"
                        className="control-form-5-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-5-password-input">
              <Form.Control
                field="password"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-5-password">
                        Password
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-5-info-password control-form-5-error-password"
                      aria-invalid={!!error}
                      aria-required="true"
                      id="control-form-5-password"
                      type="password"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-5-info-password">Enter your password</div>}
                    {error && (
                      <div
                        id="control-form-5-error-password"
                        className="control-form-5-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
          </Form>
          <FormButton id="control-form-5-submit-btn" formRef={formRefControl5}>
            Clicker
          </FormButton>
          <Element as="button" id="control-form-5-clear-btn" onClick={handleClearControl5}>
            Clearå
          </Element>
        </Element>
        {/* Control Form 5 ======== END */}

        {/* Control Form 6 ======== */}
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-6">
          <Form
            autoFocus
            validateOnSubmitOnly
            formRef={setFormRefControl6}
            onSubmit={handleSubmit}
            onValidate={handleValidateControl6}
          >
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-6-first-name-input">
              <Form.Control
                field="firstName"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-6-first-name">
                        First Name
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-6-info-first-name control-form-6-error-first-name"
                      aria-invalid={!!error}
                      aria-required="true"
                      id="control-form-6-first-name"
                      type="text"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-6-info-first-name">Enter your first name</div>}
                    {error && (
                      <div
                        id="control-form-6-error-first-name"
                        className="control-form-6-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-6-last-name-input">
              <Form.Control
                field="lastName"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-6-last-name">
                        First Name
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-6-info-last-name control-form-6-error-last-name"
                      aria-invalid={!!error}
                      aria-required="true"
                      id="control-form-6-last-name"
                      type="text"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-6-info-last-name">Enter your first name</div>}
                    {error && (
                      <div
                        id="control-form-6-error-last-name"
                        className="control-form-6-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-6-email-input">
              <Form.Control
                field="email"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-5-email">
                        Email
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-6-info-email control-form-6-error-email"
                      aria-invalid={!!error}
                      aria-required="true"
                      id="control-form-6-email"
                      type="email"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-6-info-email">Enter your email</div>}
                    {error && (
                      <div
                        id="control-form-6-error-email"
                        className="control-form-6-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-6-password-input">
              <Form.Control
                field="password"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-6-password">
                        Password
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-6-info-password control-form-6-error-password"
                      aria-invalid={!!error}
                      aria-required="true"
                      id="control-form-6-password"
                      type="password"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-6-info-password">Enter your password</div>}
                    {error && (
                      <div
                        id="control-form-6-error-password"
                        className="control-form-6-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
          </Form>
          <FormButton id="control-form-6-submit-btn" formRef={formRefControl6}>
            Clicker
          </FormButton>
          <Element as="button" id="control-form-6-clear-btn" onClick={handleClearControl6}>
            Clear
          </Element>
        </Element>
        {/* Control Form 6 ======== END */}

        {/* Control Form 7 ======== */}
        <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-7">
          <Form
            autoFocus
            validateOnSubmitOnly
            formRef={setFormRefControl7}
            onSubmit={handleSubmit}
            onValidate={handleValidateControl7}
          >
            <Element as={ELEMENT_OPTION_TYPE.DIV} id="control-form-7-first-name-input">
              <Form.Control
                field="firstName"
                defaultValue="john"
                render={({ ref, error, value, onChange, onBlur }) => (
                  <div>
                    <div>
                      <label htmlFor="control-form-7-first-name">
                        First Name
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-7-info-first-name control-form-7-error-first-name"
                      aria-invalid={!!error}
                      aria-required="true"
                      id="control-form-7-first-name"
                      type="text"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-7-info-first-name">Enter your first name</div>}
                    {error && (
                      <div
                        id="control-form-7-error-first-name"
                        className="control-form-7-error"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}
              />
            </Element>
          </Form>
          <FormButton id="control-form-7-submit-btn" formRef={formRefControl7}>
            Clicker
          </FormButton>
          <Element as="button" id="control-form-7-clear-btn" onClick={handleClearControl7}>
            Clear
          </Element>
        </Element>
        {/* Control Form 7 ======== END */}
      </main>
    </div>
  );
};
