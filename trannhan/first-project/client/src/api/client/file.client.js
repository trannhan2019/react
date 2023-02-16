import axios from "axios";
import queryString from "query-string";

const baseURL = "http://localhost:5000/api/";

const fileClient = axios.create({
  baseURL,
  paramsSerializer: { encode: (params) => queryString.stringify(params) },
});

fileClient.interceptors.request.use(async (config) => {
  return {
    ...config,
    headers: {
      // "Content-Type": "application/json",
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("actkn")}`,
    },
  };
});

fileClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (err) => {
    throw err.response.data;
  }
);

export default fileClient;
