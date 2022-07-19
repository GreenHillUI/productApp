/* eslint-disable camelcase */
const axios = require('axios');

module.exports.getQ = (pID) => {

  axios.get('/qa/questions/', config)
    .then((res) => {
      setProductQs(res.data);
    })
    .catch((err) => { console.log(err); });

};

module.exports.postQ = (qObj) => {

  qObj.product_id = Number(qObj.product_id);

  const config = {
    data: {
      body: qObj,
      route: ['/qa/questions'],
      type: 'q'
    }
  };

  axios.post('/', config)
    .then((res) => res)
    .catch((err) => console.log(err, 'unsucessful post req'));
};

module.exports.postA = (pObj, aObj) => {

  const config = {
    data: {
      body: qObj,
      route: ['/qa/questions', '/answers'],
      type: 'a'
    }
  };

  axios.post('/', config)
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
