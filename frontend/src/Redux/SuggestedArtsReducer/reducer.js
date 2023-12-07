import { SUGGESTED_ARTS_ERROR, SUGGESTED_ARTS_LOADING, SUGGESTED_ARTS_SUCCESS } from "./action"


const initialState = {
    suggestedArts: [],
    isLoading: false,
    isError: false,
    isData: false

}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SUGGESTED_ARTS_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case SUGGESTED_ARTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                suggestedArts: payload,
                isData: true
            }

        case SUGGESTED_ARTS_ERROR:
            return {
                ...state,
                isLoading: false,
                isData: true
            }

        default:
            return {
                ...state
            }
    }

}