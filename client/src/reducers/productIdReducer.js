export default (state = 40348, action) => {
  switch (action.type) {
    case 'SETPRODUCTID':
      return action.id;
    default:
      return state;
  }
};
