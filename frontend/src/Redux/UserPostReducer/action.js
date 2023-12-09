

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

export const getUserPostData = ()=>()=>{
    
}