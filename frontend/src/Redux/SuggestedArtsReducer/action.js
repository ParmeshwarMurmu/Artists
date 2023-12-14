import axios from "axios"


export const SUGGESTED_ARTS_LOADING = "SUGGESTED_ARTS_LOADING"
export const SUGGESTED_ARTS_SUCCESS = "SUGGESTED_ARTS_SUCCESS"
export const SUGGESTED_ARTS_ERROR = "SUGGESTED_ARTS_ERROR"


export const sggestedArtsLodingAction  = ()=>{
    return {type: SUGGESTED_ARTS_LOADING}

}


export const sggestedArtsSuccessAction  = (payload)=>{
    return {type: SUGGESTED_ARTS_SUCCESS, payload}

}


export const sggestedArtsErrorAction  = ()=>{
    return {type: SUGGESTED_ARTS_ERROR}

}



export const getSggestedArtsData  = ()=>(dispatch)=>{
   dispatch(sggestedArtsLodingAction());
   axios.get(`https://artists-hrw4.onrender.com/post/suggestedArts`)
        .then((res)=>{
            dispatch(sggestedArtsSuccessAction(res.data.suggestedArts))
            console.log(res.data);
           
        })
        .catch((err)=>{
            dispatch(sggestedArtsErrorAction())
            console.log(err);
        })


}

