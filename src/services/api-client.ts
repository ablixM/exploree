import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "api",
});

export class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };

  post = (data: T, config?: AxiosRequestConfig) => {
    return axiosInstance
      .post<T>(this.endpoint, data, config)
      .then((res) => res.data);
  };
}
