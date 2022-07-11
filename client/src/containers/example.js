/**
 * This is where you will map the state / dispatch to props
 * You will also need to import the component and action associated with the prop

EXAMPLE

import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';    //import the component
import changeVideo from './../actions/currentVideo.js';  //import the action

const mapStateToProps = (storeData) => ({videos: storeData.videos});  //connects the prop to the state saved in the store
const mapDispatchToProps = (dispatch) => ({                           //links the event handler to the store via dispatch
  handleVideoListEntryTitleClick: (choice) => dispatch(changeVideo(choice))
});

const VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

****Will not have to map dispatch to components that do not use event handlers

 */
