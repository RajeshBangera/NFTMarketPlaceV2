import { combineReducers } from "redux";
import nftReducer from "./nftReducer";
import userReducer from "./userReducer";
import borrowerReducer from "./borrowerReducer";
// other reducers needs to add here

const rootReducers = combineReducers({
  nft: nftReducer,
  user: userReducer,
  borrower: borrowerReducer,
});
export default rootReducers;
