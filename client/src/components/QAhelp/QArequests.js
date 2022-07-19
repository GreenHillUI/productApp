/* eslint-disable camelcase */
const axios = require('axios');

module.exports.getQ = (qID) => {
  axios.get(`a/questions/${qID}`)
    .then((res) => {
      // setProductQs(res.data);
    })
    .catch((err) => console.error(err));
};
module.exports.postQ = (qObj) => {
  axios.post(`/a/questions/${qObj.product_id}`, qObj)
    .catch((err) => console.error(err, 'unsucessful post req'));
};
module.exports.markQ = (qID) => {
  axios.put(`/a/questions/${qID}/helpful`)
    .catch((err) => console.error(err, 'unsucessful put req'));
};


module.exports.postA = (qID, aObj) => {
  axios.post(`/a/answers/${qID}`, aObj)
    .catch((err) => console.error(err, 'unsucessful post req'));
};
module.exports.markA = (aID) => {
  axios.put(`/a/answers/${aID}/helpful`)
    .catch((err) => console.error(err, 'unsucessful post req'));
};
module.exports.repA = (aID) => {
  axios.put(`/a/answers/${aID}/report`)
    .catch((err) => console.log(err, 'unsucessful put req'));
};
