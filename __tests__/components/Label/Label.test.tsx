import * as React from "react";

import { render, screen } from "@testing-library/react";

import { Label, LabelProps } from "@components/client/Form/components/Label/Label";

import { ELEMENT_OPTION_TYPE } from "@core/server/Element/Element";

const NAME_FOO = "foo";
const NAME_BAR = "bar";

const defaultProps: LabelProps = {
  label: NAME_FOO,
};

const renderComponent = (overrideDefaultProps?: LabelProps): JSX.Element => {
  const props = { ...defaultProps, ...overrideDefaultProps };

  return <Label {...props} />;
};

describe("component - Label", () => {
  describe("should render", () => {
    it("without crashing", () => {
      render(renderComponent());
    });

    it("with `label` element", () => {
      render(renderComponent());

      const label = screen.getByRole(ELEMENT_OPTION_TYPE.LABEL);

      expect(label).toBeDefined();
      expect(label.innerHTML).toBe(NAME_FOO);
    });
  });

  describe("props option", () => {
    it("form should add `form` attribute to label element", () => {
      render(
        renderComponent({
          label: NAME_FOO,
          form: "fooBarForm",
        })
      );

      const label = screen.getByRole(ELEMENT_OPTION_TYPE.LABEL);

      expect(label).toHaveAttribute("form", "fooBarForm");
    });

    it("htmlFor should add `form` attribute to label element", () => {
      render(
        renderComponent({
          label: NAME_FOO,
          htmlFor: "forBarFor",
        })
      );

      const label = screen.getByRole(ELEMENT_OPTION_TYPE.LABEL);

      expect(label).toHaveAttribute("for", "forBarFor");
    });

    it("optional should add `optionl text` with label element", () => {
      render(
        renderComponent({
          label: NAME_FOO,
          optional: true,
        })
      );

      const span = screen.getByRole(ELEMENT_OPTION_TYPE.SPAN);

      expect(span).toBeDefined();
      expect(span.innerHTML).toBe("Optional");
    });

    it("classes should add `class name/names` attribute to container (string)", () => {
      const { container } = render(
        renderComponent({
          label: NAME_FOO,
          classes: NAME_FOO,
        })
      );

      expect(container.firstChild).toHaveClass(NAME_FOO);
    });

    it("classes should add `class name/names` attribute to container (array)", () => {
      const { container } = render(
        renderComponent({
          label: NAME_FOO,
          classes: [NAME_FOO, NAME_BAR],
        })
      );

      expect(container.firstChild).toHaveClass(`${NAME_FOO} ${NAME_BAR}`);
    });
  });
});
