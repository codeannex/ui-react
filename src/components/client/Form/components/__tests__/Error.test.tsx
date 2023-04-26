import * as React from "react";

import { render, screen } from "@testing-library/react";

import { Error, ErrorProps } from "@components/client/Form/components/Error/Error";

import * as state from "../../contexts/FormStateContext";
import * as staticState from "../../contexts/FormStaticPropsContext";

const NAME_FOO = "foo";
const NAME_BAR = "bar";
const NAME_BAZ = "baz";

const defaultProps = {
  field: NAME_BAZ,
};

const renderComponent = (overrideDefaultProps?: ErrorProps): JSX.Element => {
  const props = { ...defaultProps, ...overrideDefaultProps };

  return <Error {...props} />;
};

describe("Component - Form: Error", () => {
  it("renders without crashing", () => {
    const { container } = render(renderComponent());

    expect(container).toBeDefined();
  });

  it("renders with global `class name/names` attribute to container (string)", () => {
    const spyStaticState = jest.spyOn(staticState, "useStaticPropsContext").mockReturnValue({
      classesError: "error",
    });

    const spyState = jest.spyOn(state, "useFormStateContext").mockReturnValue({
      errors: { [NAME_BAZ]: "Required" },
      touched: { [NAME_BAZ]: true },
    });

    render(
      renderComponent({
        field: NAME_BAZ,
      })
    );

    const error = screen.getByText("Required");

    expect(error).toHaveClass("error");

    spyStaticState.mockReset();
    spyState.mockReset();
  });

  describe("props", () => {
    let spy: any;

    beforeEach(() => {
      spy = jest.spyOn(state, "useFormStateContext").mockReturnValue({
        errors: { [NAME_BAZ]: "Required" },
        touched: { [NAME_BAZ]: true },
      });
    });

    afterEach(() => {
      spy.mockReset();
    });

    it("classes should add `class name/names` attribute to container (string)", () => {
      render(
        renderComponent({
          classes: NAME_FOO,
          field: NAME_BAZ,
        })
      );

      const error = screen.getByText("Required");

      expect(error).toHaveClass(NAME_FOO);
    });

    it("classes should add `class name/names` attribute to container (array)", () => {
      render(
        renderComponent({
          classes: [NAME_FOO, NAME_BAR],
          field: NAME_BAZ,
        })
      );

      const error = screen.getByText("Required");

      expect(error).toHaveClass(`${NAME_FOO} ${NAME_BAR}`);
    });

    it("id should add `id` attribute to error element", () => {
      render(
        renderComponent({
          field: NAME_BAZ,
          id: NAME_FOO,
        })
      );

      const error = screen.getByText("Required");

      expect(error).toHaveAttribute("id", NAME_FOO);
    });

    describe("render callback", () => {
      it("should render error via `render` override callback", () => {
        render(
          renderComponent({
            field: NAME_BAZ,
            id: NAME_FOO,

            render: ({ error }) => {
              return error && <div>{error}</div>;
            },
          })
        );

        const error = screen.getByText("Required");

        expect(error).toBeDefined();
      });
    });
  });
});
