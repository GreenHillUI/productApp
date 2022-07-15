


module.exports.questionData = {
  product_id: "5",
  results: [{
    question_id: 37,
    question_body: "Why is this product cheaper here than other sites?",
    question_date: "2018-10-18T00:00:00.000Z",
    question_helpfulness: 13,
    answers: {
      68: {
        id: 68,
        body: "We are selling it here without any markup from the middleman!",
        date: "2018-08-18T00:00:00.000Z",
        answerer_name: "Seller",
        helpfulness: 4,
        photos: []
      }
    }
  },
  {
    question_id: 38,
    question_body: "Should this return?",
    question_helpfulness: 45,
    answers: {
      70: {
        id: 70,
        body: "Yes, because it has the word red",
        helpfulness: 4,
        photos: [],
      },
      78: {
        id: 78,
        body: "Who cares, as long as i get dessert",
        helpfulness: 31,
        photos: [],
      }
    }
  },
  {
    question_id: 33,
    question_body: "Who are you and why are you here?",
    question_date: "2018-10-18T00:00:00.000Z",
    asker_name: "williamsmith",
    question_helpfulness: 7,
    reported: false,
    answers: {
      68: {
        id: 68,
        body: "We are selling it here without any markup from the middleman!",
        date: "2018-08-18T00:00:00.000Z",
        answerer_name: "Seller",
        helpfulness: 4,
        photos: []
      }
    }
  },
  {
    question_id: 52,
    question_body: "How long does it last?",
    question_date: "2019-06-28T00:00:00.000Z",
    asker_name: "funnygirl",
    question_helpfulness: 1,
    reported: false,
    answers: {
      70: {
        id: 70,
        body: "Some of the seams started splitting the first time I wore it!",
        date: "2019-11-28T00:00:00.000Z",
        photos: [],
      },
      78: {
        id: 78,
        body: "Its been eighty four years!!",
        date: "2019-11-12T00:00:00.000Z",
        photos: [],
      }
    }
  }
  ]
};


module.exports.answerData = {
  question: "1",
  page: 0,
  count: 5,
  results: [
    {
      answer_id: 8,
      body: "What a great day!",
      date: "2018-01-04T00:00:00.000Z",
      answerer_name: "metslover",
      helpfulness: 8,
      photos: [],
    },
    {
      answer_id: 5,
      body: "Something pretty durable but I can't be sure",
      date: "2018-01-04T00:00:00.000Z",
      answerer_name: "metslover",
      helpfulness: 5,
      photos: [{
        id: 1,
        url: "urlplaceholder/answer_5_photo_number_1.jpg"
      },
      {
        id: 2,
        url: "urlplaceholder/answer_5_photo_number_2.jpg"
      },
      ]
    },
  ]
};