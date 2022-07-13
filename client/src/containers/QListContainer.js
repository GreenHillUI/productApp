import { connect } from 'react-redux';
import QuestionList from '../components/QuestionList'; //import the component
import { expandQuestions, showQModal } from '../actions/QListAction'; //and the action

//Need to import the component and action associated with the prop
// const areStatesEqual = (nextStore, previousStore) => (
//   nextStore.qModal === previousStore.qModal && nextStore.qExpanded === previousStore.qExpanded
// );
//Using connect to map both the state and the dispatch to props


const mapStateToProps = (store) => ({
  qExpandedBy: store.qList.qExpandedBy,
  hasQModal: store.qList.qModal,
  qFilter: store.qList.qFilter,
  productQs: store.qList.productQs,
});//connects the prop to the state saved in the store


const mapDispatchToProps = (dispatch) => ({
  moreAnsweredQuestionsClick: () => dispatch(expandQuestions(true)), //link more question button event
  onAddAnswerClick: () => dispatch(showQModal(true)), //link add answer event
});


const QListContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionList);

export default QListContainer;

