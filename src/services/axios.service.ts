import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
  timeoutErrorMessage: 'Request timed out',
});

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) config.headers['Authorization'] = 'Bearer ' + token;
    return config;
  },
  error => Promise.reject(error)
);

type Params = {
  [key: string]: string | number | boolean;
};

interface ErrorOptions {
  errorMessage?: string;
  fallback?: unknown;
}

interface getOptions extends ErrorOptions {
  params?: Params;
}

interface postOptions extends ErrorOptions {
  data?: unknown;
}

export class AxiosService {
  static async get<T>(url: string, { params, fallback, errorMessage }: getOptions) {
    try {
      return (await axiosInstance.get(url, { params })).data as T;
    } catch (error) {
      errorMessage ? console.error(errorMessage) : console.error(error);
      return fallback as T;
    }
  }

  static async post<T>(url: string, { data, fallback, errorMessage }: postOptions) {
    try {
      return (await axiosInstance.post(url, data)).data as T;
    } catch (error) {
      errorMessage ? console.error(errorMessage) : console.error(error);
      return fallback as T;
    }
  }

  static async put<T>(url: string, { data, fallback, errorMessage }: postOptions) {
    try {
      return (await axiosInstance.put(url, data)).data as T;
    } catch (error) {
      errorMessage ? console.error(errorMessage) : console.error(error);
      return fallback as T;
    }
  }

  static async delete<T>(url: string, { fallback, errorMessage }: ErrorOptions) {
    try {
      return (await axiosInstance.delete(url)).data as T;
    } catch (error) {
      errorMessage ? console.error(errorMessage) : console.error(error);
      return fallback as T;
    }
  }
}
