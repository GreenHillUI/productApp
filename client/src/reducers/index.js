/**
 * To add your reducer to the store:
 *  Add a path to your reducer to the import list
 *  Add an object with a !unique! key to the exported object
 */
import textReducer from './textReducer';

export default {
  searchQuery: textReducer,
};
