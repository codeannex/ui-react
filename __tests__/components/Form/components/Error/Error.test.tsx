import * as React from "react";

import { render } from "@testing-library/react";

import { Error } from "@components/client/Form/components/Error/Error";

describe("Component - Form: Error", () => {
  it("renders without crashing", () => {
    render(<Error />);
  });
});
