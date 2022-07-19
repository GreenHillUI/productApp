import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

// ADD to the initial state with any data you should be mounting/starting the program with
const initialState = {
  qList: {
    qModal: false,
    qExpandedBy: false,
    qFilter: '',
    productQs: {},
  }
};

// Thunk allows us to dispatch actions asynchronously (think API requests) by making it so that our
// actions can return functions instead of objects (which can invoke dispatch themselves)

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);


export default store;
