import React from 'react';

export default function Answer(q_ID) {

  const answers =
   //if getting questions of product in props
  //gets a list of answers that contain the current filter, then maps their IDs
  const relevant = qAnswers.filter((a) => (a.body.indexOf(qFilter) !== -1)).map((a) => (a.answer_id));
  //Sorts the questions by helpfulness rating
  const sorted = questions.results.sort((a, b) => (a.question_helpfulness - b.question_helpfulness));
  //Filters the sorted list to only Qs whose answers
  const filtered = (filter === '' ? sorted : sorted.filter((q) => ())




  return (
    <div className='answer'>
      <span id='a-text'>A: Just like this</span>

      <span id='a-links'>
        <button type='button' id='a-a'>Add Answer</button>
        <button type='button' id='a-h'>Helpful? Yes (0) |</button>
      </span>
    </div>
  );
}