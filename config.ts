import { Maybe } from "js-genie/utils/typescript";

export const isDev = import.meta.env.DEV as boolean;
export const serverUrl = import.meta.env.VITE_SERVER_URL as Maybe<string>;
export const clientUrl = import.meta.env.VITE_CLIENT_URL as Maybe<string>;
export const url = import.meta.env.VITE_APP_URL as Maybe<string>;
