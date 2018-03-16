const path = require('path');
const { contentBase, nodeModule } = require('../env');
const { devServer } = require('../mock');

const extensions = ['.web.js', '.js'];
const rules = ['babel', 'image', 'ttf'].map(name => require(`./loaders/${name}`));

console.log(rules);

module.exports = {
  entry: [
    path.join(contentBase, 'index.web.js'),
  ],
  output: {
    path: path.resolve(contentBase, 'web', 'public'),
    filename: "bundle.js",
  },
  module: {
    rules,
  },
  resolve: {
    extensions,
    alias: {
      "react-native": "react-native-web",
    },
  },
  devServer,
};
