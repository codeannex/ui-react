import * as React from "react";

import { prettyDOM, render } from "@testing-library/react";

import { FormProvider, InputText } from "@components/client/Form";

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
      <InputText {...props} />
    </FormProvider>
  );
};

describe("Component - Form: InputText", () => {
  describe("renders", () => {
    it("without crashing", () => {
      const { container } = render(renderComponent());

      expect(container).toBeDefined();
    });

    it("as `text` type input", () => {
      const { container } = render(renderComponent());

      const input = container.querySelector("input");

      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute("type", "text");
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

        expect(input).toBeInTheDocument();
        expect(input).toHaveClass(`${NAME_FOO}`);
      });

      it("with class name/names attribute added to `input` from (array)", () => {
        const { container } = render(renderComponent({ classes: [NAME_FOO, NAME_BAR] }));

        const input = container.querySelector("input");

        expect(input).toBeInTheDocument();
        expect(input).toHaveClass(`${NAME_FOO} ${NAME_BAR}`);
      });

      it("with disabled value", () => {
        const { container } = render(renderComponent({ disabled: true }));

        const input = container.querySelector("input");

        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("disabled", "");
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

      it("with 'aria-invalid' set to 'false'", () => {
        const { container } = render(renderComponent());

        const input = container.querySelector("input");

        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("aria-invalid", "false");
      });

      it("with 'aria-invalid' set to 'false'", () => {
        const spyState = jest.spyOn(state, "useFormStateContext").mockReturnValue({
          errors: { [NAME_BAZ]: "Required" },
          touched: { [NAME_BAZ]: true },
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
