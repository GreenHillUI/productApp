import { useState, React } from 'react';
import { markA } from './QAhelp/QArequests';

export default function Answer({ answer }) {


  const [likes, setLikes] = useState(answer.helpfulness);
  const [clicked, setClicked] = useState(false);
  const [reported, report] = useState(false);

  const like = () => {
    setLikes(likes + 1);
    setClicked(true);
    markA(answer.id);
  };

  const likeButton = clicked
    ? <span id='a-h'> Helpful? Yes ({likes}) | </span>
    : <button onClick={like} type='button' id='a-h'>  Helpful? Yes ({likes}) | </button>;

  const reportButton = reported
    ? <span id='a-report'>Reported!</span>
    : <button onClick={() => report(true)} type='button' id='a-report'>Report</button>;

  return (
    <div className='answer'>
      <span className='a.icon'><b>A:</b></span>
      <span className='a-text'>{answer.body}</span>
      <div className='a-meta'>
        <span className='a-user-date'>by: ${answer.answerer_name} date |</span>
        {likeButton}
        {reportButton}
      </div>
    </div>
  );
}