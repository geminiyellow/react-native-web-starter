const ROUTES = [
  'count',
];

module.exports = app => ROUTES.forEach(route => require(`./${route}`)(app));
