module.exports = app => {
  app.get('/api/count/:value', (request, response) => response.json({ count: parseInt(request.params.value) + 2 }));
};
