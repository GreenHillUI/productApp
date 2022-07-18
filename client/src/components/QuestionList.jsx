/* eslint-disable no-var */
import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
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
      <li className='question-li' key={q.question_id}>
        <Question question={q} />
      </li>
    ));
  }

  return (
    <div id='q-container'>
      { qModal && <QModal pID={productQs.product_id} /> }
      <span id='q-title'>QUESTIONS & ANSWERS</span>
      <div id='q-nav'>
        <input onChange={(e) => dispatch({ type: 'SEARCH_ENTRY', payload: e.target.value })} id='q-search' type='text' placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...' />
      </div>
      <ul id={qExpandedBy ? 'q-list-exp' : 'q-list-col'}>
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

const mapStateToProps = (store) => ({
  qExpandedBy: store.qList.qExpandedBy,
  qModal: store.qList.qModal,
  qFilter: store.qList.qFilter,
  productQs: store.qList.productQs,
});//connects the prop to the state saved in the store

//makes it so you can change state depending on inputs   event handler => action/reducer => store
const mapDispatchToProps = (dispatch) => ({
  moreAnsweredQuestionsClick: () => dispatch(expandQuestions(true)), //link more question button event
  onAddAnswerClick: () => dispatch(showQModal(true)), //link add answer event
});


const QuestionListContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionList);

export default QuestionListContainer;