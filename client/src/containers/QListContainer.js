import { connect } from 'react-redux';
import QuestionList from '../components/QuestionList'; //import the component
import expandQuestions from '../actions/QListAction'; //and the action

//Need to import the component and action associated with the prop

//Using connect to map both the state and the dispatch to props
const mapStateToProps = (store) => ({ qExpanded: store.qExpanded }); //connects the prop to the state saved in the store
const mapDispatchToProps = (dispatch) => ({ //links the event handler to the store via dispatch
  moreAnsweredQuestionsClick: () => dispatch(expandQuestions(true))
});
const QListContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionList);

export default QListContainer;

/**


EXAMPLE

import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';  //import the action

const mapStateToProps = (storeData) => ({videos: storeData.videos});  //connects the prop to the state saved in the store
const mapDispatchToProps = (dispatch) => ({                           //links the event handler to the store via dispatch
  handleVideoListEntryTitleClick: (choice) => dispatch(changeVideo(choice))
});

const VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

****Will not have to map dispatch to components that do not use event handlers

 */
