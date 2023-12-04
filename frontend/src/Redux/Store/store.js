import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from 'redux-thunk'
import { reducer as UserRegistrationReducer } from "../UserRegisterReducer/reducer";
import { reducer as UserLoginReducer } from "../UserLoginReducer/reducer";
import { reducer as singlePageReducer } from "../SinglePageReducer/reducer";

const rootReducer = combineReducers({
   UserRegistrationReducer,
   UserLoginReducer,
   singlePageReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))