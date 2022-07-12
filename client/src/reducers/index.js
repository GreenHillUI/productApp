/**
 * To add your reducer to the store:
 *  Add a path to your reducer to the import list
 *  Add an object with a !unique! key to the exported object
 */
import textReducer from './textReducer';
import productInfoReducer from './productInfoReducer';
import stylesReducer from './stylesReducer';
import selectedStyleReducer from './selectedStyleReducer';
import selectedSkuReducer from './selectedSkuReducer';

export default {
  searchQuery: textReducer,
  productInfo: productInfoReducer,
  styles: stylesReducer,
  selectedStyle: selectedStyleReducer,
  selectedSku: selectedSkuReducer
};
