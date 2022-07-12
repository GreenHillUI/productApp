import * as Redux from 'redux';
import reducers from './reducers';

// combineReducers generates a central reducer from all reducers in ./reducers
// Every file in ./reducers needs to export an object with one key
// The key for each reducer must be unique, as it becomes part of the central store
const rootReducer = Redux.combineReducers(reducers);

const store = Redux.legacy_createStore(rootReducer);

export default store;
