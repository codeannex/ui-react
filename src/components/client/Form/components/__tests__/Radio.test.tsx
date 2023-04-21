import * as React from "react";

import { prettyDOM, render, screen } from "@testing-library/react";

import { FormProvider, Radio } from "@components/client/Form";

const NAME_FOO = "foo";
const NAME_BAR = "bar";

const radioOptions = [
  { id: "boxing", value: "boxing", label: "Boxing", name: "boxing" },
  { id: "kick-boxing", value: "kick-boxing", label: "Kick Boxing", name: "kick-boxing" },
  { id: "bjj", value: "bjj", label: "BJJ", name: "bjj" },
];

const defaultProps = {
  field: "firstName",
  options: radioOptions,
};

const renderComponent = (overrideDefaultProps?: any): JSX.Element => {
  const props = { ...defaultProps, ...overrideDefaultProps };

  return (
    <FormProvider>
      <Radio {...props} />
    </FormProvider>
  );
};

describe("Component - Form: Radio", () => {
  it("renders without crashing", () => {
    const { container } = render(renderComponent());

    expect(container).toBeDefined();
  });

  it("with id attribute", () => {
    const { container } = render(renderComponent({ id: NAME_FOO }));

    const input = container.querySelector("div");

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("id", NAME_FOO);
  });

  it("with class name/names attribute added to `radio` from (string)", () => {
    const { container } = render(renderComponent({ classes: NAME_FOO }));

    const input = container.querySelector("div");

    expect(input).toHaveClass(`${NAME_FOO}`);
  });

  it("with class name/names attribute added to `radio` from (array)", () => {
    const { container } = render(renderComponent({ classes: [NAME_FOO, NAME_BAR] }));

    const input = container.querySelector("div");

    expect(input).toHaveClass(`${NAME_FOO} ${NAME_BAR}`);
  });

  it("renders with options", () => {
    render(renderComponent());

    const option1 = screen.getByText(radioOptions[0].label);
    const option2 = screen.getByText(radioOptions[1].label);
    const option3 = screen.getByText(radioOptions[2].label);

    expect(option1).toBeDefined();
    expect(option2).toBeDefined();
    expect(option3).toBeDefined();
  });
});
