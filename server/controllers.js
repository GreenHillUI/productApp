require( 'dotenv' ).config();
const path = require( 'path' );
const axios = require( 'axios' );

const api = path.join( 'https://app-hrsei-api.herokuapp.com/api/fec2/', process.env.CAMPUS_CODE );

/**
 * Makes a get request to the API using the endpoint specified
 * @param endpoint destination in the API for the request
 * @param args optional parameters: [options object] [,callback] [,print error boolean]
 * @returns A thenable promise to use
 */
module.exports.get = ( endpoint, config={} ) => {
  const url = new URL( path.join( api, endpoint )).href;

  // adding Authorization here hides the key from the client
  config.headers = config.headers || {};
  config.headers.Authorization = process.env.GITHUB_API_KEY;

  // return a promise for the requested object
  return axios.get( url, config )
    .then(res => res.data)
    .catch( err => {
      throw new Error('error making get request to API');
    });
}


