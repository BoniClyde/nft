


// Validate Environment Variables
// Runs only in server side.
import { Env } from "@xpresser/env";

const env = Env(
  ".env",
  {
    VITE_LANG: Env.is.string("en"),
    VITE_SERVER_URL: Env.is.string(),
  },
  { expose: true }
);

export default env;
