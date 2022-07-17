/* eslint-disable no-var */
/* eslint-disable vars-on-top */
require('dotenv').config();
const { join } = require('path');
const axios = require('axios');

const api = join('https://app-hrsei-api.herokuapp.com/api/fec2/', process.env.CAMPUS_CODE);

/**
 * Makes a get request to the API using the endpoint specified
 * @param endpoint destination in the API for the request
 * @param config [optional] additional parameters to send with the request
 * @returns A thenable promise to use
 */



module.exports.get = (endpoint, config = {}) => {
  const url = new URL(join(api, endpoint)).href;

  // adding Authorization here hides the key from the client
  const options = config;
  options.headers = config.headers || {};
  options.headers.Authorization = process.env.GITHUB_API_KEY;

  // return a promise for the requested object
  return axios.get(url, config)
    .then((res) => res.data)
    .catch(() => {
      console.error(new Error(`failed to make get request to API using endpoint ${endpoint}`));
    });
};

module.exports.put = (endpoint, config) => {

  var route = config.routing;
  var param = config.param;


  //FOR REVIEWS
  var url = new URL(join(api, route[0], param[0], route[1])).href;

  //FOR QUESTIONS
  if (route.length > 2) {
    url = new URL(join(api, route[0], route[1], param[0], route[2])).href;
  }

  const options = { params: param[1] };
  options.headers = { Authorization: process.env.GITHUB_API_KEY };

  // return a promise for the requested object
  return axios.put(url, param[1], options)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err.toJSON());
    });
};

module.exports.post = (endpoint, config) => {

  var { body, route, type } = config;

  //FOR REVIEWS
  // var url = new URL(join(api, route[0], param[0], route[1])).href;

  //FOR QUESTIONS
  //(type 'q')
  var url = new URL(join(api, route[0])).href;
  if (type === 'a') { // 'qa/questions',    ID #    ,  'answers'
    url = new URL(join(api, route[0], body.product_id, route[1])).href;
  }

  const options = { headers: { Authorization: process.env.GITHUB_API_KEY } };
  console.log(body);
  // return a promise for the requested object
  return axios.post(url, body, options)
    .then((res) => res.body)
    .catch((err) => {
      console.log(err.toJSON());
    });
};