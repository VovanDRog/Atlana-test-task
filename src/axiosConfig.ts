import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: "https://api.github.com/",
  headers: {
    Authorization: "token faffb12b19f421c6d87fbf6c69ea5ec3dc4c2efd",
  },
};

const client: AxiosInstance = axios.create(config);

export default client;
