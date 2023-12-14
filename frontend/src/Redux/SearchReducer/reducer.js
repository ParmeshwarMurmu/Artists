import {  SEARCH_QUERY_ERROR, SEARCH_QUERY_LOADING, SEARCH_QUERY_SUCCESS } from "./action";

const initialState = {
    query: "",
    isLoading: false,
    isError: false,
    Data: [],
    isData: false

}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SEARCH_QUERY_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case SEARCH_QUERY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                Data: payload,
                isData: true
            }

        case SEARCH_QUERY_ERROR:
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