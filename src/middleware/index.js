import morgan from "morgan";

export { urlencodedParser, jsonParser } from "./bodyParser";

export const setMiddleware = app => {
  app.use(morgan("combined"));
};
