import express from "express";
import { cond, equals, path } from "ramda";

import { urlencodedParser } from "../../middleware";
import { ACTION_TYPE, CALLBACK_ID } from "./actions.constants";
import { getPayload } from "../../utils/slack/actions";

const handleViewSubmissions = (req, res) => {
  const callbackId = path(["view", "callback_id"], getPayload(req));

  cond([
    [
      equals(CALLBACK_ID.CREATE_LUNCH),
      () => res.redirect(307, "../lunch/create")
    ]
  ])(callbackId);
};

export const actionsRouter = express.Router();
actionsRouter.post("/", urlencodedParser, (req, res) => {
  const { type } = getPayload(req);

  cond([
    [equals(ACTION_TYPE.VIEW_SUBMISSION), () => handleViewSubmissions(req, res)]
  ])(type);
});
