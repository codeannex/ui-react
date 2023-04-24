import * as React from "react";

import { render, screen } from "@testing-library/react";

import { Info, InfoProps } from "@components/client/Form";

import * as hook from "../../contexts/FormStateContext";

const NAME_FOO = "foo";
const NAME_BAR = "bar";
const NAME_BAZ = "baz";

const defaultProps = {
  field: NAME_BAZ,
};

const renderComponent = (overrideDefaultProps?: InfoProps): JSX.Element => {
  const props = { ...defaultProps, ...overrideDefaultProps };

  return <Info {...props} />;
};

describe("Component - Form: Error", () => {
  it("renders without crashing", () => {
    const { container } = render(renderComponent());

    expect(container).toBeDefined();
  });

  it("should NOT render", () => {
    const spy = jest.spyOn(hook, "useFormStateContext").mockReturnValue({
      errors: { [NAME_BAZ]: "Required" },
      touched: { [NAME_BAZ]: true },
    });

    render(
      renderComponent({
        field: NAME_BAZ,
        id: NAME_FOO,
        message: NAME_FOO,
      })
    );

    const info = screen.queryByText(NAME_FOO);

    expect(info).toBeNull();

    spy.mockReset();
  });

  describe("props", () => {
    it("classes should add `class name/names` attribute to container (string)", () => {
      render(
        renderComponent({
          classes: NAME_BAR,
          field: NAME_BAZ,
          message: NAME_FOO,
        })
      );

      const info = screen.getByText(NAME_FOO);

      expect(info).toHaveClass(NAME_BAR);
    });

    it("classes should add `class name/names` attribute to container (array)", () => {
      render(
        renderComponent({
          classes: [NAME_FOO, NAME_BAR],
          field: NAME_BAZ,
          message: NAME_FOO,
        })
      );

      const info = screen.getByText(NAME_FOO);

      expect(info).toHaveClass(`${NAME_FOO} ${NAME_BAR}`);
    });

    it("id should add `id` attribute to info element", () => {
      render(
        renderComponent({
          field: NAME_BAZ,
          id: NAME_FOO,
          message: NAME_FOO,
        })
      );

      const info = screen.getByText(NAME_FOO);

      expect(info).toHaveAttribute("id", NAME_FOO);
    });
  });
});
