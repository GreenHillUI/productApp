// eslint-disable-next-line import/no-unresolved
const express = require('express');


const app = express();

app.use(express.static('client/dist'));

const port = 3000;

const controllers = require('./controllers');

app.listen(port, () => {
  console.log(`listening on port ${port}`);
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

app.get('/reviews/meta', (req, res) => {
  const config = { params: req.query };
  controllers.get(req.path, config).then((metaData) => {
    res.status(200).send(metaData);
  });
});