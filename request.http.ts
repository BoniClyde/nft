import { FetchOptions } from "ofetch";

const headers: Record<string, string> = {};
export function useClientFetch<T>(url: string, options: FetchOptions = {}) {
  const { data, pending, error, refresh } = useFetch<T>(url, {
    lazy: true,
    // baseURL: "http://49.12.208.193:5066",
    baseURL: "http://localhost:5066",
    headers: {
      ...headers,
    },
    onRequest({ request, options }) {
      console.log("onRequest");
    },
    onRequestError({ request, options, error }) {},
    onResponse({ request, response, options }) {
      console.log("onResponse");
    },
    onResponseError({ request, response, options }) {},
  });

  return { data, pending, error, refresh };
}
