/* eslint-disable camelcase */
const axios = require('axios');




module.exports.postQ = (qObj) => {

  const config = {
    method: 'post',
    data: qObj, //body, name, email, product_id
    responseType: 'json',
  };

  axios('/qa/questions', config)
    .then((res) => res)
    .catch((err) => console.log(err, 'unsucessful post req'));
};

module.exports.postA = (pObj, aObj) => {

  const config = {
    method: 'post',
    params: pObj, //question_id
    data: aObj, //body, name, email, photos
    responseType: 'json',
  };

  axios('/qa/questions/:question_id/answers', config)
    .then((res) => res)
    .catch((err) => console.log(err, 'unsucessful post req'));

};

module.exports.markQ = (qID) => {

  const config = {
    data: {
      routing: ['qa', 'questions', 'helpful'],
      param: [qID.toString(), { question_id: qID.toString() }]
    }
  };

  axios.put(`/`, config)
    .then((res) => res)
    .catch((err) => console.log(err, 'unsucessful put req'));
};

module.exports.markA = (aID) => {

  const config = {
    data: {
      routing: ['qa', 'answers', 'helpful'],
      param: [aID.toString(), { answer_id: aID.toString() }]
    }
  };

  axios.put(`/`, config)
    .then((res) => res)
    .catch((err) => console.log(err, 'unsucessful put req'));
};



module.exports.repA = (aID) => {

  const config = {
    data: {
      routing: ['qa', 'answers', 'report'],
      param: [aID.toString(), { answer_id: aID.toString() }]
    }
  };

  axios.put('/', config)
    .then((res) => res)
    .catch((err) => console.log(err, 'unsucessful put req'));
};
