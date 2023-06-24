import axios from "axios";
import { serverUrl } from "./config";

const headers: Record<string, string> = {};
/*
export function useClientFetch<T>(url: string, options?: {
  lazy?: boolean;
  query?: Record<string, string | number>;
}) {
  const { data, pending, error, refresh } = useFetch<T>(url, {
    lazy: true,
    baseURL: serverUrl,
    headers: {
      ...headers,
    },
    ...options,
    onRequest({ request, options }) {
    },
    onRequestError({ request, options, error }) {},
    onResponse({ request, response, options }) {
    },
    onResponseError({ request, response, options }) {},
  });

  return { data, pending, error, refresh };
}
*/

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
      const response = await axios.get(url, {
        params: options?.query,
        baseURL: serverUrl,
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
