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
const NAME_BAZ = "baz";
const NAME_BIZ = "biz";

const defaultProps = {
  field: NAME_BIZ,
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

    it("with `label` text", () => {
      render(renderComponent());

      const label = screen.getByText(NAME_FOO);

      expect(label).toBeDefined();
    });
  });

  describe("props", () => {
    it("classes should add `class name/names` attribute to container (string)", () => {
      render(
        renderComponent({
          classes: NAME_FOO,
          field: NAME_BIZ,
          label: NAME_BAR,
        })
      );

      const label = screen.getByText(NAME_BAR);

      expect(label).toHaveClass(NAME_FOO);
    });

    it("classes should add `class name/names` attribute to container (array)", () => {
      render(
        renderComponent({
          classes: [NAME_FOO, NAME_BAR],
          field: NAME_BIZ,
          label: NAME_BAR,
        })
      );

      const label = screen.getByText(NAME_BAR);

      expect(label).toHaveClass(`${NAME_FOO} ${NAME_BAR}`);
    });

    it("htmlFor should add `for` attribute to label element", () => {
      render(
        renderComponent({
          field: NAME_BIZ,
          htmlFor: NAME_BAZ,
          label: NAME_BAR,
        })
      );

      const label = screen.getByText(NAME_BAR);

      expect(label).toHaveAttribute("for", NAME_BAZ);
    });

    it("id should add `id` attribute to label element", () => {
      render(
        renderComponent({
          field: NAME_BIZ,
          id: NAME_FOO,
          label: NAME_BAR,
        })
      );

      const label = screen.getByText(NAME_BAR);

      expect(label).toHaveAttribute("id", NAME_FOO);
    });

    it("optional should add required with label element", () => {
      render(
        renderComponent({
          field: NAME_BIZ,
          label: NAME_BAR,
          optional: true,
        })
      );

      const span = screen.getByText("Optional");

      expect(span).toBeDefined();
    });

    it("required should add required span with label element", () => {
      render(
        renderComponent({
          field: NAME_BIZ,
          label: NAME_BAR,
          required: true,
        })
      );

      const span = screen.getByLabelText("required");

      expect(span).toBeDefined();
    });

    it("field should add required span while validator exists", () => {
      render(
        renderComponent({
          classes: [NAME_FOO, NAME_BAR],
          field: "firstName",
          label: NAME_BAR,
        })
      );

      const span = screen.getByLabelText("required");

      expect(span).toBeDefined();
    });
  });

  describe("aria", () => {
    it("hidden should be added to the span when `required` is enabled", () => {
      render(
        renderComponent({
          classes: [NAME_FOO, NAME_BAR],
          field: "firstName",
          label: NAME_BAR,
        })
      );

      const span = screen.getByLabelText("required");

      expect(span).toBeDefined();
      expect(span.getAttribute("aria-hidden")).toBe("true");
      expect(span.getAttribute("aria-label")).toBe("required");
      expect(span.getAttribute("aria-required")).toBe("true");
    });
  });
});
