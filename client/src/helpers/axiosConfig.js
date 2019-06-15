import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3300/api',

}) // gets called once


// this function will run every time a request is made,
// so the headers.authorization token will be available, as opposed to
// having the headers above in the create function
// where the request happens only once
// (if that is used then the browser page would
// need to be refreshed, unless we use the interceptors below)
axiosInstance.interceptors.request.use(

  (config) => {
    config.headers.Authorization =
      localStorage.getItem('token');

    return config;
  },

  (err) => {
    return Promise.reject(err);
  }

) // gets called each time an api request is made

export default axiosInstance;
