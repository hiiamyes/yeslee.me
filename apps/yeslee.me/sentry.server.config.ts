// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://5f42c9b4aaa4363d480d0b75603f4846@o148391.ingest.us.sentry.io/4507537151688704",

  // Adjust this value in production, or use tracesSampler for greater control
  // tracesSampleRate: 0.1,
  tracesSampler: () => {
    if (process.env.NODE_ENV === "production") {
      return 0.01;
    } else {
      return 0;
    }
  },

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: process.env.NODE_ENV === 'development',
});
