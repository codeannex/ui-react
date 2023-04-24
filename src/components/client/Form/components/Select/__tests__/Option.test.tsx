import * as React from "react";

import { render, screen } from "@testing-library/react";

import { Option } from "@components/client/Form/components/Select/Option";

import { SelectOption } from "../../../types";

const selectOptions: SelectOption = {
  id: "foo",
  value: "foo",
  label: "foo",
};

describe("Component - Form: Error", () => {
  it("renders without crashing", () => {
    const { container } = render(<Option option={selectOptions} />);

    expect(container).toBeDefined();
  });

  it("renders with value", () => {
    render(<Option option={selectOptions} />);

    const value = screen.getByText("foo");

    expect(value).toBeDefined();
  });
});
