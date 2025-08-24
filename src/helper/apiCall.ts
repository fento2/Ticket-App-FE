import axios from "axios";

export const apiCall = axios.create({
  baseURL: process.env.BASE_URL_BE,
});
