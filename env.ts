import { Env } from "@xpresser/env";

const env = Env(
  ".env",
  {
    VITE_LANG: Env.is.string("en"),
    VITE_SERVER_URL: Env.is.string("http://localhost:3000"),
  },
  { expose: true, required:['VITE_SERVER_URL','VITE_LANG' ] }
);

export default env;
