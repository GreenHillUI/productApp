export default (state = [], action) => {
  switch (action.type) {
    case 'SETSELECTEDSKU':
      return action.selectedSku;

    default:
      return state;
  }
};