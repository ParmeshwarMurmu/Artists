import { UPDATE_CITY, UPDATE_CONFIRM_PASSWORD, UPDATE_FIRST_NAME, UPDATE_LAST_NAME, UPDATE_PASSWORD, UPDATE_RESET, UPDATE_STATE } from "./action"

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    state: "",
    city: "",
}

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case UPDATE_FIRST_NAME:
            return {
                ...state,
                firstName: payload
            }

        case UPDATE_LAST_NAME:
            return {
                ...state,
                lastName: payload
            }

        case UPDATE_STATE:
            return {
                ...state,
                state: payload
            }

        case UPDATE_PASSWORD:
            return {
                ...state,
                password: payload
            }

        // case UPDATE_CONFIRM_PASSWORD:
        //     return {
        //         ...state,
        //         confirmPassword: payload
        //     }

            case UPDATE_CITY:
            return {
                ...state,
                city: payload
            }


            case UPDATE_RESET:
            return {
                ...initialState
            }

        default:
            return {
                ...state
            }
    }
}