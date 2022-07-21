
export default (state = false, action) => {
  switch (action.type) {
    case 'SETEXPANDEDVIEW':
      return action.expandedView;
    default:
      return state;
  }
};
  
  