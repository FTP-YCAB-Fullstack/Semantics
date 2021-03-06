const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      localStorage.setItem("token", action.payload.token);
      return (state = { ...action.payload });

    case "USER_LOGOUT":
      localStorage.clear();
      return (state = {});

    default:
      return state;
  }
};

export default userReducer;
