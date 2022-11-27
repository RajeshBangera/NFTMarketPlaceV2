const initialState = [
  {
    address: "",
    dateOfRegistration: "",
    docType: "",
    email: "",
    isApproved: 0,
    name: "",
    nomuCoin: 0,
    proposals: [],
    transaction: [],
    uid: "",
  },
];

function borrowerReducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_ALL_BORROWER":
      console.log("borrowerReducer called");
      console.log(action.payload);
      var data = {
        address: action.payload.payload.address,
        dateOfRegistration: action.payload.payload.dateOfRegistration,
        docType: action.payload.payload.docType,
        email: action.payload.payload.email,
        isApproved: action.payload.payload.isApproved,
        name: action.payload.payload.name,
        nomuCoin: action.payload.payload.nomuCoin,
        proposals: action.payload.payload.proposals,
        transaction: action.payload.payload.transaction,
        uid: action.payload.payload.uid,
      };
      console.log(data);
      return [...state, data];
    case "CLEAR_ALL_BORROWER":
      console.log("Clear borrower called");
      return initialState;
    case "ERROR":
      return { ...state };
    default:
      return state;
  }
}
export default borrowerReducer;
