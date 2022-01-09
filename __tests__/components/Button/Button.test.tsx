import React from 'react';
import ReactDOM from 'react-dom';

import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

import { Button, ButtonType, ButtonProps, BUTTON_TEST_ID } from '../../../src';

import { ElementMock, ButtonTextMock } from '../../../utils/enums';

function component(props: ButtonProps): JSX.Element {
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
      render(<Button>{ButtonTextMock.SUBMIT}</Button>);

      const button = screen.getByTestId(BUTTON_TEST_ID);

      expect(button).toHaveTextContent(
        ButtonTextMock.SUBMIT
      );
    });

    describe('with classes', () => {
      test('custom classes', () => {
        render(component({
          classes: ['one', 'two', 'three']
        }));

        const button = screen.getByTestId(BUTTON_TEST_ID);

        expect(button).toHaveClass(
          'one', 'two', 'three'
        );
      });
    });
  });

  describe('events', () => {
    test('click event calls click handler', () => {
      const handleOnClick = jest.fn();

      render(component({ onClick: handleOnClick }));

      const button = screen.getByTestId(BUTTON_TEST_ID);

      userEvent.click(button);

      expect(handleOnClick).toHaveBeenCalled();
    });

    test('click event not allowed button was disabled', () => {
      const handleOnClick = jest.fn();

      render(component({
        onClick: handleOnClick,
        disabled: true
      }));

      const button = screen.getByTestId(BUTTON_TEST_ID);

      userEvent.click(button);

      expect(handleOnClick).not.toHaveBeenCalled();
    });
  });

  describe('snapshots', () => {
    test('of default button with label', () => {
      const tree = renderer.create(component({
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
