const path = require('path');
const { contentBase } = require('../../env');

module.exports = {
  test: /\.ttf$/,
  loader: "url-loader", // or directly file-loader
  include: [
    /node_modules\/react-native-/,
  ]
};
