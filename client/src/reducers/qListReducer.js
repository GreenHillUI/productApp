
const qListReducer = (state = {}, action) => {
  switch (action.type) {
    case "Q_MODAL":
      return {
        ...state,
        qList: {
          ...state.qList,
          hasQModal: action.payload
        }
      };
    case "Q_EXPAND":
      return {
        ...state,
        qList: {
          ...state.qList,
          qExpandedBy: action.payload
        }
      };
    case "SEARCH_ENTRY":
      return {
        ...state,
        qList: {
          ...state.qList,
          qFilter: action.payload
        }
      };
    case "SET_QUESTIONS":
      return {
        ...state,
        qList: {
          ...state.qList,
          productQs: action.payload
        }
      };
    default:
      return state;
  }
};


module.exports.qListReducer = qListReducer;

