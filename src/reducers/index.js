import { combineReducers } from "redux";
import nftReducer from "./nftReducer";
import userReducer from "./userReducer";
// other reducers needs to add here

const rootReducers = combineReducers({
  nft: nftReducer,
  user: userReducer,
});
export default rootReducers;
