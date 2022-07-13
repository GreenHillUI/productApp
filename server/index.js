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


app.get('/reviews/meta', (req, res) => {
  const config = { params: req.query };
  controllers.get(req.path, config).then((metaData) => {
    res.status(200).send(metaData);
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
