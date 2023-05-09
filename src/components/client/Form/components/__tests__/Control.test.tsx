import * as React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Form, FormProvider, Values } from "@components/client/Form/index";

import * as state from "../../contexts/FormStateContext";

const getUseStateMock = () => {
  const setStateMock = jest.fn();
  const useStateMock: any = (useState: any) => [useState, setStateMock];

  const useStateSpy = jest.spyOn(React, "useState").mockImplementation(useStateMock);

  return { setStateMock, useStateMock, useStateSpy };
};

const renderComponent = (setStateMock: any): JSX.Element => {
  return (
    <FormProvider>
      <Form formRef={setStateMock} onSubmit={() => {}}>
        <Form.Control field="firstName" render={() => <div>Form Field</div>} />
      </Form>
    </FormProvider>
  );
};

describe("Component - Form: Control", () => {
  describe("renders", () => {
    it("without crashing", () => {
      const { setStateMock, useStateSpy } = getUseStateMock();

      const { container } = render(renderComponent(setStateMock));

      expect(container).toBeDefined();
      expect(setStateMock).toHaveBeenCalled();

      useStateSpy.mockReset();
    });

    it("with input and info un-touched state", () => {
      const { setStateMock, useStateSpy } = getUseStateMock();

      const handleValidator = (values: Values) => {
        return {
          firstName: values.firstName ? undefined : "Required",
        };
      };

      const { container } = render(
        <FormProvider>
          <Form formRef={setStateMock} onSubmit={() => {}} onValidate={handleValidator}>
            <Form.Control
              field="firstName"
              render={({ ref, error, value, onBlur, onChange }) => {
                return (
                  <div>
                    <div>
                      <label htmlFor="control-form">
                        First Name
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-info control-form-error"
                      aria-invalid={!!error}
                      aria-required="true"
                      id="control-form"
                      type="text"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-info">Enter your first name</div>}
                    {error && (
                      <div id="control-form-errore" role="alert">
                        {error}
                      </div>
                    )}
                  </div>
                );
              }}
            />
          </Form>
        </FormProvider>
      );

      const required = container.querySelector("span");

      expect(required).toHaveAttribute("aria-hidden", "true");
      expect(required).toHaveAttribute("aria-label", "required");
      expect(required).toHaveAttribute("aria-required", "true");

      const input = screen.getByRole("textbox");

      expect(input).toHaveAttribute("aria-invalid", "false");
      expect(input).toHaveAttribute("aria-required", "true");

      const info = screen.getByText("Enter your first name", { selector: "div" });

      expect(info).toHaveAttribute("id", "control-form-info");

      const error = screen.queryByText("Required");

      expect(error).toBeNull();

      useStateSpy.mockReset();
    });

    it("with input and error state", () => {
      const { setStateMock, useStateSpy } = getUseStateMock();

      const handleValidator = (values: Values) => {
        return {
          firstName: values.firstName ? undefined : "Required",
        };
      };

      const spyState = jest.spyOn(state, "useFormStateContext").mockReturnValue({
        errors: { ["firstName"]: "Required" },
        touched: { ["firstName"]: true },
        validators: { ["firstName"]: "Required" },
      });

      const { container } = render(
        <FormProvider>
          <Form formRef={setStateMock} onSubmit={() => {}} onValidate={handleValidator}>
            <Form.Control
              field="firstName"
              render={({ ref, error, value, onBlur, onChange }) => {
                return (
                  <div>
                    <div>
                      <label htmlFor="control-form">
                        First Name
                        <span aria-hidden="true" aria-required="true" aria-label="required">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      aria-describedby="control-form-info control-form-error"
                      aria-invalid={!!error}
                      aria-required="true"
                      id="control-form"
                      type="text"
                      value={value}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {!error && <div id="control-form-info">Enter your first name</div>}
                    {error && (
                      <div id="control-form-error" role="alert">
                        {error}
                      </div>
                    )}
                  </div>
                );
              }}
            />
          </Form>
        </FormProvider>
      );

      const required = container.querySelector("span");

      expect(required).toHaveAttribute("aria-hidden", "true");
      expect(required).toHaveAttribute("aria-label", "required");
      expect(required).toHaveAttribute("aria-required", "true");

      const input = screen.getByRole("textbox");

      expect(input).toHaveAttribute("aria-invalid", "true");
      expect(input).toHaveAttribute("aria-required", "true");

      const info = screen.queryByText("Enter your first name");

      expect(info).toBeNull();

      const error = screen.getByText("Required", { selector: "div" });

      expect(error).toHaveAttribute("id", "control-form-error");
      expect(error).toHaveAttribute("role", "alert");

      spyState.mockReset();
      useStateSpy.mockReset();
    });
  });

  it("should update value", () => {
    const { setStateMock, useStateSpy } = getUseStateMock();

    const handleValidator = (values: Values) => {
      return {
        firstName: values.firstName ? undefined : "Required",
      };
    };

    render(
      <FormProvider>
        <Form formRef={setStateMock} onSubmit={() => {}} onValidate={handleValidator}>
          <Form.Control
            field="firstName"
            render={({ ref, error, value, onBlur, onChange }) => {
              return (
                <div>
                  <div>
                    <label htmlFor="control-form">
                      First Name
                      <span aria-hidden="true" aria-required="true" aria-label="required">
                        *
                      </span>
                    </label>
                  </div>
                  <input
                    aria-describedby="control-form-info control-form-error"
                    aria-invalid={!!error}
                    aria-required="true"
                    id="control-form"
                    type="text"
                    value={value}
                    ref={ref}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                  {!error && <div id="control-form-info">Enter your first name</div>}
                  {error && (
                    <div id="control-form-errore" role="alert">
                      {error}
                    </div>
                  )}
                </div>
              );
            }}
          />
        </Form>
      </FormProvider>
    );

    const inputA = screen.getByRole("textbox");

    expect(inputA).toHaveAttribute("value", "");

    userEvent.type(inputA, "abc");

    const inputB = screen.getByRole("textbox");

    expect(inputB).toHaveAttribute("value", "abc");

    useStateSpy.mockReset();
  });

  it("should set `defaultValue` to form field", () => {
    const { setStateMock, useStateSpy } = getUseStateMock();

    render(
      <FormProvider>
        <Form formRef={setStateMock} onSubmit={() => {}}>
          <Form.Control
            field="firstName"
            defaultValue="john"
            render={({ ref, error, value, onBlur, onChange }) => {
              return (
                <div>
                  <div>
                    <label htmlFor="control-form">
                      First Name
                      <span aria-hidden="true" aria-required="true" aria-label="required">
                        *
                      </span>
                    </label>
                  </div>
                  <input
                    aria-describedby="control-form-info control-form-error"
                    aria-invalid={!!error}
                    aria-required="true"
                    id="control-form"
                    type="text"
                    value={value}
                    ref={ref}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                  {!error && <div id="control-form-info">Enter your first name</div>}
                  {error && (
                    <div id="control-form-errore" role="alert">
                      {error}
                    </div>
                  )}
                </div>
              );
            }}
          />
        </Form>
      </FormProvider>
    );

    const inputA = screen.getByRole("textbox");

    expect(inputA).toHaveAttribute("value", "john");
  });
});
