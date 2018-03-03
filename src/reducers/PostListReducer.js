import _ from "lodash";
import { FETCH_POSTS, DELETE_POST, FETCH_POST } from "../actions";

const INIT_STATE = [];
export default (state = INIT_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id");
    case DELETE_POST:
      return _.omit(...state, action.payload);
    case FETCH_POST:
      console.log("FETCH post");
      const data = {...state, [action.payload.data.id]: action.payload.data};
      console.log(data);
      return data;
    default:
      return state;
  }
};


