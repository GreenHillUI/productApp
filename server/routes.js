// eslint-disable-next-line no-unused-vars, import/no-unresolved
const routes = require('express').Router();
const controllers = require('./controllers');

routes.get('/products', (req, res) => {
  controllers.get(req.path)
    .then((productData) => {
      res.status(200).send(productData);
    });
});

routes.get('/products:id', (req, res) => {
  controllers.get(req.path)
    .then((productData) => {
      res.status(200).send(productData);
    });
});

module.exports = routes;
