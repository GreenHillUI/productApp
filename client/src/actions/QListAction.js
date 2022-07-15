const expandQuestions = (bool) => (
  {
    type: 'Q_EXPAND',
    payload: bool
  }
);

const showQModal = (bool) => (
  {
    type: 'Q_MODAL',
    payload: bool
  }
);

module.exports.expandQuestions = expandQuestions;
module.exports.showQModal = showQModal;