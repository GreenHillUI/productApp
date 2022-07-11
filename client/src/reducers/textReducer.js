/**
 * This is a simple example reducer
 * @param state The current state of the reducer
 * Default value will be the initial state
 * @param action action dispatched by a component
 * the action object has at least 1 key, 'type', designating the type of action to take
 */
export default (state = '', action) => {
  switch (action.type) {
    case 'SETQUERY':
      return action.q;
    default:
      return state;
  }
};
