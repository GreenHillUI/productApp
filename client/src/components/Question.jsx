/* eslint-disable vars-on-top */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-var */
import { React, useState, useEffect } from 'react';
import _ from 'underscore';
import { useDispatch, useSelector } from 'react-redux';
import Answer from './Answer';
import { getA, markQ } from './QAhelp/QArequests';

export default function Question({ question }) {

  const [likes, setLikes] = useState(question.question_helpfulness);
  const [clicked, setClicked] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [exp, setExp] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getA(question.question_id)
      .then(({ data }) => {
        console.log(data);
        setAnswers(data.results);
        console.log(data.results);
      });
  }, [question.answers]);

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

  // var aFilter = useSelector((state) => (state.qList.qFilter));
  // aFilter = aFilter.length > 3 ? aFilter : '';
  // //filter out related answers by text content then sort
  var sortedAs = _.map(answers)
    .sort((a, b) => (b.helpfulness - a.helpfulness));
  // .filter((a) => a.body.indexOf(aFilter) !== -1)

  const moreAs = answers[2] !== undefined;
  const loadBtn = moreAs && <button onClick={expand} className='a-load' type='button'>
                              {exp ? 'COLLAPSE ANSWERS' : 'LOAD MORE ANSWERS'}
                            </button>;

  if (!exp) {
    sortedAs = answers.slice(0, 2);
  }

  let formattedAs = sortedAs.map((a) => {
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
        { formattedAs.map((a) => (
          <li key={a.id}>
            <Answer answer={a} qID={question.question_id} />
          </li>
        )) }
      </ul>
      {loadBtn}
    </div>
  );
}
