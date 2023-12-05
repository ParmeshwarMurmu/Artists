import { USER_COMMENT, USER_COMMENT_RESET } from "./action";

const initialState = {
    comment: ""
}

export const reducer = (state = initialState, {type, payload})=>{

    switch (type) {
        case USER_COMMENT:
            return {
                ...state,
                comment: payload
            }

            case USER_COMMENT_RESET:
            return {
                ...initialState
               
            }
        default:
            return {
                ...state,
        
            }
    }

}