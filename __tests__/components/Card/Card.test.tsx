import React from 'react';
import ReactDOM from 'react-dom';

import { render, cleanup, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

import { Card, CardProps, CardNodeType, CardClasses, CARD_TEST_ID } from '../../../src/components/Card';

import { ElementMock } from '../../../utils/enums';

function card(props?: CardProps): JSX.Element {
  return (
    <Card { ...props }>
      <h2 data-testid="child">Title</h2>
      <p>Description</p>
    </Card>
  );
}

afterEach(cleanup);

describe('Card Component', () => {
  describe('renders', () => {
    test('without crashing', () => {
      const container = document.createElement(ElementMock.DIV);

      ReactDOM.render(card(), container);

      ReactDOM.unmountComponentAtNode(container);
    });

    test('with children', () => {
      const { getByTestId } = render(card());

      const component = getByTestId(CARD_TEST_ID);

      expect(component.children.length).toBe(2);
      expect(getByTestId('child')).toBeDefined();
    });

    test('with article element as card', () => {
      const props = { el: CardNodeType.ARTICLE };

      const { getByTestId } = render(card(props));

      const component = getByTestId(CARD_TEST_ID);

      expect(component.tagName.toLowerCase()).toBe(CardNodeType.ARTICLE);
    });
  });

  describe('with classes', () => {
    test('class hooks default block and modifier', () => {
      const props = { classHooks: true };

      const { getByTestId } = render(card(props));

      expect(getByTestId(CARD_TEST_ID)).toHaveClass(
        CardClasses.SHARED
      );
    });

    test('class clickable', () => {
      const fn = jest.fn();
      const props = { onClick: fn };

      const { getByTestId } = render(card(props));

      expect(getByTestId(CARD_TEST_ID)).toHaveClass(
        CardClasses.CLICKABLE
      );
    });

    test('custom classes', () => {
      const props = { classes: ['one', 'two', 'three'] };

      const { getByTestId } = render(card(props));

      expect(getByTestId(CARD_TEST_ID)).toHaveClass(
        'one', 'two', 'three'
      );
    });
  });

  describe('with out classes', () => {
    test('class hooks default block and modifier', () => {
      const { getByTestId } = render(card());

      expect(getByTestId(CARD_TEST_ID)).not.toHaveClass(
        CardClasses.SHARED
      );
    });
  });

  describe('events', () => {
    test('click event calls click handler', () => {
      const handleOnClick = jest.fn();
      const props = { onClick: handleOnClick };

      const { getByTestId } = render(card(props));

      fireEvent.click(getByTestId(CARD_TEST_ID));
      expect(handleOnClick).toHaveBeenCalled();
    });

    test('click event not allowed card was disabled', () => {
      const handleOnClick = jest.fn();
      const { getByTestId } = render(card({
        onClick: handleOnClick,
        disabled: true
      }));

      fireEvent.click(getByTestId(CARD_TEST_ID));
      expect(handleOnClick).not.toHaveBeenCalled();
    });
  });

  describe('snapshots', () => {
    test('of div card with title and description', () => {
      const tree = renderer.create(card()).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('of article card with title and description', () => {
      const props = { el: CardNodeType.ARTICLE };
      const tree = renderer.create(card(props)).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
