import { combineReducers } from 'redux';
import metaDataReducer from './metaDataReducer';
import productInfoReducer from './productInfoReducer';
import qListReducer from './qListReducer';
import selectedSkuReducer from './selectedSkuReducer';
import selectedStyleReducer from './selectedStyleReducer';
import stylesReducer from './stylesReducer';

//IMPORT ALL REDUCERS AS THEY ARE CREATED AND ADD THEM TO THE ROOT REDUCER


const rootReducer = combineReducers({
  metaData: metaDataReducer,
 
  qList: qListReducer,
  styles: stylesReducer,
  selectedStyle: selectedStyleReducer,
  productInfo: productInfoReducer,
  selectedSku: selectedSkuReducer,
});

export default rootReducer; //exporting to redux store (store.js)
