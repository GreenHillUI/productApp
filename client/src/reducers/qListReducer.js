
const qListReducer = (state = {}, action) => {
  switch (action.type) {
    case "Q_MODAL":
      return {
        ...state,
        qList: {
          ...state.qList,
          qModal: action.payload
        }
      };
    case "Q_EXPAND":
      return {
        ...state,
        qList: {
          ...state.qList,
          qExpanded: action.payload
        }
      };
    case "SEARCH_ENTRY":
      return {
        ...state,
        qList: {
          ...state.qList,
          qSearch: action.payload
        }
      };
    default:
      return state;
  }
};


module.exports.qListReducer = qListReducer;

