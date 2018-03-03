import { combineReducers } from "redux";
import PostListReducer from "./PostListReducer";

const rootReducer = combineReducers({
  posts: PostListReducer,
});

export default rootReducer;
