import { MORE_ARTS_ERROR, MORE_ARTS_LOADING, MORE_ARTS_SUCCESS } from "./action";

const initialState = {
    moreArts: [],
    isLoading: false,
    isError: false,
    isData: false

}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case MORE_ARTS_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case MORE_ARTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                moreArts: payload,
                isData: true
            }

        case MORE_ARTS_ERROR:
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