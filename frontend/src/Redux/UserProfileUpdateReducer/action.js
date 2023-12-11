

export const UPDATE_FIRST_NAME = "UPDATE_FIRST_NAME"
export const UPDATE_LAST_NAME = "UPDATE_LAST_NAME"
export const UPDATE_PASSWORD = "UPDATE_PASSWORD"
export const UPDATE_CONFIRM_PASSWORD = "UPDATE_CONFIRM_PASSWORD"
export const UPDATE_STATE = "UPDATE_STATE"
export const UPDATE_CITY = "UPDATE_CITY"
export const UPDATE_RESET = "UPDATE_RESET"


export const updateFirstNameAction = (payload)=>{
    return {type:UPDATE_FIRST_NAME, payload}
}

export const updateLastNameAction = (payload)=>{
    return {type:UPDATE_LAST_NAME, payload}
}



export const updatePasswordAction = (payload)=>{
    return {type:UPDATE_PASSWORD, payload}
}

export const updateStateAction = (payload)=>{
    return {type:UPDATE_STATE, payload}
}

export const updateCityAction = (payload)=>{
    return {type:UPDATE_CITY, payload}
}

export const updateConfirmPasswordAction = (payload)=>{
    return {type:UPDATE_CONFIRM_PASSWORD, payload}
}

export const updateResetAction = ()=>{
    return {type:UPDATE_RESET}
}