import { USER_POST_ERROR, USER_POST_LOADING, USER_POST_SUCCESS } from "./action"

const initialState = {
    userPost: [],
    isLoading: false,
    isError: false,
    isData: false
}

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case USER_POST_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case USER_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isData: true,
                userPost: payload


            }

        case USER_POST_ERROR:
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