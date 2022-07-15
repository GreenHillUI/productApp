/* eslint-disable no-var */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Question from './Question';
import QModal from './QModal';
import { sortQtoAs } from './QAhelperFunctions';
// import { shallowEqual, createSelector } from 'reselect';




function QuestionList({ productQs, qFilter, qExpandedBy }) {
  //retrieve modal and extend locally
  const qModal = useSelector((state) => state.qList.qModal);
  const dispatch = useDispatch(); //map handlers to reducers (add button, )

  //default header to use while loading
  var qListSorted = <h3>PLEASE WAIT... PRODUCTS LOADING</h3>;


  //if the user filter is > 2 chars, filter to Q's w/ a matching string in the review (Q or A)
  if (productQs.results !== undefined) {
    qListSorted = sortQtoAs(productQs, qFilter, qExpandedBy);
    qListSorted = qListSorted.map((q) => (
      <li key={q.question_id}>
        <Question question={q} />
      </li>
    ));
  }

  return (
    <div id='q-container'>
      { qModal && <QModal /> }
      <span id='q-title'>QUESTIONS & ANSWERS</span>
      <div id='q-nav'>
        <input onChange={(e) => dispatch({ type: 'SEARCH_ENTRY', payload: e.target.value })} id='q-search' type='text' placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...' />
      </div>
      <ul id='q-list'>
        {qListSorted}
      </ul>
      <div id='q-buttons'>
        <button onClick={() => dispatch({ type: "Q_EXPAND", payload: !qExpandedBy })} type='button'>
          {qExpandedBy ? 'COLLAPSE QUESTIONS' : ' MORE ANSWERED QUESTIONS'}
        </button>
        <button onClick={() => dispatch({ type: 'Q_MODAL', payload: true })} type='button'>
          ADD A QUESTION +
        </button>
      </div>
    </div>
  );
}

export default QuestionList;