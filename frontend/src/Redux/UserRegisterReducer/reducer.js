import { REGISTER_CONFIRM_PASSWORD, REGISTER_EMAIL, REGISTER_FIRST_NAME, REGISTER_LAST_NAME, REGISTER_PASSWORD } from "./action"

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case REGISTER_FIRST_NAME:
            return {
                ...state,
                firstName: payload
            }

        case REGISTER_LAST_NAME:
            return {
                ...state,
                lastName: payload
            }

        case REGISTER_EMAIL:
            return {
                ...state,
                email: payload
            }

        case REGISTER_PASSWORD:
            return {
                ...state,
                password: payload
            }

        case REGISTER_CONFIRM_PASSWORD:
            return {
                ...state,
                confirmPassword: payload
            }


        default:
            return {
                ...state
            }
    }
}