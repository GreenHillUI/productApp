
const qListReducer = (state = {}, action) => {
  switch (action.type) {
    case "Q_MODAL":
      return {
        ...state,
        qModal: action.payload
      };
    case "A_MODAL":
      return {
        ...state,
        aModal: action.payload.on,
        aModalQ: action.payload.q
      };
    case "Q_EXPAND":
      return {
        ...state,
        qExpandedBy: action.payload
      };
    case "SEARCH_ENTRY":
      return {
        ...state,
        qFilter: action.payload
      };
    case "SET_QUESTIONS":
      return {
        ...state,
        productQs: action.payload,
        qExpandedBy: false
      };
    default:
      return state;
  }
};


export default qListReducer;

