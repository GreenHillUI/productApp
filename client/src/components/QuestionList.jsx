import React from 'react';
// import { Provider, useSelector, useDispatch } from 'react-redux';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import Question from './Question';
import QModal from './QModal';




function QuestionList({ product_id, productQs, qAnswers, qFilter }) {
  //retrieve modal and extend locally
  const expandedBy = useSelector((state) => state.qList.expandedBy);
  const hasModal = useSelector((state) => state.qList.hasModal);

  const dispatch = useDispatch(); //map handlers to reducers (add button, )

  // To Occur Once in the begging and be Saved: creates an object with a key for each q and a single string including every answer. For filtering by review.

  //Obj for storage
  // stateObj[product_id] = {}; //p_id => q_id => [As]
  const QAstrings = {};
  //iterate through each q for the given Product (When given single product call)
  const Qs = productQs.results.map((q) => {
    //get the question ids
    const id = q.question_id;
    //Then get an array of the A keys for the Q, Use them to iterate each answer
    //***************************************************** */
    // eslint-disable-next-line no-var
    var answers = Object.values(q.answers).map((val) => (
      //Return a string of all the answers, reduced into one
      (answers === undefined ? val.body : answers + val.body)
    ));
      //Store answer string aside Q_id in local Obj
    QAstrings[id] = q.question_body + answers.join('');
    return { [id]: answers };
  });

  // stateObj = { [product_id]: Qs };


  //if the user filter is > 2 chars, filter to Q's w/ a matching string in the review (Q or A)
  //checks to see if the string version of the question w/this id contains the filter word
  const newList = (qFilter.length > 2 ? productQs.results.filter((q) => (QAstrings[q.question_id].indexOf(qFilter) !== -1)) : productQs.results);


  //Sorts the productQs by helpfulness rating
  const sorted = newList.sort((a, b) => (b.question_helpfulness - a.question_helpfulness)).slice(0, expandedBy);

  return (
    hasModal
      ? (
        <QModal />
      )
      : (
        <div id='q-container'>
          <span id='q-title'>QUESTIONS & ANSWERS</span>
          <div id='q-nav'>
            <input onChange={(e) => dispatch({ type: 'SEARCH_ENTRY', payload: e.target.value })} id='q-search' type='text' placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...' />
          </div>
          <div id='q-list'>
            <Question />
            {/*show only the right amount(expandBy) of sorted q's} pass q to q
            {/* {sorted.map((q, ind) => (<Question key={ind} question={q}))} */}
          </div>
          <div id='q-buttons'>
            <button
              onClick={() => dispatch({ type: "Q_EXPAND", payload: true })}
              type='button'
            >
              MORE ANSWERED QUESTIONS
            </button>
            <button
              onClick={() => dispatch({ type: 'Q_MODAL', payload: true })}
              type='button'
            >
              ADD A QUESTION +
            </button>
          </div>
        </div>
      )
  );
}

export default QuestionList;