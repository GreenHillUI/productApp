
const productReducer = (state = [], action) => {
  if (action.type === 'PRODUCTLIST') {
    return action.products || [];
  }
  return state;
};


module.exports.productReducer = productReducer;
