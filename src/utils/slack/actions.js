import { compose, path } from "ramda";

export const getPayload = compose(
  JSON.parse,
  path(["body", "payload"]),
);

export const getViewValues = path(["state", "values"]);
