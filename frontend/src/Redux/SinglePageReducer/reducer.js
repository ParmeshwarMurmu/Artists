import { SINGLE_PAGE_DATA_ERROR, SINGLE_PAGE_DATA_LOADING, SINGLE_PAGE_DATA_SUCCESS } from "./action";

const initialState = {
    isLoading: false,
    isError: false,
    singleData: {},
    isData: false
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SINGLE_PAGE_DATA_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case SINGLE_PAGE_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                singleData: payload,
                isData: true
            }

        case SINGLE_PAGE_DATA_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true
            }

        default:
            return {
                ...state
            }
    }
}