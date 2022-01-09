/* eslint-disable */
const Enzyme = require('enzyme');
const EnzymeAdaptor = require('@wojtekmaj/enzyme-adapter-react-17');

require('@testing-library/jest-dom/extend-expect');

Enzyme.configure({ adapter: new EnzymeAdaptor() });
