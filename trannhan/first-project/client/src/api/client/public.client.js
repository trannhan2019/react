import axios from "axios";
import queryString from "query-string";

const baseURL = "http://localhost:5000/api/";
// const baseURL = "http://172.16.11.104:5000/api/"; --su dung ten mien hoac qua netword

const publicClient = axios.create({
  baseURL,
  // paramsSerializer: {
  //   encode: (params) => queryString.stringify(params),
  // },
});

publicClient.interceptors.request.use(async (config) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
    },
  };
});

publicClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (error) => {
    throw error.response.data;
  }
);

export default publicClient;
