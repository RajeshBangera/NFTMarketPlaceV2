import { combineReducers } from "redux";
import nftReducer from "./nftReducer";
// other reducers needs to add here

const rootReducers = combineReducers({
  nft: nftReducer,
});
export default rootReducers;
