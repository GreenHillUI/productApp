// eslint-disable-next-line import/no-unresolved
const express = require( 'express') ;

const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

const port = 3000;

const controllers = require('./controllers.js')

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.get('/products/:id', (req, res) => {
  controllers.get(req.path).then(productData => {
    res.status(200).send(productData)
   })
  
})


app.get('/products/:id/styles', (req, res) => {
  controllers.get(req.path).then(styleData => {
    res.status(200).send(styleData)
  })
})