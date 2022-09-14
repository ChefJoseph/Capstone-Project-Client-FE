let defaultState ={
    user: null
}

let userReducer = (state = defaultState, action) =>{
    switch(action.type) {
        case 'set_user': {
            // let newState = {...state}

            if (action.payload) {
                console.log("set_user");

                return {user: action.payload}
            } else {
                return state
            }
        }
        case 'opposite_set_user':{
            console.log("opposite_set_user")
            return {user: null}
            
        }
        default:
            return state
    }
}
export default userReducer