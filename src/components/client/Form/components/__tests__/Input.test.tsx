import * as React from "react";

import { render } from "@testing-library/react";

import { FormProvider, Input } from "@components/client/Form/index";

import * as state from "../../contexts/FormStateContext";

const NAME_FOO = "foo";
const NAME_BAR = "bar";
const NAME_BAZ = "baz";

const defaultProps = {
  field: NAME_BAZ,
};

const renderComponent = (overrideDefaultProps?: any): JSX.Element => {
  const props = { ...defaultProps, ...overrideDefaultProps };

  return (
    <FormProvider>
      <Input {...props} />
    </FormProvider>
  );
};

describe("Component - Form: Input", () => {
  describe("renders", () => {
    it("without crashing", () => {
      const { container } = render(renderComponent());

      expect(container).toBeDefined();
    });

    it("as `text` type input by default", () => {
      const { container } = render(renderComponent());

      const input = container.querySelector("input");

      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute("type", "text");
    });

    it("as `email` type input set by `asType`", () => {
      const { container } = render(renderComponent({ asType: "email" }));

      const input = container.querySelector("input");

      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute("type", "email");
    });

    it("witout `aria-invalid` set with non-required field", () => {
      const { container } = render(renderComponent());

      const input = container.querySelector("input");

      expect(input).not.toHaveAttribute("aria-invalid");
    });

    describe("props", () => {
      it("with `aria-describedby` attribute added to `input`", () => {
        const { container } = render(renderComponent({ ariaDescribedby: NAME_FOO }));

        const input = container.querySelector("input");

        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("aria-describedby", NAME_FOO);
      });

      it("with class name/names attribute added to `input` from (string)", () => {
        const { container } = render(renderComponent({ classes: NAME_FOO }));

        const input = container.querySelector("input");

        expect(input).toHaveClass(`${NAME_FOO}`);
      });

      it("with class name/names attribute added to `input` from (array)", () => {
        const { container } = render(renderComponent({ classes: [NAME_FOO, NAME_BAR] }));

        const input = container.querySelector("input");

        expect(input).toHaveClass(`${NAME_FOO} ${NAME_BAR}`);
      });

      it("with disabled value", () => {
        const { container } = render(renderComponent({ disabled: true }));

        const input = container.querySelector("input");

        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("disabled", "");
      });

      it("with `id` attribute added to input", () => {
        const { container } = render(renderComponent({ id: NAME_FOO }));

        const input = container.querySelector("input");

        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("id", NAME_FOO);
      });

      it("with `name` attribute added to input", () => {
        const { container } = render(renderComponent({ name: NAME_FOO }));

        const input = container.querySelector("input");

        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("name", NAME_FOO);
      });

      it("with placeholder value", () => {
        const { container } = render(renderComponent({ placeholder: NAME_FOO }));

        const input = container.querySelector("input");

        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("placeholder", NAME_FOO);
      });
    });

    describe("props with required field", () => {
      it("should set 'aria-required' to 'true'", () => {
        const spyState = jest.spyOn(state, "useFormStateContext").mockReturnValue({
          validators: { [NAME_BAZ]: "Required" },
        });

        const { container } = render(renderComponent());

        const input = container.querySelector("input");

        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("aria-required", "true");

        spyState.mockReset();
      });

      it("should set 'aria-invalid' to 'false'", () => {
        const spyState = jest.spyOn(state, "useFormStateContext").mockReturnValue({
          validators: { [NAME_BAZ]: "Required" },
        });

        const { container } = render(renderComponent());

        const input = container.querySelector("input");

        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("aria-invalid", "false");

        spyState.mockReset();
      });

      it("should set 'aria-invalid' to 'true'", () => {
        const spyState = jest.spyOn(state, "useFormStateContext").mockReturnValue({
          errors: { [NAME_BAZ]: "Required" },
          touched: { [NAME_BAZ]: true },
          validators: { [NAME_BAZ]: "Required" },
        });

        const { container } = render(renderComponent());

        const input = container.querySelector("input");

        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("aria-invalid", "true");

        spyState.mockReset();
      });
    });
  });
});
