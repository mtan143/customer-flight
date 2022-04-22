import axios from "axios";
import queryString from 'query-string';
import qs from 'qs';


const axiosClient = axios.create({
    baseURL:'https://flight-mana.herokuapp.com/',
    headers: {
        'Content-Type' : 'application/json'
    },
    // paramsSerializer: params => queryString.stringify(params),
    paramsSerializer: (params) => qs.stringify(params, { encode: false }),
});

// Add a request interceptor
axiosClient.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default axiosClient;