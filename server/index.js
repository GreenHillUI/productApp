// eslint-disable-next-line import/no-unresolved
import express from 'express';

const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
