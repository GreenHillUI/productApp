const expandQuestions = (bool) => (
  {
    type: 'Q_EXPAND',
    qExpanded: bool
  }
);

const showQModal = (bool) => (
  {
    type: 'Q_MODAL',
    qModal: bool
  }
);

module.exports.expandQuestions = expandQuestions;
module.exports.showQModal = showQModal;