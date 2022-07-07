const express = require('express');
const path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));



var port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

