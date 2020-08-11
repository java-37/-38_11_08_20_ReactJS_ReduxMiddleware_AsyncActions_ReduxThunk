const init = {
  posts: [],
  loading: false,
  error: null
};

export default function postReducer(state = init, action) {
    console.log(state);
  switch (action.type) {
    case "LOAD":
      return { posts:[], loading: true, error: null };
    case "SET_DATA":
      return { ...state, posts: action.posts, loading: false };
    case "ERROR":
      return { posts:[], loading: false, error: action.error };
    default:
      return state;
  }
}
