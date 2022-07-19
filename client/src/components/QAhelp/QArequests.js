/* eslint-disable camelcase */
const axios = require('axios');

module.exports.getQ = (qID) => {
  axios.get(`a/questions/${qID}?count=${100}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};
module.exports.postQ = (qObj) => {
  axios.post(`/a/questions/${qObj.product_id}`, qObj)
    .then((res) => res)
    .catch((err) => console.error(err, 'unsucessful post req'));
};
module.exports.markQ = (qID) => {
  axios.put(`/a/questions/${qID}/helpful`)
    .then((res) => res)
    .catch((err) => console.error(err, 'unsucessful put req'));
};

module.exports.postA = (aObj) => {
  axios.post(`/a/answers/${aObj.question_id}`, aObj)
    .then((res) => res)
    .catch((err) => console.log(err, 'unsucessful post req'));
};
module.exports.markA = (aID) => {
  axios.put(`/a/answers/${aID}/helpful`)
    .then((res) => res)
    .catch((err) => console.error(err, 'unsucessful post req'));
};
module.exports.repA = (aID) => {
  axios.put(`/a/answers/${aID}/report`)
    .then((res) => res)
    .catch((err) => console.log(err, 'unsucessful put req'));
};
