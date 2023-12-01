import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from 'redux-thunk'
import { reducer as UserRegistrationReducer } from "../UserRegisterReducer/reducer";

const rootReducer = combineReducers({
   UserRegistrationReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))