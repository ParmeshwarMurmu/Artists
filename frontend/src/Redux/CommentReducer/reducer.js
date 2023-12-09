import { USER_COMMENT, USER_COMMENT_LOADING, USER_COMMENT_RESET } from "./action";

const initialState = {
    comment: "",
    commentLoading: false
}

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case USER_COMMENT_LOADING:
            return {
                ...state,
                commentLoading: true
            }
        case USER_COMMENT:
            return {
                ...state,
                comment: payload
            }

        case USER_COMMENT_RESET:
            return {

                ...state,
                comment: "",
                commentLoading: false
            }
        default:
            return {
                ...state,

            }
    }

}