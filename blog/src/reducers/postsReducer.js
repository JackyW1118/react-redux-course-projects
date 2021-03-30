/* eslint-disable import/no-anonymous-default-export */
export default (state = [], action) => {
  //reducers supposed to be pure, output ONLY depend on previous state and action
  //never mutate state, return new state

  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};
