const path = require('path');

const contentBase = path.resolve(__dirname, '../');
const nodeModule = mod => path.resolve(contentBase, 'node_modules/', mod);

module.exports = {
  contentBase,
  nodeModule
}
