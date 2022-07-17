const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();

app.use(express.static('client/dist'));
app.use('/a', routes);

app.get('/:product_id', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
