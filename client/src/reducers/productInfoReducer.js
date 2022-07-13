export default (state = {}, action) => {
  switch (action.type) {
    case 'SETPRODUCTINFO':
      return action.productInfo;
    default:
      return state;
  }
};