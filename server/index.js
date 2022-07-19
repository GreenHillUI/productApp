const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(express.static('client/dist'));
app.use('/a', routes);

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
