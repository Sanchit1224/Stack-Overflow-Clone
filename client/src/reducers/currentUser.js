

const currentUserReducer = (state =null, action) =>{

    switch(action.type){
        case 'FETCT_CURRENT_USER':
            return action.payload;
        default:
            return state;
    }
}

export default currentUserReducer;