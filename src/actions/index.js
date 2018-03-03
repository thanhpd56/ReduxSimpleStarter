import axios from "axios";

export const FETCH_POST = "FETCH_POSTS";
export const DELETE_POST = "DELETE_POST";

export function fetchPosts() {
  const URL = "http://reduxblog.herokuapp.com/api/posts?key=phanthanh";
  const postsRequest = axios.get(URL);
  console.log(postsRequest);

  return {
    type: FETCH_POST,
    payload: postsRequest,
  };
}

export const deletePost = (id, callback) => {
  const URL = `http://reduxblog.herokuapp.com/api/posts/${id}?key=phanthanh`;
  axios.delete(URL)
    .then(() => callback());
  return {
    type: DELETE_POST,
    payload: id
  };
};

