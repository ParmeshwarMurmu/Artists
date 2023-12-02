


export const LOGIN_EMAIL = "LOGIN_EMAIL"
export const LOGIN_PASSWORD = "LOGIN_PASSWORD"
export const LOGIN_RESET = "LOGIN_RESET"

export const loginEmailAction = (payload)=>{
    return {type:LOGIN_EMAIL, payload}
}

export const loginPasswordAction = (payload)=>{
    return {type:LOGIN_PASSWORD, payload}
}


export const loginResetAction = ()=>{
    return {type:LOGIN_RESET}
}

