const { Router } = require('express');

const controllers = require('./controllers');

const routes = Router();

// if you need to change the sent response, the axios response schema
// can be found here: https://axios-http.com/docs/res_schema
// in short, you can use { data, status, statusText, headers, config, request }
// in the parameter list to destructure the response object
function apiGetRequest(req, res, path) {
  controllers.get(path, { params: req.query })
    .then((apiResponse) => {
      res.status(200);
      res.type('application/json');
      res.send(apiResponse.data);
    })
    .catch((err) => console.error(err));
}
function apiPostRequest(req, res, path) {
  controllers.post(path, req.body)
    .then(({ data }) => {
      res.status(201);
      res.send(data);
    })
    .catch((err) => console.error(err));
}
function apiPutRequest(req, res, path) {
  controllers.put(path, req.body)
    .then(({ data }) => {
      res.status(204);
      res.send(data);
    })
    .catch((err) => console.error(err));
}

/**
 * PATH
 * /a/products
 * 
 * QUERY PARAMETERS
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
/**
 * PATHS
 * /a/reviews/40348
 * 
 * BODY PARAMETERS
 * rating           (int)
 * summary          (text)
 * body             (text)
 * recommend        (bool)
 * name             (text)
 * email            (text)
 * photos           ([text])
 * characteristics  (object)
 */
routes.post('/reviews/:product_id', (req, res) => {
  req.body.product_id = req.params.product_id;
  apiPostRequest(req, res, '/reviews');
});
/**
 * PATHS
 * /a/reviews/123456/helpful
 * /a/reviews/123456/report
 */
routes.put('/reviews/:review_id/:action(helpful|report)', (req, res) => {
  apiPutRequest(req, res, req.path);
});

/**
 * PATHS
 * /a/questions/40349
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
routes.post('/questions/:product_id', (req, res) => {
  const path = '/qa/questions';
  req.body.product_id = Number(req.params.product_id);

  apiPostRequest(req, res, path);
});
/**
 * PATHS
 * /a/questions/40349/helpful
 * /a/questions/40349/report
 */
routes.put('/questions/:product_id/:action(helpful|report)', (req, res) => {
  const path = `/qa${req.path}`;
  apiPutRequest(req, res, path);
});

/**
 * PATHS
 * /a/answers/40349
 * 
 * QUERY PARAMETERS
 * page (default 1)
 * count (default 5)
 */
routes.get('/answers/:question_id', (req, res) => {
  const path = `/qa/questions/${req.params.question_id}/answers`;
  apiGetRequest(req, res, path);
});
/**
 * /a/answers/40349
 * 
 * BODY PARAMETERS
 * body    (text)
 * name    (text)
 * email   (text)
 * photos  ([text])
 */
routes.post('/answers/:question_id', (req, res) => {
  const path = `/qa/questions/${req.params.question_id}/answers`;
  apiPostRequest(req, res, path);
});
/**
 * PATHS
 * /a/answers/573569/helpful
 * /a/answers/573569/report
 */
routes.put('/answers/:answer_id/:action(helpful|report)', (req, res) => {
  const path = `/qa/answers/${req.params.answer_id}/${req.params.action}`;
  apiPutRequest(req, res, path);
});


// TODO:
// GET and POST for /cart


module.exports = routes;
