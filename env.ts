import { Env } from "@xpresser/env";

const env = Env(
  ".env",
  {
    VITE_LANG: Env.is.string("en"),
    VITE_SERVER_URL: Env.is.string(""),
    VITE_BLOG_URL: Env.is.string(""),
  },
  { expose: true, required:['VITE_SERVER_URL','VITE_LANG' ,'VITE_BLOG_URL'] }
);

export default env;
