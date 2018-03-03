import { combineReducers } from "redux";
import PostListReducer from "./PostListReducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  posts: PostListReducer,
  form: formReducer
});

export default rootReducer;
