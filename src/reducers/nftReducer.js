const initialState = {
  isLoaded: false,
  nftData: [],
};

function nftReducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_ALL_NFT":
      console.log("reducer data here");
      var data = { ...state, nftData: action.payload, isLoaded: true };
      console.log(data);
      return { ...state, nftData: action.payload, isLoaded: true };
    case "ERROR":
      return { ...state };
    default:
      return state;
  }
}
export default nftReducer;
