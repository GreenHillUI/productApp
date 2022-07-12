export default (state = [], action) => {
    switch(action.type) {
        case 'SETALLSTYLES':
        return action.styles;

        default:
            return state;
    }
} 