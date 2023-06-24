import axios from "axios";
import { serverUrl } from "./config";

const headers: Record<string, string> = {};

// create a new instance of axios with a custom config.

export const $axios = axios.create({
  baseURL: serverUrl,
});


// Add request interceptor
$axios.interceptors.request.use(
  (config) => {
    // console.log("Request was made to " + config.url);
    // Modify the config object before the request is sent
    // For example, you can add headers or perform other transformations
    config.headers = {
      ...config.headers,
      "X-Custom-Header": "Custom Value",
    };
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Add response interceptor
$axios.interceptors.response.use(
  (response) => {
    // console.log("Response was received from " + response.config.url);
    // Modify the response data before it is returned
    // For example, you can transform the data or handle errors globally
    return response;
  },
  (error) => {
    // Handle response error
    return Promise.reject(error);
  }
);

export function useClientFetch<T>(
  url: string,
  options?: {
    lazy?: boolean;
    query?: Record<string, string | number>;
  }
) {
  const data = ref<T | null>(null);
  const pending = ref<boolean>(false);
  const error = ref<Error | null>(null);

  async function fetchData() {
    try {
      pending.value = true;
      const response = await $axios.get(url, {
        params: options?.query,
        headers: {
          ...headers,
        },
      });
      data.value = response.data;
    } catch (err: any) {
      error.value = err.response.data;
    } finally {
      pending.value = false;
    }
  }

  if (options?.lazy !== false) {
    fetchData();
  }

  return { data, pending, error, refresh: fetchData };
}
