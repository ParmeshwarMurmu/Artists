import { ART_SUBMISSION_COMPLETED, ART_SUBMISSION_ERROR, ART_SUBMISSION_LOADING, ART_SUBMISSION_SUCCESS, USER_COMMENT, USER_COMMENT_RESET } from "./action";

const initialState = {
    isLoading: false,
    isError: false,
    completed: false
}

export const reducer = (state = initialState, {type, payload})=>{

    switch (type) {
        case ART_SUBMISSION_LOADING:
            return {
                ...state,
                isLoading: true
            }

            case ART_SUBMISSION_SUCCESS:
            return {
               ...state,
               isLoading: false,
               completed: true

               
            }

            case ART_SUBMISSION_ERROR:
            return {
               ...state,
               isLoading: false,
               isError: true

               
            }

            case ART_SUBMISSION_COMPLETED:
            return {
               ...state,
               completed: false

               
            }
        default:
            return {
                ...state,
        
            }
    }

}