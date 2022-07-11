
const qExpandReducer = (state = false, action) => {
  if (action.type === 'Q_EXPAND') {
    return action.expand;
  }
  return state;
};

module.exports.qExpandReducer = qExpandReducer;