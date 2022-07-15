export default (state = [], action) => {
  switch (action.type) {
    case 'SETRELATEDPRODUCTS':
      return action.products;
    default:
      return state;
  }
};
