const init = {
  count: 0,
};

export default function counterReducer(state = init, action) {
  switch (action.type) {
    case "INC":
      return { count: state.count + 1 };
    default:
      return state;
  }
}
