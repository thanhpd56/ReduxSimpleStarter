import axios from "axios";

export const FETCH_POSTS = "FETCH_POSTS";
export const DELETE_POST = "DELETE_POST";
export const CREATE_POST = "CREATE_POST";
export const FETCH_POST = "FETCH_POST";


export function fetchPosts() {
  const URL = "http://reduxblog.herokuapp.com/api/posts?key=phanthanh";
  const postsRequest = axios.get(URL);

  return {
    type: FETCH_POSTS,
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

export const createPost = (values, callback) => {
  const URL = "http://reduxblog.herokuapp.com/api/posts?key=phanthanh";
  const createRequest = axios.post(URL, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: createRequest
  };
};

export const fetchPost = (id) => {
  console.log("fetch post");
  const URL = `http://reduxblog.herokuapp.com/api/posts/${id}?key=phanthanh`;
  const getRequest = axios.get(URL);
  console.log("fetch post return action");

  return {
    type: FETCH_POST,
    payload: getRequest
  };
};

