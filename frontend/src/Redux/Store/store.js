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
import { reducer as LikesReducer } from "../LikesReducer/reducer";
import { reducer as UserPostReducer } from '../UserPostReducer/reducer'
import { reducer as UserFavouriteReducer } from '../UserFavouriteReducer/reducer';
import { reducer as AddToFavouriteReducer } from "../AddToFavouriteReducer/reducer";
import { reducer as UserProfileUpdateReducer } from "../UserProfileUpdateReducer/reducer";
import { reducer as SearchReducer } from "../SearchReducer/reducer";

const rootReducer = combineReducers({
   UserRegistrationReducer,
   UserLoginReducer,
   singlePageReducer,
   CommentReducer,
   UserCommentReducer,
   MoreArtsReducer,
   SuggestedArtsReducer,
   ArtSubmissionReducer,
   AllArtsReducer,
   LikesReducer,
   UserPostReducer,
   UserFavouriteReducer,
   AddToFavouriteReducer,
   UserProfileUpdateReducer,
   SearchReducer


})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))