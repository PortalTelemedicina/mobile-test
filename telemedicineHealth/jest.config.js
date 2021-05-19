// jest.config.js
const {defaults} = require('jest-config');
module.exports = {
  // ...
  preset: 'react-native',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  // ...
};
