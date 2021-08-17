const Enzyme = require('enzyme');
const EnzymeAdaptor = require('@wojtekmaj/enzyme-adapter-react-17');

Enzyme.configure({ adapter: new EnzymeAdaptor() });
