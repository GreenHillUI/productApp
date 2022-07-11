import React from 'react';
import Question from './Question';

const QuestionList = ( {qExpanded, moreAnsweredQuestionsClick} ) => {
  return (
    <div id='q-container'>
      <span id='q-title'>QUESTIONS & ANSWERS</span>
      <div id='q-nav'>
        <input id='q-search' type='text' placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...' />
      </div>
      <div id='q-list'>
        <Question />
      </div>
      <div id='q-buttons'>
        <button
        onClick={() => moreAnsweredQuestionsClick(true)}
        type='button'>MORE ANSWERED QUESTIONS</button>
        <button type='button'>ADD A QUESTION +</button>
      </div>
    </div>
  );
}

export default QuestionList;