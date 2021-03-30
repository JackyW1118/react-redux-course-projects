import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  //calls the fetchPosts and wait for the output has been dispatched and reducers updated
  await dispatch(fetchPosts());
  //get all unique userId
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  //dispatch action that make request to fetch users with those id
  userIds.forEach((id) => dispatch(fetchUser(id)));
};
