export default (state = null, action) => {
  switch (action.type) {
    case 'SETQUANTITY':
      return action.setQuantity;
  
    default:
      return state;
  }
};