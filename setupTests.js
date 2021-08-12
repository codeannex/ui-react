const Enzyme = require('enzyme');
const EnzymeAdaptor = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new EnzymeAdaptor() });
