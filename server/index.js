// eslint-disable-next-line import/no-unresolved
const express = require('express');
const controllers = require('./controllers');


const app = express();

app.use(express.static('client/dist'));

app.get('/products*', (req, res) => {
  console.log('help ', req.path);
  controllers.get(req.path)
    .then((products) => {
      res.status(200).send(products);
    });
});


app.get('/products/:id', (req, res) => {
  controllers.get(req.path).then((productData) => {
    res.status(200).send(productData);
  });

});


app.get('/products/:id/styles', (req, res) => {
  controllers.get(req.path).then((styleData) => {
    res.status(200).send(styleData);
  });
});

app.get('/qa/questions/:product_id/:page/:count', (req, res) => {
  controllers.get(req.path)
    .then((styleData) => { res.status(200).send(styleData); })
    .catch((err) => { console.log(err); });
});

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
