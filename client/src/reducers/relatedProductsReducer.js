export default (products = [], action) => {
  switch (action.type) {
    case 'ADDRELATEDPRODUCT':
      return products.concat(action.product);
    default:
      return products;
  }
};
