import axios, { AxiosError } from "axios";

const instance = axios.create({
  baseURL: `http://3.35.27.187:8080`,
  timeout: 10000,
});

instance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("access_token");
    accessToken &&
      (config.headers = { Authorization: `Bearer ${accessToken}` });
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

export default instance;
