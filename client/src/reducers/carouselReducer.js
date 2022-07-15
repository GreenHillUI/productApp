export default (state = 0, action) => {
  switch (action.type) {
    case 'SETDISPLAYINDEX':
      return action.displayIndex;
    case 'INCREMENT':
      return action.displayIndex + 1;
    case 'DECREMENT':
      return action.displayIndex - 1;

    default:
      return state;
  }
};