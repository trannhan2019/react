import axios from "axios";

const baseURL = "http://localhost:5000/api/";

const sessionClient = axios.create({
  baseURL,
  withCredentials: true,
});

sessionClient.interceptors.request.use(async (config) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
    },
  };
});

sessionClient.interceptors.response.use(
  (response) => {
    // if (response && response.data) return response.data;
    return response;
  },
  (error) => {
    throw error.response.data;
  }
);

export default sessionClient;
