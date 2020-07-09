const initialState = { count: 0, text: "potato" };

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case "UPDATE":
      return { ...oldState, count: oldState.count + action.amount };
    default:
      return oldState;
  }
};

export default reducer;
