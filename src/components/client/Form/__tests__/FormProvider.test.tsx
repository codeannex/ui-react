import * as React from "react";

import { render, screen } from "@testing-library/react";

import { FormProvider, useStaticPropsContext } from "@components/client/Form";

const TEXT = {
  ERROR: "error",
  FIELD: "field",
};

const CLASS = {
  ERROR: "error",
  FIELD: "field",
};

const StaticPropsTestComponent = () => {
  const { classesField, classesError } = useStaticPropsContext();

  return (
    <>
      <p className={classesError}>{TEXT.ERROR}</p>
      <p className={classesField}>{TEXT.FIELD}</p>
    </>
  );
};

describe("Component - Form: FormProvider", () => {
  describe("FormStaticPropsContext", () => {
    it("provides static prop error class and field class", () => {
      const staticProps = {
        classesError: "error",
        classesField: "field",
      };

      render(
        // @ts-ignore
        <FormProvider staticProps={staticProps}>
          <StaticPropsTestComponent />
        </FormProvider>
      );

      expect(screen.getByText(TEXT.ERROR)).toHaveClass(CLASS.ERROR);
      expect(screen.getByText(TEXT.FIELD)).toHaveClass(CLASS.FIELD);
    });
  });
});
