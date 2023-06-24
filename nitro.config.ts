import { defineNitroConfig } from "nitropack/config";
import { serverUrl } from "./config";

export default defineNitroConfig({
  // preset: "node-server",
  preset: "node-server",
  baseURL: serverUrl,

  
});
