import "dotenv/config";
import express from "express";

import { setMiddleware } from "./middleware";
import { routes } from "./routes";

const { PORT } = process.env;

const app = express();
setMiddleware(app);
routes(app);
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
