import { USER_FAVOURITE_ERROR, USER_FAVOURITE_LOADING, USER_FAVOURITE_SUCCESS } from "./action"


const initialState = {
    userFavourite: [],
    isLoading: false,
    isError: false,
    isData: false
}

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case USER_FAVOURITE_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case USER_FAVOURITE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isData: true,
                userFavourite: payload


            }

        case USER_FAVOURITE_ERROR:
            return {
                ...state,
                isError: true


            }
        default:
            return {
                ...state,

            }
    }

}