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

const port = 3000;

const controllers = require('./controllers');

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
