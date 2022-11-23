import config from "../config";
import axios from "axios";

const Communication = {
  getMethod(endpoint) {
    return axios.get(config.baseUrl + endpoint).then((response) => {
      return response.data;
    });
  },
  postMethod(endpoint, payload, selectedFile) {
    const header = {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
    };
    const formData = new FormData();
    formData.append("data", payload);
    formData.append("file", selectedFile);
    return axios
      .post(config.baseUrl + endpoint, formData, header)
      .then((result) => {
        console.log("Upload success");
      })
      .catch((err) => {
        console.log("Upload error");
      });
  },
  postMethodForm(endpoint, payload, header) {
    console.log("payload here  : ");
    console.log(payload);
    console.log(header);
    return axios
      .post(config.baseUrl + endpoint, payload, header)
      .then((result) => {
        console.log(result);
        console.log("Post Success");
        return result;
      })
      .catch((err) => {
        console.log("Upload error");
      });
  },
};
export default Communication;
