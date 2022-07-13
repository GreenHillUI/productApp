export default (state = {}, action) => {
  switch (action.type) {
    case 'SETMETADATA': 
      return action.metaData;
    default:
      return state;
  }
};