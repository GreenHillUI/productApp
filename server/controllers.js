const {join} = require('path');
const axios = require('axios');
require('dotenv').config();

const api = join('https://app-hrsei-api.herokuapp.com/api/fec2/', process.env.CAMPUS_CODE);

/**
 * Makes a get request to the API using the endpoint specified
 * @param endpoint destination in the API for the request
 * @param config [optional] additional parameters to send with the request
 * @returns A thenable promise to use
 */
module.exports.get = (endpoint, config = {})  => {
  const url = new URL(join(api, endpoint)).href;

  // adding Authorization here hides the key from the client
  const options = config;
  options.headers = config.headers || {};
  options.headers.Authorization = process.env.GITHUB_API_KEY;

  // return a promise for the requested object
  return axios.get(url, config)
    .then((res) => res.data)
    .catch(() => {
      throw new Error('error making get request to API');
    });
}

