const path = require('path');
const { contentBase } = require('../../env');

module.exports = {
  test: /\.js$/,
  include: [
    path.resolve(contentBase, 'index.web.js'),
    path.resolve(contentBase, 'src'),
    /node_modules\/react-native-/,
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      plugins: [
        'react-native-web',
      ],
      presets: ['env', 'stage-0', 'react', 'react-native'],
    },
  },
};

