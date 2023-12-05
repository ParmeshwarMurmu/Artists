import { POST_COMMENT, T } from "./action";

const initialState = {
    postComments: []
}

export const reducer = (state = initialState, {type, payload})=>{

    switch (type) {
        case POST_COMMENT:
            return {
                ...state,
                postComments: payload
            }

        default:
            return {
                ...state,
        
            }
    }

}