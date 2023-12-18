import axios from "axios"
import { APP_URL } from "../../Variables/Variables"


export const MORE_ARTS_LOADING = "MORE_ARTS_LOADING"
export const MORE_ARTS_SUCCESS = "MORE_ARTS_SUCCESS"
export const MORE_ARTS_ERROR = "MORE_ARTS_ERROR"


export const moreArtsLodingAction  = ()=>{
    return {type: MORE_ARTS_LOADING}

}


export const moreArtsSuccessAction  = (payload)=>{
    return {type: MORE_ARTS_SUCCESS, payload}

}


export const moreArtsErrorAction  = ()=>{
    return {type: MORE_ARTS_ERROR}

}



export const getMoreArtsData  = (id)=>(dispatch)=>{
   dispatch(moreArtsLodingAction());
   axios.get(`${APP_URL}/post/moreArts/${id}`)
        .then((res)=>{
            dispatch(moreArtsSuccessAction(res.data.moreArts))
            console.log(res.data);
           
        })
        .catch((err)=>{
            dispatch(moreArtsErrorAction())
            console.log(err);
        })


}

