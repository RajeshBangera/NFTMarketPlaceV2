const initialState = {
  registerMsg: "",
  registerStatus: "",
  buyNftMsg: "",
  isUserLoggedIn: false,
  uid: "",
  uName: "",
  uAddress: "",
  uEmail: "",
  nomuCoin: 0,
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
        console.log(action.payload);
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
      console.log(action.payload);
      if (action.payload.status === "success") {
        return {
          ...state,
          uName: action.payload.payload.name,
          uAddress: action.payload.payload.address,
          uEmail: action.payload.payload.email,
          nomuCoin: action.payload.payload.nomuCoin,
        };
      } else {
        return initialState;
      }
    case "BUY_NFT":
      console.log("buy nft reducer");
      if (action.payload.status === "success") {
        return {
          ...state,
          buyNftMsg: "Bought NFT successfully !!!",
        };
      } else {
        return {
          ...state,
          buyNftMsg: "Error buying NFT successfully !!!",
        };
      }
    case "ERROR":
      return { ...state };
    default:
      return state;
  }
}
export default userReducer;
