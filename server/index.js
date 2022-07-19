const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(express.static('client/dist'));
app.use('/a', routes);

//ALL PUT REQUESTS
app.put('/', (req, res) => {
  // 2nd arg
  controllers.put(req.path, req.body.data)
    .then((questions) => res.status(200).send(questions));
});


//ALL POST REQUESTS
app.post('/', (req, res) => {
  // 2nd arg
  controllers.post(req.path, req.body.data)
    .then((questions) => res.status(200).send(questions));
});

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
