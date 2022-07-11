/*

*
*  This file is for the Store
*  Must also import the rootReducer once made

*/


import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/main';

export default createStore(
  rootReducer,
  //{ data }, fill in with initial state
  {},
  applyMiddleware(thunk)
);

//Thunk allows us to dispatch actions asynchronously (think API requests) by making it so that our actions
//can return functions instead of objects (which can invoke dispatch themselves)
