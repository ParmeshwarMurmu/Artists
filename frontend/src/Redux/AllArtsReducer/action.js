import axios from "axios"


export const ALL_ARTS_LOADING = "ALL_ARTS_LOADING"
export const ALL_ARTS_SUCCESS = "ALL_ARTS_SUCCESS"
export const ALL_ARTS_ERROR = "ALL_ARTS_ERROR"


export const allArtsLoadingAction = ()=>{
    return {
        type:ALL_ARTS_LOADING
    }
}

export const allArtsSuccessAction = (payload)=>{
    return {
        type:ALL_ARTS_SUCCESS,
        payload

    }
}


export const allArtsErrorAction = ()=>{
    return {
        type:ALL_ARTS_ERROR
    }
}


export const getAllArtsData = ()=>(dispatch)=>{
    dispatch(allArtsLoadingAction())
    axios.get(`https://artists-kg0g.onrender.com/post/`)
    .then((res)=>{
        console.log(res.data);
        dispatch(allArtsSuccessAction(res.data.data))
        
    })
    .catch((err)=>{
        console.log(err);
        dispatch(allArtsErrorAction())
    })
    
}