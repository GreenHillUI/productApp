/* eslint-disable no-var */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Question from './Question';
import QModal from './QModal';
// import { shallowEqual, createSelector } from 'reselect';




function QuestionList({ productQs, qFilter }) {
  //retrieve modal and extend locally
  const qExpandedBy = useSelector((state) => state.qList.expandedBy);
  const hasQModal = useSelector((state) => state.qList.hasModal);
  const dispatch = useDispatch(); //map handlers to reducers (add button, )


  // To Occur Once in the begging and be Saved: creates an object with a key for each q and a single string including every answer. For filtering by review.

  function applyFilter(Qs, filter) {
    //house an object that will have, for each question, a string of the Q and all As
    const combinedQAObj = {};
    //iterate through each q for the given Product (When given single product call)
    Qs.results.forEach((q) => {
      //get the question ids
      const id = q.question_id;
      //Then get an array of the A values for the Q, Use them to iterate each answer
      var answers = Object.values(q.answers).map((val) => (
        //Return a string of all the answers, reduced into one
        (answers === undefined ? val.body : answers + val.body)
      ));
        //Store answer string aside Q_id in local Obj
      combinedQAObj[id] = q.question_body + answers.join('');
    });
    //use the combined strings for each question to filter out the qs by search term
    return Qs.results.filter((q) => (combinedQAObj[q.question_id].indexOf(filter) !== -1));
  }

  //if the user filter is > 2 chars, filter to Q's w/ a matching string in the review (Q or A)
  debugger;
  const qList = (qFilter.length > 2 ? applyFilter(productQs, qFilter) : productQs);
  //Sorts the productQs by helpfulness rating, slice the amount to be shown
  const qListSorted = qList.sort((a, b) => (b.question_helpfulness - a.question_helpfulness)).slice(0, qExpandedBy);



  return (
    hasQModal
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
            {/* show only the right amount(expandBy) of sorted q's} pass q to q */}
            { qListSorted.map((q) => (<Question key={q.question_id} question={q} />))}
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