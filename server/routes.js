const { Router } = require('express');

const controllers = require('./controllers');

const routes = Router();

function apiGetRequest(req, res, path) {
  controllers.get(path, { params: req.query })
    .then((data) => {
      res.status(200);
      res.type('application/json');
      res.send(data);
    });
}

// Use of Query Parameters
// =============================================================
// In an HTTP GET request, parameters are sent as a query string:
// http://example.com/page?parameter=value&also=another

/**
 * PATH
 * /a/products
 * 
 * QUERY PARAMETERS (only applicable for generic product request)
 * page (default 1)
 * count (default 5)
 */
routes.get('/products', (req, res) => {
  apiGetRequest(req, res, req.path);
});

/**
 * PATHS
 * /a/products/40348
 * /a/products/40348/styles
 * /a/products/40348/related
 */
routes.get('/products/:product_id/:info(styles|related)?', (req, res) => {
  apiGetRequest(req, res, req.path);
});

/**
 * PATHS
 * /a/reviews/40348
 * /a/reviews/40348/meta
 * 
 * QUERY PARAMETERS (only applicable non-meta request)
 * page (default 1)
 * count (default 5)
 * sort [newest, helpful, relevant, or none]
 */
routes.get('/reviews/:product_id/:meta(meta)?', (req, res) => {
  const path = req.params.meta
    ? '/reviews/meta'
    : '/reviews';
  req.query.product_id = req.params.product_id;
  
  apiGetRequest(req, res, path);
});
// TODO:
// POST and PUT routes for /reviews

/**
 * PATHS
 * /a/questions/40348
 * /a/answers/40348/answers
 * 
 * QUERY PARAMETERS
 * page (default 1)
 * count (default 5)
 */
routes.get('/questions/:product_id', (req, res) => {
  const path = '/qa/questions';
  req.query.product_id = req.params.product_id;

  apiGetRequest(req, res, path);
});
routes.get('/answers/:question_id', (req, res) => {
  const path = `/qa/questions/${req.params.question_id}/answers`;
  apiGetRequest(req, res, path);
});
// TODO:
// POST and PUT routes for /qa

// TODO:
// GET and POST for /cart

module.exports = routes;
