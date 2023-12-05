import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from 'redux-thunk'
import { reducer as UserRegistrationReducer } from "../UserRegisterReducer/reducer";
import { reducer as UserLoginReducer } from "../UserLoginReducer/reducer";
import { reducer as singlePageReducer } from "../SinglePageReducer/reducer";
import { reducer as CommentReducer } from "../CommentReducer/reducer";

const rootReducer = combineReducers({
   UserRegistrationReducer,
   UserLoginReducer,
   singlePageReducer,
   CommentReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))