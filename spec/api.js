require('dotenv').config();
const controllers = require('../server/controllers');

controllers.get('products')
  .then((a) => console.log(a));
