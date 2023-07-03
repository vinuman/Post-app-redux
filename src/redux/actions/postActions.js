import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from "./actiontypes";

import axios from "axios";

export const fetchPostRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};

export const fetchPostSuccess = (data) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: data,
  };
};

export const fetchPostFailure = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
};

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostRequest());
    axios
      .get("https://gauravgitacc.github.io/postAppData/posts.json")
      .then((response) => {
        dispatch(fetchPostSuccess(response.data));
        console.log(response.data);
      })
      .catch((error) => dispatch(fetchPostFailure(error.message)));
  };
};
