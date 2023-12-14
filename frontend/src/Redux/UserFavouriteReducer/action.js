import axios from "axios"


export const USER_FAVOURITE_LOADING = 'USER_FAVOURITE_LOADING'
export const USER_FAVOURITE_SUCCESS = 'USER_FAVOURITE_SUCCESS'
export const USER_FAVOURITE_ERROR = 'USER_FAVOURITE_ERROR'

export const userFavouriteLoadingAction = ()=>{
    return {type: USER_FAVOURITE_LOADING}
}

export const userFavouriteSuccessAction = (payload)=>{
    return {type: USER_FAVOURITE_SUCCESS, payload}
}

export const userFavouriteErrorAction = ()=>{
    return {type: USER_FAVOURITE_ERROR}
}

const token = localStorage.getItem('Artist-Token')
const userId = localStorage.getItem('Artist-UserId')

const headers = {
    Authorization: `bearer ${token}`,
};


export const getUserFavouriteData = ()=>(dispatch)=>{
    dispatch(userFavouriteLoadingAction())
    axios.get(`https://artists-hrw4.onrender.com/post/userFavourite`, {headers})
    .then((res)=>{
        console.log(res.data);
        console.log(res.data.userFavourite);
        dispatch(userFavouriteSuccessAction(res.data.userFavourite))
    })
    .catch((err)=>{
        console.log(err);
        dispatch(userFavouriteErrorAction())
    })

}