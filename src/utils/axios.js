import axios from "axios";
import { useUser } from "../stores/user";

export const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
})

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  const store = useUser()
  const userState = store.getState()

  if (!userState) {
    token = ""
  } else {
    const { acesssToken } = userState
    token = acesssToken
  }

  config.headers.Authorization = token;

  return config;
});