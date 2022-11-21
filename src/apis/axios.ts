import axios, { AxiosError } from "axios";

const instance = axios.create({
  baseURL: `http://13.124.172.5:8080`,
  timeout: 10000,
});

instance.interceptors.request.use(
  async function (config) {
    const accessToken = await localStorage.getItem("access_token");
    accessToken
      ? (config.headers = {
          Authorization: `Bearer ${accessToken}`,
        })
      : null;
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

export default instance;
