import React from 'react';
import ReactDOM from 'react-dom';

import { render, cleanup, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

import { Button, ButtonType, ButtonProps, BUTTON_TEST_ID } from '../../../src/components/Button';

import { ElementMock, ButtonTextMock } from '../../../utils/enums';

function button(props: ButtonProps): JSX.Element {
  return <Button { ...props } />;
}

afterEach(cleanup);

describe('Button Component', () => {
  describe('renders', () => {
    test('without crashing', () => {
      const container = document.createElement(ElementMock.DIV);

      ReactDOM.render(<Button>{ButtonType.SUBMIT}</Button>, container);
      ReactDOM.unmountComponentAtNode(container);
    });

    test('default button', () => {
      const { getByTestId } = render(<Button>{ButtonTextMock.SUBMIT}</Button>);

      expect(getByTestId(BUTTON_TEST_ID)).toHaveTextContent(
        ButtonTextMock.SUBMIT
      );
    });

    describe('with classes', () => {
      test('custom classes', () => {
        const { getByTestId } = render(button({
          classes: ['one', 'two', 'three']
        }));

        expect(getByTestId(BUTTON_TEST_ID)).toHaveClass(
          'one', 'two', 'three'
        );
      });
    });
  });

  describe('events', () => {
    test('click event calls click handler', () => {
      const handleOnClick = jest.fn();
      const { getByTestId } = render(button({ onClick: handleOnClick }));

      fireEvent.click(getByTestId(BUTTON_TEST_ID));
      expect(handleOnClick).toHaveBeenCalled();
    });

    test('click event not allowed button was disabled', () => {
      const handleOnClick = jest.fn();
      const { getByTestId } = render(button({
        onClick: handleOnClick,
        disabled: true
      }));

      fireEvent.click(getByTestId(BUTTON_TEST_ID));
      expect(handleOnClick).not.toHaveBeenCalled();
    });
  });

  describe('snapshots', () => {
    test('of default button with label', () => {
      const tree = renderer.create(button({
        label: ButtonTextMock.SUBMIT
      })).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('of default button with children', () => {
      const tree = renderer.create(
        <Button>
          <div>
            {ButtonTextMock.SUBMIT}
          </div>
        </Button>
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
