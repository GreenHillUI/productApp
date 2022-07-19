export default (state = [], action) => {
  switch (action.type) {
    case 'SETREVIEWS':
      return action.reviews;
    default:
      return state;
  }
};
