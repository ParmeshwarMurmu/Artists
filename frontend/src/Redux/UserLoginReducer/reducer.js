import { LOGIN_EMAIL, LOGIN_PASSWORD, LOGIN_RESET } from "./action"

const initialState = {
    email: "",
    password: "",
}

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        
        case LOGIN_EMAIL:
            return {
                ...state,
                email: payload
            }

        case LOGIN_PASSWORD:
            return {
                ...state,
                password: payload
            }

            case LOGIN_RESET:
            return {
                ...initialState
            }

        default:
            return {
                ...state
            }
    }
}