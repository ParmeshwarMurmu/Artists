import {  RESET_QUERY, SEARCH_QUERY_DATA, SEARCH_QUERY_ERROR, SEARCH_QUERY_LOADING, SEARCH_QUERY_SUCCESS } from "./action";

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
               query: payload
            }

            case SEARCH_QUERY_DATA:
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
                isError: true
            }

            case RESET_QUERY:
            return {
                ...state,
                query: ""
            }

        default:
            return {
                ...state
            }
    }

}