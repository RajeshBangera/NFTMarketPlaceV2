import Communication from "./Communication";
import config from "../config";
const nftService = {
  loadAllNft(dispatch) {
    console.log("load all nft");
    Communication.getMethod(config.endPoints.getAllNfts)
      .then((nfts) => {
        dispatch({
          type: "LOAD_ALL_NFT",
          payload: nfts,
        });
      })
      .catch(() => {
        dispatch({
          type: "ERROR",
          payload: null,
        });
      })
      .finally(() => {});
  },
  uploadNft(dispatch, formData, selectedFile) {
    console.log("upload nft");
    Communication.postMethod(config.endPoints.uploadNft, formData, selectedFile)
      .then(() => {
        console.log("upload successfull");
      })
      .catch((error) => {
        console.log("upload error");
      });
  },
};
export default nftService;
