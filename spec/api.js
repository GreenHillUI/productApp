require( 'dotenv' ).config();
const controllers = require('../server/controllers.js');

controllers.get('products')
  .then(a=>console.log(a));
