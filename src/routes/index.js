import { lunchRouter } from "./lunch/lunch.router";
import { actionsRouter } from "./actions/actions.router";

export const routes = app => {
  app.use("/lunch", lunchRouter);
  app.use("/actions", actionsRouter);
};
