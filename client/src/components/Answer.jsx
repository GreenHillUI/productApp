import React from 'react';


export default function Answer({ answer }) {

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