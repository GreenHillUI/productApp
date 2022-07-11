
const qExpandReducer = (state = false, action) => {
  if (action.type === 'Q_EXPAND') {
      return action.qExpanded || false;
  } else {
    return state;
  }
};

export default qExpandReducer;