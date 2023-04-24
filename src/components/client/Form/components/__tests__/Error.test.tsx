import * as React from "react";

import { render, screen } from "@testing-library/react";

import { Error, ErrorProps } from "@components/client/Form/components/Error/Error";

jest.mock("../../contexts/FormStaticPropsContext", () => {
  return {
    useStaticPropsContext: jest.fn().mockReturnValue({
      classesError: "all",
    }),
  };
});

jest.mock("../../contexts/FormStateContext", () => {
  return {
    useFormStateContext: jest.fn().mockReturnValue({
      errors: { name: "Required" },
      touched: { name: true },
    }),
  };
});

const NAME_FOO = "foo";
const NAME_BAR = "bar";
const FIELD = "name";

const defaultProps = {
  field: FIELD,
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

  it("enders with global `class name/names` attribute to container (string)", () => {
    render(
      renderComponent({
        field: FIELD,
      })
    );

    const error = screen.getByText("Required");

    expect(error).toHaveClass("all");
  });

  describe("props", () => {
    it("classes should add `class name/names` attribute to container (string)", () => {
      render(
        renderComponent({
          classes: NAME_FOO,
          field: FIELD,
        })
      );

      const error = screen.getByText("Required");

      expect(error).toHaveClass(NAME_FOO);
    });

    it("classes should add `class name/names` attribute to container (array)", () => {
      render(
        renderComponent({
          classes: [NAME_FOO, NAME_BAR],
          field: FIELD,
        })
      );

      const error = screen.getByText("Required");

      expect(error).toHaveClass(`${NAME_FOO} ${NAME_BAR}`);
    });

    it("id should add `id` attribute to error element", () => {
      render(
        renderComponent({
          field: FIELD,
          id: NAME_FOO,
        })
      );

      const error = screen.getByText("Required");

      expect(error).toHaveAttribute("id", NAME_FOO);
    });
  });
});
