import * as React from "react";

import { render, screen } from "@testing-library/react";

import { Field } from "@components/client/Form/components/Field/Field";

import { ELEMENT_OPTION_TYPE } from "@core/server/Element/Element";

const NAME_FOO = "foo";
const NAME_BAR = "bar";
const InputMock = () => <input />;

const defaultProps = {};

const renderComponent = (overrideDefaultProps?: any): JSX.Element => {
  const props = { ...defaultProps, ...overrideDefaultProps };

  return (
    <Field {...props}>
      <InputMock />
    </Field>
  );
};

describe("Component - Form: Field", () => {
  describe("renders", () => {
    it("without crashing", () => {
      render(renderComponent());
    });

    it("with class name/names attribute added to container (string)", () => {
      const { container } = render(renderComponent({ classes: NAME_FOO }));

      expect(container.firstChild).toHaveClass(NAME_FOO);
    });

    it("with class name/names attribute added to container (array)", () => {
      const { container } = render(renderComponent({ classes: [NAME_FOO, NAME_BAR] }));

      expect(container.firstChild).toHaveClass(`${NAME_FOO} ${NAME_BAR}`);
    });

    it("with class name/names attribute added to `label` from (string)", () => {
      const { container } = render(
        renderComponent({
          label: NAME_FOO,
          labelClasses: NAME_FOO,
        })
      );

      const label = container.querySelector(`.${NAME_FOO}`);

      expect(label).toHaveClass(`${NAME_FOO}`);
    });

    it("with class name/names attribute added to `label` from (array)", () => {
      const { container } = render(
        renderComponent({
          label: NAME_FOO,
          classes: [NAME_FOO, NAME_BAR],
        })
      );

      const label = container.querySelector(`.${NAME_FOO}`);

      expect(label).toHaveClass(`${NAME_FOO} ${NAME_BAR}`);
    });

    it("with `label` element", () => {
      render(renderComponent({ label: NAME_FOO }));

      const label = screen.getByRole(ELEMENT_OPTION_TYPE.LABEL);

      expect(label).toBeDefined();
      expect(label.innerHTML).toBe(NAME_FOO);
    });
  });
});
