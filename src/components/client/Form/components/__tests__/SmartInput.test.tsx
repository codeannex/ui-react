import * as React from "react";

import { render, screen } from "@testing-library/react";

import { SmartInput, SmartInputProps } from "@components/client/Form/index";

import { ELEMENT_OPTION_TYPE } from "@core/server/Element/Element";

import * as state from "../../contexts/FormStateContext";

const INPUT_FIELD = "name";
const INPUT_ID = "name";
const INPUT_LABEL = "name";
const INFO_TEXT = "info";
const NAME_FOO = "foo";
const NAME_BAR = "bar";
const ARIA_DESCRIBEBY = "aria-describedby";

const ID = "id";
const NAME = "name";

const defaultProps = {
  field: INPUT_FIELD,
  id: INPUT_ID,
  label: INPUT_LABEL,
};

const renderComponent = (overrideDefaultProps?: SmartInputProps): JSX.Element => {
  const props = { ...defaultProps, ...overrideDefaultProps };

  return <SmartInput {...props} />;
};

describe("Component - Form: SmartInput", () => {
  describe("renders", () => {
    it("without crashing", () => {
      const { container } = render(renderComponent());

      expect(container).toBeDefined();
    });

    it("with correct `value`", () => {
      const spy = jest.spyOn(state, "useFormStateContext").mockReturnValue({
        values: { [INPUT_FIELD]: "abc" },
      });

      const { container } = render(
        renderComponent({
          field: INPUT_FIELD,
          id: INPUT_ID,
          label: INPUT_LABEL,
          disabled: true,
        })
      );

      const input = container.querySelector(ELEMENT_OPTION_TYPE.INPUT);

      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute("value", "abc");

      spy.mockReset();
    });

    it("with `aria-describedby` attribute added to `input`", () => {
      const { container } = render(renderComponent());

      const input = container.querySelector("input");

      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute("aria-describedby");
    });

    it("with placeholder value", () => {
      const { container } = render(
        renderComponent({
          field: INPUT_FIELD,
          id: INPUT_ID,
          label: INPUT_LABEL,
          placeholder: NAME_FOO,
        })
      );

      const input = container.querySelector(ELEMENT_OPTION_TYPE.INPUT);

      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute("placeholder", NAME_FOO);
    });

    describe("props", () => {
      it("with `text` type input", () => {
        const { container } = render(renderComponent());

        const input = container.querySelector(ELEMENT_OPTION_TYPE.INPUT);

        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("type", "text");
      });

      it("with `email` type input", () => {
        const { container } = render(
          renderComponent({
            asType: "email",
            field: INPUT_FIELD,
            id: INPUT_ID,
            label: INPUT_LABEL,
          })
        );

        const input = container.querySelector(ELEMENT_OPTION_TYPE.INPUT);

        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("type", "email");
      });

      it("with class name/names attribute added to `input` from (string)", () => {
        const { container } = render(
          renderComponent({
            field: INPUT_FIELD,
            id: INPUT_ID,
            label: INPUT_LABEL,
            classes: NAME_FOO,
          })
        );

        const input = container.querySelector(ELEMENT_OPTION_TYPE.INPUT);

        expect(input).toHaveClass(NAME_FOO);
      });

      it("with class name/names attribute added to `input` from (array)", () => {
        const { container } = render(
          renderComponent({
            field: INPUT_FIELD,
            id: INPUT_ID,
            label: INPUT_LABEL,
            classes: [NAME_FOO, NAME_BAR],
          })
        );

        const input = container.querySelector(ELEMENT_OPTION_TYPE.INPUT);

        expect(input).toHaveClass(`${NAME_FOO} ${NAME_BAR}`);
      });

      it("with disabled attribute added to `input`", () => {
        const { container } = render(
          renderComponent({
            field: INPUT_FIELD,
            id: INPUT_ID,
            label: INPUT_LABEL,
            disabled: true,
          })
        );

        const input = container.querySelector(ELEMENT_OPTION_TYPE.INPUT);

        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("disabled");
      });

      it("with id attribute added to `label` element", () => {
        const { container } = render(
          renderComponent({
            field: INPUT_FIELD,
            id: INPUT_ID,
            label: INPUT_LABEL,
          })
        );

        const input = container.querySelector(ELEMENT_OPTION_TYPE.INPUT);

        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute(ID, INPUT_ID);
      });

      it("with name attribute added to `input`", () => {
        const { container } = render(
          renderComponent({ field: INPUT_FIELD, id: INPUT_ID, label: INPUT_LABEL, name: NAME_FOO })
        );

        const input = container.querySelector(ELEMENT_OPTION_TYPE.INPUT);

        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute(NAME, NAME_FOO);
      });
    });
  });

  describe("label state", () => {
    it("should display `label` element", () => {
      render(
        renderComponent({
          field: INPUT_FIELD,
          id: INPUT_ID,
          label: INPUT_LABEL,
        })
      );

      const label = screen.getByText(INPUT_LABEL, { selector: ELEMENT_OPTION_TYPE.LABEL });

      expect(label).toBeDefined();
    });

    it("should display with proper aria association to input", () => {
      const { container } = render(
        renderComponent({
          field: INPUT_FIELD,
          id: INPUT_ID,
          label: INPUT_LABEL,
        })
      );

      const input = container.querySelector(ELEMENT_OPTION_TYPE.INPUT);
      const label = screen.getByText(INPUT_LABEL, { selector: ELEMENT_OPTION_TYPE.LABEL });

      const inputId = input?.getAttribute(ID);
      const labelForAttr = label?.getAttribute("for");

      expect(label).toBeDefined();
      expect(inputId).toBe(labelForAttr);
    });
  });

  describe("info state", () => {
    it("should display `info` element with `div`", () => {
      render(
        renderComponent({
          field: INPUT_FIELD,
          id: INPUT_ID,
          label: INPUT_LABEL,
          info: INFO_TEXT,
        })
      );

      const info = screen.getByText(INFO_TEXT, { selector: ELEMENT_OPTION_TYPE.DIV });

      expect(info).toBeDefined();
    });

    it("should display `info` element with `span`", () => {
      render(
        renderComponent({
          field: INPUT_FIELD,
          id: INPUT_ID,
          label: INPUT_LABEL,
          info: INFO_TEXT,
          infoAs: ELEMENT_OPTION_TYPE.SPAN,
        })
      );

      const info = screen.getByText(INFO_TEXT, { selector: ELEMENT_OPTION_TYPE.SPAN });

      expect(info).toBeDefined();
    });

    it("should display `info` element with `p`", () => {
      render(
        renderComponent({
          field: INPUT_FIELD,
          id: INPUT_ID,
          label: INPUT_LABEL,
          info: INFO_TEXT,
          infoAs: ELEMENT_OPTION_TYPE.PARAGRAPH,
        })
      );

      const info = screen.getByText(INFO_TEXT, { selector: ELEMENT_OPTION_TYPE.PARAGRAPH });

      expect(info).toBeDefined();
    });

    it("should contain aria attributes ", () => {
      const { container } = render(
        renderComponent({
          field: INPUT_FIELD,
          id: INPUT_ID,
          label: INPUT_LABEL,
          info: INFO_TEXT,
        })
      );

      const input = container.querySelector(ELEMENT_OPTION_TYPE.INPUT);
      const info = screen.getByText(INFO_TEXT, { selector: ELEMENT_OPTION_TYPE.DIV });

      const ariaDescribBy = input?.getAttribute(ARIA_DESCRIBEBY);
      const infoId = info?.getAttribute(ID);

      expect(input).toBeDefined();
      expect(info).toBeDefined();
      expect(ariaDescribBy).toBeDefined();
      expect(infoId).toBeDefined();

      expect(ariaDescribBy).toBe(infoId);
    });
  });

  describe("error state", () => {
    let spy: any = null;

    beforeEach(() => {
      spy = jest.spyOn(state, "useFormStateContext").mockReturnValue({
        errors: { [INPUT_FIELD]: "Required" },
        touched: { [INPUT_FIELD]: true },
        validators: { [INPUT_FIELD]: "Required" },
      });
    });

    afterEach(() => {
      spy.mockReset();
    });

    it("should display `error` with `div`", () => {
      render(renderComponent());

      const input = screen.getByText("Required", { selector: ELEMENT_OPTION_TYPE.DIV });

      expect(input).toBeDefined();
    });

    it("should display `error` with `span`", () => {
      render(
        renderComponent({
          errorAs: ELEMENT_OPTION_TYPE.SPAN,
          field: INPUT_FIELD,
          id: INPUT_ID,
          label: INPUT_LABEL,
        })
      );

      const input = screen.getByText("Required", { selector: ELEMENT_OPTION_TYPE.SPAN });

      expect(input).toBeDefined();
    });

    it("should display `error` with `p`", () => {
      render(
        renderComponent({
          errorAs: ELEMENT_OPTION_TYPE.PARAGRAPH,
          field: INPUT_FIELD,
          id: INPUT_ID,
          label: INPUT_LABEL,
        })
      );

      const input = screen.getByText("Required", { selector: ELEMENT_OPTION_TYPE.PARAGRAPH });

      expect(input).toBeDefined();
    });

    it("should contain aria attributes", () => {
      const { container } = render(renderComponent());

      const input = container.querySelector(ELEMENT_OPTION_TYPE.INPUT);
      const error = screen.getByText("Required", { selector: ELEMENT_OPTION_TYPE.DIV });

      const ariaDescribBy = input?.getAttribute(ARIA_DESCRIBEBY);
      const ariaInvalid = input?.getAttribute("aria-invalid");

      const errorId = error.getAttribute(ID);
      const errorRole = error.getAttribute("role");

      expect(input).toBeDefined();
      expect(error).toBeDefined();
      expect(ariaDescribBy).toBeDefined();
      expect(errorId).toBeDefined();

      expect(ariaInvalid).toBe("true");
      expect(errorRole).toBe("alert");

      expect(ariaDescribBy).toBe(errorId);
    });
  });
});
