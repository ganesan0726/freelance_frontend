import axios from "axios";

axios.interceptors.request.use(
  function (config) {
    //   if (!config.url.endsWith("/login") && !config.url.endsWith("/register")) {
    const auth = localStorage.getItem('Token');
    const token = "Bearer " + auth
    config.headers['Authorization'] = token;
    //   }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export const baseUrl = "https://www.epiic.amrithaa.net/backend/api";