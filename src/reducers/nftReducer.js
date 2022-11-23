const initialState = {
  isLoaded: false,
  isProposalUploaded: false,
  nftData: [],
};

function nftReducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_ALL_NFT":
      console.log("reducer data here");
      var data = { ...state, nftData: action.payload, isLoaded: true };
      console.log(data);
      return { ...state, nftData: action.payload, isLoaded: true };
    case "UPLOAD_PROPOSAL":
      console.log("reducer upload proposal");
      var newdata = {
        ...state,
        isProposalUploaded: action.payload.status === "success" ? true : false,
      };
      console.log(newdata);
      return {
        ...state,
        isProposalUploaded: action.payload.status === "success" ? true : false,
      };
    case "ERROR":
      return { ...state };
    default:
      return state;
  }
}
export default nftReducer;
