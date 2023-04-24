import * as React from "react";

import { render } from "@testing-library/react";

import { FormProvider, Input } from "@components/client/Form/index";

const NAME_FOO = "foo";
const NAME_BAR = "bar";

const defaultProps = {
  field: "firstName",
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

    it("with `name` attribute added to input", () => {
      const { container } = render(renderComponent({ name: NAME_FOO }));

      const input = container.querySelector("input");

      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute("name", NAME_FOO);
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

    it("with placeholder value", () => {
      const { container } = render(renderComponent({ placeholder: NAME_FOO }));

      const input = container.querySelector("input");

      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute("placeholder", NAME_FOO);
    });
  });
});