import * as React from "react";

import { render } from "@testing-library/react";

import { InputText } from "@components/client/Form/components/Input/InputText/InputText";

const NAME_FOO = "foo";
const NAME_BAR = "bar";

const defaultProps = {
  fieldName: "firstName",
};

const renderComponent = (overrideDefaultProps?: any): JSX.Element => {
  const props = { ...defaultProps, ...overrideDefaultProps };

  return <InputText {...props} />;
};

describe("Component - Form: InputText", () => {
  describe("renders", () => {
    it("without crashing", () => {
      render(renderComponent());
    });

    it("as `email` type input", () => {
      const { container } = render(renderComponent());

      const input = container.querySelector("input");

      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute("type", "text");
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
