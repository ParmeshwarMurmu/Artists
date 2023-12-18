import axios from "axios";
import { APP_URL } from "../../Variables/Variables";


export const SEARCH_QUERY_LOADING = "SEARCH_QUERY_LOADING";
export const SEARCH_QUERY_SUCCESS = "SEARCH_QUERY_SUCCESS";
export const SEARCH_QUERY_DATA = "SEARCH_QUERY_DATA";
export const SEARCH_QUERY_ERROR = "SEARCH_QUERY_ERROR";
export const RESET_QUERY = "RESET_QUERY";

export const searchQueryLoadingAction = () => {
    return { type: SEARCH_QUERY_LOADING }
}

export const searchQuerySuccessAction = (payload) => {
    return { type: SEARCH_QUERY_SUCCESS, payload }
}

export const searchQueryErrorAction = () => {
    return { type: SEARCH_QUERY_ERROR }
}

export const searchQueryDataAction = (payload) => {
    return { type: SEARCH_QUERY_DATA , payload}
}

export const searchQueryResetAction = () => {
    return { type: RESET_QUERY }
}

export const getSearchedQueryData = (query) => (dispatch) => {

    dispatch(searchQueryLoadingAction())
    axios.get(`${APP_URL}/post/search?searchTerm=${query}`)
        .then((res) => {
            console.log(res);
            dispatch(searchQueryDataAction(res.data.data))
            // dispatch(searchQueryResetAction())

        })
        .catch((err) => {
            console.log(err);
            dispatch(searchQueryErrorAction())

        })


}