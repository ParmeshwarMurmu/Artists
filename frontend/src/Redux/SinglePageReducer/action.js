import axios from "axios"

export const SINGLE_PAGE_DATA_LOADING = "SINGLE_PAGE_DATA_LOADING"
export const SINGLE_PAGE_DATA_SUCCESS = "SINGLE_PAGE_DATA_SUCCESS"
export const SINGLE_PAGE_DATA_ERROR = "SINGLE_PAGE_DATA_ERROR"


export const singlePageDataLoadingAction = ()=>{
    return {type:SINGLE_PAGE_DATA_LOADING}
}


export const singlePageDataSuccessAction = (payload)=>{
    return {type:SINGLE_PAGE_DATA_SUCCESS, payload}
}


export const singlePageDataErrorAction = ()=>{
    return {type:SINGLE_PAGE_DATA_ERROR}
}

export const getSinglePageData = (id)=>(dispatch)=>{
    // alert(`${id}`)
    console.log("action", id);
    dispatch(singlePageDataLoadingAction())
    axios.get(`https://artists-jvdl.onrender.com/post/singlePost/${id}`)
        .then((res)=>{
            dispatch(singlePageDataSuccessAction(res.data.singleData))
            console.log(res.data);
           
        })
        .catch((err)=>{
            dispatch(singlePageDataErrorAction())
            console.log(err);
        })

}