import React from 'react';
import ReactDOM from 'react-dom';

import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

import {
  Heading,
  HeadingProps,
  HeadingType,
  HEADING_TEST_ID
} from '../../../src/components/Heading';

import { ElementMock } from '../../../utils/enums';

function heading(props?: HeadingProps): JSX.Element {
  return <Heading { ...props } />;
}

afterEach(cleanup);

describe('Heading Component', () => {
  describe('renders', () => {
    test('without crashing', () => {
      const container = document.createElement(ElementMock.DIV);

      ReactDOM.render(heading({ el: HeadingType.H1 }), container);
      ReactDOM.unmountComponentAtNode(container);
    });

    describe('with defined h tag', () => {
      test('h1', () => {
        const { getByTestId } = render(heading({ el: HeadingType.H1 }));
        const component = getByTestId(HEADING_TEST_ID);

        expect(component.tagName.toLowerCase()).toBe(HeadingType.H1);
      });

      test('h2', () => {
        const { getByTestId } = render(heading({ el: HeadingType.H2 }));
        const component = getByTestId(HEADING_TEST_ID);

        expect(component.tagName.toLowerCase()).toBe(HeadingType.H2);
      });

      test('h3', () => {
        const { getByTestId } = render(heading({ el: HeadingType.H3 }));
        const component = getByTestId(HEADING_TEST_ID);

        expect(component.tagName.toLowerCase()).toBe(HeadingType.H3);
      });

      test('h4', () => {
        const { getByTestId } = render(heading({ el: HeadingType.H4 }));
        const component = getByTestId(HEADING_TEST_ID);

        expect(component.tagName.toLowerCase()).toBe(HeadingType.H4);
      });

      test('h5', () => {
        const { getByTestId } = render(heading({ el: HeadingType.H5 }));
        const component = getByTestId(HEADING_TEST_ID);

        expect(component.tagName.toLowerCase()).toBe(HeadingType.H5);
      });

      test('h6', () => {
        const { getByTestId } = render(heading({ el: HeadingType.H6 }));
        const component = getByTestId(HEADING_TEST_ID);

        expect(component.tagName.toLowerCase()).toBe(HeadingType.H6);
      });
    });
  });

  describe('with classes', () => {
    test('custom classes', () => {
      const { getByTestId } = render(heading({
        classes: ['one', 'two', 'three'],
        el: HeadingType.H1
      }));

      expect(getByTestId(HEADING_TEST_ID)).toHaveClass(
        'one', 'two', 'three'
      );
    });
  });

  describe('snapshots', () => {
    test('of heading with children', () => {
      const text = 'Foo';
      const tree = renderer.create(
        <Heading el={HeadingType.H1} >
          {text}
        </Heading>
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('of default heading with label', () => {
      const tree = renderer.create(heading({ 
        el: HeadingType.H1, 
        label: 'Bar' }
      )).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
