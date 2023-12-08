import { ALL_ARTS_ERROR, ALL_ARTS_LOADING, ALL_ARTS_SUCCESS } from "./action";

const initialState = {
    isLoading: false,
    data: [],
    isError: false,
    isData: false
}

export const reducer = (state = initialState, {type, payload})=>{

    switch (type) {
        case ALL_ARTS_LOADING:
            return {
                ...state,
                isLoading: true
            }

            case ALL_ARTS_SUCCESS:
            return {
               ...state,
               isLoading: false,
               data: payload,
               isData: true

               
            }

            case ALL_ARTS_ERROR:
            return {
               ...state,
               isLoading: false,
               isError: true

               
            }
        default:
            return {
                ...state,
        
            }
    }

}