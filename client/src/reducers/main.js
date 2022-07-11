import { combineReducers } from 'redux';
import { qExpandReducer } from './qExpandReducer.js';
//IMPORT ALL REDUCERS AS THEY ARE CREATED AND ADD THEM TO THE ROOT REDUCER

//The format is a ( key: value ) pair, the key is a property of state.. and then the reducer that affects it, is it's value

const rootReducer = combineReducers({
  qExpanded: qExpandReducer,
  //state1: stateReducer1,
  //state2: stateReducer2,
  //etc
});

 export default rootReducer; //exporting to redux store (store.js)
