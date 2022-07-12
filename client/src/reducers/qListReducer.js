
const qExpandReducer = (state = false, action) => {
  if (action.type === 'Q_EXPAND') {
    return action.qExpanded || false;
  }
  return state;
};

const qModalReducer = (state = false, action) => {
  if (action.type === 'Q_MODAL') {
    return action.qModal;
  }
  return state;
};

module.exports.qExpandReducer = qExpandReducer;
module.exports.qModalReducer = qModalReducer;
