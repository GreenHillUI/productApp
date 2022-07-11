
const qExpandReducer = (state = false, action) => {
  if (action.type === 'Q_EXPAND') {
    return action.qExpanded || false;
  }
  return state;
};

export default qExpandReducer;