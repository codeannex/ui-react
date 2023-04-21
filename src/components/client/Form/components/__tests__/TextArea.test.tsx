import * as React from "react";

import { render } from "@testing-library/react";

import { FormProvider, TextArea } from "@components/client/Form";

const NAME_FOO = "foo";
const NAME_BAR = "bar";

const defaultProps = {
  field: "firstName",
};

const renderComponent = (overrideDefaultProps?: any): JSX.Element => {
  const props = { ...defaultProps, ...overrideDefaultProps };

  return (
    <FormProvider>
      <TextArea {...props} />
    </FormProvider>
  );
};

describe("Component - Form: TextArea", () => {
  describe("renders", () => {
    it("without crashing", () => {
      const { container } = render(renderComponent());

      expect(container).toBeDefined();
    });

    it("with class name/names attribute added to `textarea` from (string)", () => {
      const { container } = render(renderComponent({ classes: NAME_FOO }));

      const input = container.querySelector("textarea");

      expect(input).toHaveClass(`${NAME_FOO}`);
    });

    it("with class name/names attribute added to `input` from (array)", () => {
      const { container } = render(renderComponent({ classes: [NAME_FOO, NAME_BAR] }));

      const input = container.querySelector("textarea");

      expect(input).toHaveClass(`${NAME_FOO} ${NAME_BAR}`);
    });

    it("with disabled value", () => {
      const { container } = render(renderComponent({ disabled: true }));

      const input = container.querySelector("textarea");

      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute("disabled", "");
    });

    it("with id attribute", () => {
      const { container } = render(renderComponent({ id: NAME_FOO }));

      const input = container.querySelector("textarea");

      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute("id", NAME_FOO);
    });

    it("with placeholder value", () => {
      const { container } = render(renderComponent({ placeholder: NAME_FOO }));

      const input = container.querySelector("textarea");

      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute("placeholder", NAME_FOO);
    });
  });
});
