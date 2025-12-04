// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://c2877ba7ccb95d5b24259e334f721686@o4510476101091328.ingest.us.sentry.io/4510476106203136",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
  integrations: [
    Sentry.mongooseIntegration()
  ],
});