import axios from "axios"


export const USER_POST_LOADING = 'USER_POST_LOADING'
export const USER_POST_SUCCESS = 'USER_POST_SUCCESS'
export const USER_POST_ERROR = 'USER_POST_ERROR'

export const userPostLoadingAction = ()=>{
    return {type: USER_POST_LOADING}
}

export const userPostSuccessAction = (payload)=>{
    return {type: USER_POST_SUCCESS, payload}
}

export const userPostErrorAction = ()=>{
    return {type: USER_POST_ERROR}
}

const token = localStorage.getItem('Artist-Token')
const userId = localStorage.getItem('Artist-UserId')

const headers = {
    Authorization: `bearer ${token}`,
};


export const getUserPostData = ()=>(dispatch)=>{
    dispatch(userPostLoadingAction())
    axios.get(`https://again-art.onrender.com/post/userPost`, {headers})
    .then((res)=>{
        console.log(res.data);
        dispatch(userPostSuccessAction(res.data.userPost))
    })
    .catch((err)=>{
        console.log(err);
        dispatch(userPostErrorAction())
    })

}