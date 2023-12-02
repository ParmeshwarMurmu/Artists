

export const REGISTER_FIRST_NAME = "REGISTER_FIRST_NAME"
export const REGISTER_LAST_NAME = "REGISTER_LAST_NAME"
export const REGISTER_EMAIL = "REGISTER_EMAIL"
export const REGISTER_PASSWORD = "REGISTER_PASSWORD"
export const REGISTER_CONFIRM_PASSWORD = "REGISTER_CONFIRM_PASSWORD"
export const REGISTER_IMAGE = "REGISTER_IMAGE"
export const REGISTER_STATE = "REGISTER_STATE"
export const REGISTER_CITY = "REGISTER_CITY"
export const REGISTER_RESET = "REGISTER_RESET"


export const registerFirstNameAction = (payload)=>{
    return {type:REGISTER_FIRST_NAME, payload}
}

export const registerLastNameAction = (payload)=>{
    return {type:REGISTER_LAST_NAME, payload}
}

export const registerEmailAction = (payload)=>{
    return {type:REGISTER_EMAIL, payload}
}

export const registerPasswordAction = (payload)=>{
    return {type:REGISTER_PASSWORD, payload}
}

export const registerConfirmPasswordAction = (payload)=>{
    return {type:REGISTER_CONFIRM_PASSWORD, payload}
}

export const registerResetAction = ()=>{
    return {type:REGISTER_RESET}
}