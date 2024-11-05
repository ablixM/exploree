// api.ts
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "api",
  timeout: 10000,
});

export const getRequest = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response: AxiosResponse<T> = await api.get(url, config);
  return response.data;
};

export const postRequest = async <T, R>(
  url: string,
  data: T,
  config?: AxiosRequestConfig,
): Promise<R> => {
  const response: AxiosResponse<R> = await api.post(url, data, config);
  return response.data;
};

export const putRequest = async <T, R>(
  url: string,
  data: T,
  config?: AxiosRequestConfig,
): Promise<R> => {
  const response: AxiosResponse<R> = await api.put(url, data, config);
  return response.data;
};

export const deleteRequest = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response: AxiosResponse<T> = await api.delete(url, config);
  return response.data;
};
