import axios from "axios"


// export const USER_FAVOURITE_LOADING = 'USER_FAVOURITE_LOADING'
export const ADD_TO_FAVOURITE_SUCCESS = 'ADD_TO_FAVOURITE_SUCCESS'
// export const USER_FAVOURITE_ERROR = 'USER_FAVOURITE_ERROR'

// export const userFavouriteLoadingAction = ()=>{
//     return {type: USER_FAVOURITE_LOADING}
// }

export const addToFavouriteSuccessAction = (payload)=>{
    return {type: ADD_TO_FAVOURITE_SUCCESS, payload}
}

// export const userFavouriteErrorAction = ()=>{
//     return {type: USER_FAVOURITE_ERROR}
// }

const token = localStorage.getItem('Artist-Token')
const userId = localStorage.getItem('Artist-UserId')

const headers = {
    Authorization: `bearer ${token}`,
};


export const addToFavouriteData = (id)=>(dispatch)=>{
    axios.post(`http://localhost:8000/post/addToFavoutrite`, {id},  {headers})
    .then((res)=>{
        console.log(res.data);
        dispatch(addToFavouriteSuccessAction(res.data.msg))
    })
    .catch((err)=>{
        console.log(err);
    })

}