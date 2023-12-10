import { ADD_TO_FAVOURITE_SUCCESS } from "./action"


const initialState = {
    msg: "",
    isAddedToFavourite: false
}

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case ADD_TO_FAVOURITE_SUCCESS:
            return {
                ...state,
                isAddedToFavourite: true,
                msg: payload
            }

        
        default:
            return {
                ...state,

            }
    }

}