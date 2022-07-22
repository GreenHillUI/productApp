export default (state = {}, action) => {
  switch (action.type) {
    case 'SETCHARACTERISTICS':
      return action.characteristics;
    default:
      return state;
  }
};
