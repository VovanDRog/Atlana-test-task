import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const headers: any = {};
const token = process.env.REACT_APP_GITHUB_TOKEN;
if (token) {
  headers["Authorization"] = `token ${process.env.REACT_APP_GITHUB_TOKEN}`;
}

const config: AxiosRequestConfig = {
  baseURL: "https://api.github.com/",
  headers,
};

const client: AxiosInstance = axios.create(config);

export default client;
