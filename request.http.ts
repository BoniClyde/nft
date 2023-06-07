import { serverUrl } from "./app.config";

const headers: Record<string, string> = {};
export function useClientFetch<T>(url: string) {
  const { data, pending, error, refresh } = useFetch<T>(url, {
    lazy: true,
    baseURL: serverUrl,
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
