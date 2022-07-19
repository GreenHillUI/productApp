import { combineReducers } from 'redux';

import galleryReducer from './galleryReducer';
import metaDataReducer from './metaDataReducer';
import productInfoReducer from './productInfoReducer';
import qListReducer from './qListReducer';
import quantityReducer from './quantityReducer';
import selectedSkuReducer from './selectedSkuReducer';
import selectedStyleReducer from './selectedStyleReducer';
import stylesReducer from './stylesReducer';
import relatedProductsReducer from './relatedProductsReducer';
import reviewsReducer from './reviewsReducer';

//IMPORT ALL REDUCERS AS THEY ARE CREATED AND ADD THEM TO THE ROOT REDUCER

const reducers = {
  metaData: metaDataReducer,
  qList: qListReducer,
  styles: stylesReducer,
  selectedStyle: selectedStyleReducer,
  productInfo: productInfoReducer,
  selectedSku: selectedSkuReducer,
  displayIndex: galleryReducer,
  quantity: quantityReducer,
  relatedProducts: relatedProductsReducer,
  reviews: reviewsReducer,
};

export default combineReducers(reducers);
