const { contentBase } = require('../env');
const path = require('path');

module.exports = {
  contentBase: path.join(contentBase, 'web', 'public'),
  port: 5000,
  watchContentBase: true,
  watchOptions: {
    watch: true,
  },
  // Here you can access the Express app object and add your own custom middleware to it.
  // For example, to define custom handlers for some paths:
  before: require('./api'),
  historyApiFallback: true
};
