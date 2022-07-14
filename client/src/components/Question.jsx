import React from 'react';

export default function Question({ question }) {
  return (
    <div className='question'>
      <span id='q-text'>Q: {question.question_body}</span>
      <span id='q-links'>
        <button type='button' id='q-a'>Add Answer</button>
        <button type='button' id='q-h'>Helpful? Yes ({question.question_helpfulness}) |</button>
      </span>
      <span id='temp-a'>A: Answer Text</span>
      <button id='a-load' type='button'>LOAD MORE ANSWERS</button>
    </div>
  );
}
