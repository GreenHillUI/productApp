import React from 'react';
import _ from 'underscore';
import { useSelector } from 'react-redux';
import Answer from './Answer';

export default function Question({ question }) {

  const aFilter = useSelector((state) => (state.qList.qFilter));

  //filter out related answers by text content then sort
  const answers = _.map(question.answers)
    .filter((a) => a.body.indexOf(aFilter) !== -1)
    .sort((a, b) => (a.helpfulness - b.helpfulness)).slice(0, 2);


  return (
    <div className='question'>
      <span className='q-icon'><b>Q:</b></span>
      <span className='q-text'>{question.question_body}</span>
      <span className='q-links'>
        <button type='button' id='q-a'>Add Answer</button>
        <button type='button' id='q-h'>Helpful? Yes ({question.question_helpfulness}) |</button>
      </span>
      <ul className='a-list'>
        { answers.map((a) => (
          <li key={a.id}>
            <Answer answer={a} />
          </li>
        )) }
      </ul>
      <button className='a-load' type='button'>LOAD MORE ANSWERS</button>
    </div>
  );
}
