import Raven from "raven-js";

function init() {
  Raven.config(
    "https://1d248396a0164c9d80c81282ea76066b@o405957.ingest.sentry.io/5272464",
    {
      release: "1-0-0",
      environment: "development-test",
    }
  ).install();
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log,
};
