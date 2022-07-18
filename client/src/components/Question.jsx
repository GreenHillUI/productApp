import { React, useState} from 'react';
import _ from 'underscore';
import { useSelector } from 'react-redux';
import Answer from './Answer';
import { markQ } from './QAhelp/QArequests';

export default function Question({ question }) {

  const [likes, setLikes] = useState(question.question_helpfulness);
  const [clicked, setClicked] = useState(false);
  const [exp, setExp] = useState(false);

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
    .sort((a, b) => (a.helpfulness - b.helpfulness));

  if (!exp) {
    answers = answers.slice(0, 2);
  }

  return (
    <div className='question'>
      <span className='q-icon'><b>Q:</b></span>
      <span className='q-text'>{question.question_body}</span>
      <span className='q-links'>
        <button type='button' id='q-a'>Add Answer</button>
        {likeButton}
      </span>
      <ul className='a-list'>
        { answers.map((a) => (
          <li key={a.id}>
            <Answer answer={a} />
          </li>
        )) }
      </ul>
      <button onClick={expand} className='a-load' type='button'>LOAD MORE ANSWERS</button>
    </div>
  );
}
