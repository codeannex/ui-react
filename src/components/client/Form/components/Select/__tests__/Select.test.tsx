import * as React from "react";

import { render, screen } from "@testing-library/react";

import { FormProvider, Select, SelectProps } from "@components/client/Form";

import { SelectOption } from "../../../types";

const selectOptions: SelectOption[] = [
  { id: "a", value: "", label: "--Please choose an option--" },
  { id: "instructional", value: "instructional", label: "Instructional" },
  { id: "interactive", value: "interactive", label: "Interactive" },
];

const defaultProps: SelectProps = {
  field: "firstName",
  options: selectOptions,
};

const renderComponent = (overrideDefaultProps?: any): JSX.Element => {
  const props = { ...defaultProps, ...overrideDefaultProps };

  return (
    <FormProvider>
      <Select {...props} />
    </FormProvider>
  );
};

describe("Component - Form: Error", () => {
  it("renders without crashing", () => {
    const { container } = render(renderComponent());

    expect(container).toBeDefined();
  });

  it("renders with options", () => {
    render(renderComponent());

    const option1 = screen.getByText(selectOptions[1].label);
    const option2 = screen.getByText(selectOptions[2].label);

    expect(option1).toBeDefined();
    expect(option2).toBeDefined();
  });
});
