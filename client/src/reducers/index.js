import { combineReducers } from 'redux';

import expandedViewReducer from './expandedViewReducer';
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
import productIdReducer from './productIdReducer';
import reviewsMetaReducer from './reviewsMetaReducer';

//IMPORT ALL REDUCERS AS THEY ARE CREATED AND ADD THEM TO THE ROOT REDUCER

const reducers = {
  expandedView: expandedViewReducer,
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
  productId: productIdReducer,
  reviewsMeta: reviewsMetaReducer,
};

export default combineReducers(reducers);
