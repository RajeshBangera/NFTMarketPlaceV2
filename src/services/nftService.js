import Communication from "./Communication";
import config from "../config";
import { useDispatch, useSelector } from "react-redux";

const header = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true,
};

const nftService = {
  loadAllNft(dispatch, userId) {
    console.log("load all nft");
    const customHeaders = { ...header, uid: userId };
    Communication.getMethod(config.endPoints.getAllNfts, {
      headers: customHeaders,
    })
      .then((nfts) => {
        console.log(nfts);
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
  uploadNft(dispatch, formData, selectedFile, userId) {
    console.log("upload nft");
    const customHeaders = { ...header, uid: userId };
    Communication.postMethodForm(config.endPoints.uploadNft, formData, {
      headers: customHeaders,
    })
      .then((response) => {
        console.log("proposal uploaded successfully");
        dispatch({
          type: "UPLOAD_PROPOSAL",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("porposal  error");
      });
  },
  registerUser(dispatch, formData) {
    console.log("register user");
    Communication.postMethodForm(
      config.endPoints.registerUser,
      formData,
      header
    )
      .then((response) => {
        console.log("registration successfull");
        console.log(response.data);
        dispatch({
          type: "REGISTER_USER",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("registration error");
      });
  },
  loginUser(dispatch, formData) {
    console.log("login user");
    console.log(formData);
    Communication.postMethodForm(config.endPoints.loginUser, formData, header)
      .then((response) => {
        console.log("login successfull");
        dispatch({
          type: "LOGIN_USER",
          payload: response.data,
        });
        const customHeaders = { ...header, uid: response.data.uid };
        console.log("uid is");
        console.log(customHeaders);
        Communication.postMethodForm(
          config.endPoints.fetchUserDetails,
          formData,
          {
            headers: customHeaders,
          }
        )
          .then((response) => {
            dispatch({
              type: "USER_DETAILS",
              payload: response.data,
            });
          })
          .catch((error) => {
            console.log("Fetch user details error");
          });
      })
      .catch((error) => {
        console.log("login error");
      });
  },
};
export default nftService;
