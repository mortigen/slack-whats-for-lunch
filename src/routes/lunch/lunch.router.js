import express from "express";

import { urlencodedParser } from "../../middleware";
import { initLunch } from "./init/initLunch.route";
import { createLunch } from "./create/create.route";

export const lunchRouter = express.Router();
lunchRouter.post("/init", urlencodedParser, initLunch);
lunchRouter.post("/create", urlencodedParser, createLunch);
