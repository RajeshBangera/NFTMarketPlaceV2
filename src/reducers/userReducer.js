const initialState = {
  registerMsg: "",
  registerStatus: "",
  isUserLoggedIn: false,
  uid: "",
  uName: "",
  uAddress: "",
  uEmail: "",
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "REGISTER_USER":
      console.log("register user reducer called");
      var data = {
        ...state,
        registerMsg: action.payload.msg,
        registerStatus: action.payload.status,
      };
      console.log(data);
      return {
        ...state,
        registerMsg: action.payload.msg,
        registerStatus: action.payload.status,
      };
    case "LOGIN_USER":
      console.log("login user reducer");
      if (action.payload.status === "success") {
        return {
          ...state,
          isUserLoggedIn: true,
          uid: action.payload.uid,
        };
      } else {
        return initialState;
      }
    case "USER_DETAILS":
      console.log("user details reducer");
      if (action.payload.status === "success") {
        return {
          ...state,
          uName: action.payload.payload.name,
          uAddress: action.payload.payload.address,
          uEmail: action.payload.payload.email,
        };
      } else {
        return initialState;
      }
    case "ERROR":
      return { ...state };
    default:
      return state;
  }
}
export default userReducer;
