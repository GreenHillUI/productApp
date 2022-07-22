/* eslint-disable vars-on-top */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-var */
import { React, useState } from 'react';
import _ from 'underscore';
import { useDispatch, useSelector } from 'react-redux';
import Answer from './Answer';
import { markQ } from './QAhelp/QArequests';

export default function Question({ question }) {

  const [likes, setLikes] = useState(question.question_helpfulness);
  const [clicked, setClicked] = useState(false);
  const [exp, setExp] = useState(false);

  const dispatch = useDispatch();

  const like = () => {
    setLikes(likes + 1);
    setClicked(true);
    markQ(question.question_id);
  };

  const expand = () => {
    setExp(!exp);
  };

  const likeButton = clicked
    ? <span id='q-s'>
        Helpful? Yes ({likes}) |
      </span>
    : <button onClick={like} type='button' id='q-h'>
        Helpful? Yes ({likes}) |
      </button>;

  var aFilter = useSelector((state) => (state.qList.qFilter));
  aFilter = aFilter.length > 3 ? aFilter : '';
  //filter out related answers by text content then sort
  var answers = _.map(question.answers)
    .filter((a) => a.body.indexOf(aFilter) !== -1)
    .sort((a, b) => (b.helpfulness - a.helpfulness));

  const moreAs = answers[2] !== undefined;

  const loadAs = moreAs && <button onClick={expand} className='a-load' type='button'>{exp ? 'COLLAPSE ANSWERS' : 'LOAD MORE ANSWERS'}</button>;

  if (!exp) {
    answers = answers.slice(0, 2);
  }

  answers.map((a) => {
    var cap = a.body.slice(0, 1).toUpperCase();
    a.body = cap + a.body.slice(1);
    return a;
  });

  return (
    <div className={exp ? 'question-exp' : 'question'}>
      <span className='q-icon'><b>Q:</b></span>
      <span className='q-text'>{question.question_body}</span>
      <span className='q-links'>
        <button
          type='button'
          id='q-a'
          onClick={() => dispatch({ type: "A_MODAL", payload: { on: true, q: question } })}
        >
          Add Answer
        </button>
        {likeButton}
      </span>
      <ul className={exp ? 'a-list-exp' : 'a-list'}>
        { answers.map((a) => (
          <li key={a.id}>
            <Answer answer={a} qID={question.question_id} />
          </li>
        )) }
      </ul>
      {loadAs}
    </div>
  );
}
