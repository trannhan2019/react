import axios from "axios";
// import queryString from "query-string";
import jwt_decode from "jwt-decode";
import userApi from "../modules/user.api";

const baseURL = "http://localhost:5000/api/";

const privateClient = axios.create({
  baseURL,
  // paramsSerializer: { encode: (params) => queryString.stringify(params) },
});

privateClient.interceptors.request.use(async (config) => {
  //let accessToken = localStorage.getItem("actkn");
  let date = new Date();

  const decodedToken = jwt_decode(localStorage.getItem("actkn"));
  if (decodedToken.exp < date.getTime() / 1000) {
    const { response, error } = await userApi.refresh();
    // const response = await axios.post();
    console.log(response.token);
    localStorage.setItem("actkn", response.token);
    //console.log(response.token);
  }
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
      // "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("actkn")}`,
    },
  };
});

privateClient.interceptors.response.use(
  (response) => {
    // if (response && response.data) return response.data;
    return response;
  },
  (err) => {
    throw err.response.data;
  }
);

export default privateClient;
