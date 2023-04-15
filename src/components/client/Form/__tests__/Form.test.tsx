import * as React from "react";

import { render } from "@testing-library/react";

import { Form, FormProvider } from "@components/client/Form/index";

const defaultProps = {
  onSubmit: jest.fn(),
  formRef: jest.fn(),
};

const renderComponent = (overrideDefaultProps?: any): JSX.Element => {
  const props = { ...defaultProps, ...overrideDefaultProps };

  return (
    <FormProvider fieldRefController={{ set: () => {} }}>
      <Form {...props}>
        <div data-testid="child" />
        <div />
      </Form>
    </FormProvider>
  );
};

describe("Component - Form", () => {
  describe("renders", () => {
    it("without crashing", () => {
      const { container } = render(renderComponent());

      expect(container).toBeDefined();
    });
  });

  it("should set `formRef`", () => {
    const formRef = jest.fn();

    render(
      renderComponent({
        formRef: formRef,
      })
    );

    expect(formRef).toHaveBeenCalled();
  });
});
