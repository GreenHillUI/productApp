export default(state = {}, action) => {
    switch(action.type) {
        case 'SETSELECTEDSTYLE':
            return action.selectedStyle[0];

        default:
            return state;
    
    }
}