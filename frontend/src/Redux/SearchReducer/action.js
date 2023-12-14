

export const SEARCH_QUERY_LOADING = "SEARCH_QUERY_LOADING";
export const SEARCH_QUERY_SUCCESS = "SEARCH_QUERY_SUCCESS";
export const SEARCH_QUERY_ERROR = "SEARCH_QUERY_ERROR";

export const searchQueryLoadingAction = ()=>{
    return {type: SEARCH_QUERY_LOADING}
}

export const searchQuerySuccessAction = ()=>{
    return {type: SEARCH_QUERY_SUCCESS}
}

export const searchQueryErrorAction = ()=>{
    return {type: SEARCH_QUERY_ERROR}
}

export const getsearchedQueryData = (query)=>(dispatch)=>{
    
}