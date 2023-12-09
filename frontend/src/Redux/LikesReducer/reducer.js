import { USER_LIKES } from "./action"


const initialState = {
    totalLikes: "",
    isLiked: false
}

export const reducer = (state = initialState, {type, payload})=>{

    switch (type) {
        case USER_LIKES:
            return {
                ...state,
                totalLikes: payload.likes,
                isLiked: payload.isLiked
            }

        default:
            return {
                ...state,
        
            }
    }

}