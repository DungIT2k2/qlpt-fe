import axios from "axios";
import Cookies from 'js-cookie'

const instance = axios.create({
  // baseURL: process.env.BASE_URL || "http://localhost:5000/"
  baseURL: process.env.BASE_URL || 'https://qlpt-be.vercel.app/' ,
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    const token = Cookies.get('Auth-Token');
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return error.response ? error.response : Promise.reject(error);
  }
);

export default instance;