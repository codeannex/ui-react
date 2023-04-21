import * as React from "react";

import { render, screen } from "@testing-library/react";

import { Label, LabelProps } from "@components/client/Form/components/Label/Label";

jest.mock("../../contexts/FormStateContext", () => {
  return {
    useFormStateContext: jest.fn().mockReturnValue({
      validators: { firstName: "Required" },
    }),
  };
});

const NAME_FOO = "foo";
const NAME_BAR = "bar";

const defaultProps = {
  label: NAME_FOO,
};

const renderComponent = (overrideDefaultProps?: LabelProps): JSX.Element => {
  const props = { ...defaultProps, ...overrideDefaultProps };

  return <Label {...props} />;
};

describe("Component - Form: Label", () => {
  describe("should render", () => {
    it("without crashing", () => {
      const { container } = render(renderComponent());

      expect(container).toBeDefined();
    });

    it("with `label` element", () => {
      render(renderComponent());

      const label = screen.getByText(NAME_FOO);

      expect(label).toBeDefined();
    });
  });

  describe("props", () => {
    it("htmlFor should add `form` attribute to label element", () => {
      render(
        renderComponent({
          label: NAME_BAR,
          htmlFor: "forBarFor",
        })
      );

      const label = screen.getByText(NAME_BAR);

      expect(label).toHaveAttribute("for", "forBarFor");
    });

    it("optional should add `optionl text` with label element", () => {
      render(
        renderComponent({
          label: NAME_BAR,
          optional: true,
        })
      );

      const span = screen.getByText("Optional");

      expect(span).toBeDefined();
    });

    it("classes should add `class name/names` attribute to container (string)", () => {
      render(
        renderComponent({
          label: NAME_BAR,
          classes: NAME_FOO,
        })
      );

      const label = screen.getByText(NAME_BAR);

      expect(label).toHaveClass(NAME_FOO);
    });

    it("classes should add `class name/names` attribute to container (array)", () => {
      render(
        renderComponent({
          label: NAME_BAR,
          classes: [NAME_FOO, NAME_BAR],
        })
      );

      const label = screen.getByText(NAME_BAR);

      expect(label).toHaveClass(`${NAME_FOO} ${NAME_BAR}`);
    });

    it("field should add required span while validator exists", () => {
      render(
        renderComponent({
          label: NAME_BAR,
          classes: [NAME_FOO, NAME_BAR],
          field: "firstName",
        })
      );

      const span = screen.getByLabelText("required");

      expect(span).toBeDefined();
    });
  });
});
