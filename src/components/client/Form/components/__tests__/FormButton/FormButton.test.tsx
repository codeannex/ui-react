import * as React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { FormButton } from "@components/client/Form/components/FormButton/FormButton";

const NAME_FOO = "foo";
const NAME_BAR = "bar";
const NAME_BAZ = "baz";

const formRefMock = {
  controls: {
    submit: () => {},
  },
} as any;

describe("Component - Form: FormButton", () => {
  describe("renders", () => {
    it("without crashing", () => {
      render(<FormButton formRef={formRefMock} />);
    });

    it("with `child` element", () => {
      render(<FormButton formRef={formRefMock}>{NAME_FOO}</FormButton>);

      const button = screen.getByText(NAME_FOO);

      expect(button).toHaveTextContent(NAME_FOO);
    });

    it("with class name/names attribute added to `button` from (string)", () => {
      render(
        <FormButton formRef={formRefMock} classes={NAME_BAR}>
          {NAME_FOO}
        </FormButton>
      );

      const button = screen.getByText(NAME_FOO);

      expect(button).toHaveClass(`${NAME_BAR}`);
    });

    it("with class name/names attribute added to `button` from (array)", () => {
      render(
        <FormButton formRef={formRefMock} classes={[NAME_BAR, NAME_BAZ]}>
          {NAME_FOO}
        </FormButton>
      );

      const button = screen.getByText(NAME_FOO);

      expect(button).toHaveClass(`${NAME_BAR} ${NAME_BAZ}`);
    });
  });

  describe("action", () => {
    it("should call submit function ", () => {
      const formRef = {
        controls: {
          submit: jest.fn(),
        },
      } as any;

      render(<FormButton formRef={formRef}>{NAME_FOO}</FormButton>);

      const button = screen.getByText(NAME_FOO);

      userEvent.click(button);

      expect(formRef.controls.submit).toHaveBeenCalled();
    });
  });
});
