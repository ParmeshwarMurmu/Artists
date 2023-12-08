import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from 'redux-thunk'
import { reducer as UserRegistrationReducer } from "../UserRegisterReducer/reducer";
import { reducer as UserLoginReducer } from "../UserLoginReducer/reducer";
import { reducer as singlePageReducer } from "../SinglePageReducer/reducer";
import { reducer as CommentReducer } from "../CommentReducer/reducer";
import { reducer as UserCommentReducer } from "../UserCommentReducer/reducer";
import { reducer as MoreArtsReducer } from "../MoreArtsReducer/reducer";
import { reducer as SuggestedArtsReducer } from "../SuggestedArtsReducer/reducer";
import { reducer as ArtSubmissionReducer } from "../ArtSubmissionReducer/reducer";
import { reducer as AllArtsReducer } from "../AllArtsReducer/reducer";

const rootReducer = combineReducers({
   UserRegistrationReducer,
   UserLoginReducer,
   singlePageReducer,
   CommentReducer,
   UserCommentReducer,
   MoreArtsReducer,
   SuggestedArtsReducer,
   ArtSubmissionReducer,
   AllArtsReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))