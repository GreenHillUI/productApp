import React from 'react';


export default function Answer({ answer }) {

  // const aFilter = useSelector((state) => (state.qList.qFilter));
   //if getting questions of product in props
  //gets a list of answers that contain the current filter, then maps their IDs
  // debugger;
  // const fitleredAs = answers.filter((a) => (a.body.indexOf(aFilter) !== -1)).map((a) => (a.answer_id));
  // //Sorts the questions by helpfulness rating
  // const sorted = questions.results.sort((a, b) => (a.question_helpfulness - b.question_helpfulness));
  //Filters the sorted list to only Qs whose answers
  // const filtered = (filter === '' ? sorted : sorted.filter((q) => ())




  return (
    <div className='answer'>
      <span className='a.icon'><b>A:</b></span>
      <span className='a-text'>{answer.body}</span>
      <div className='a-meta'>
        <span className='a-user-date'>by: ${answer.answerer_name} date |</span>
        <button type='button' id='a-h'> Helpful? Yes (0) |</button>
        <button type='button' id='a-report'>Report</button>
      </div>
    </div>
  );
}