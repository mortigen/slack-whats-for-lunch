import { path, prop, compose } from "ramda";

import { getPayload, getViewValues } from "../../../utils/slack/actions";
import { to } from "../../../utils/asyncHelpers";
import { slackApi } from "../../../utils/slack/api";

export const createLunch = async (req, res) => {
  const payload = getPayload(req);
  const view = prop("view", payload);

  const channelId = compose(
    prop("channel_id"),
    JSON.parse,
    prop("private_metadata"),
  )(view);

  const values = getViewValues(view);

  const lunch = {
    name: path(["lunch-name", "name", "value"], values),
    menuUrl: path(["lunch-menu", "url", "value"], values),
    timeout: path(
      ["collecting-orders-timeout", "timeout", "selected_option", "value"],
      values,
    ),
    orderingMode: path(
      ["ordering-mode", "mode", "selected_option", "value"],
      values,
    ),
  };

  const [err] = await to(
    slackApi.chat.postMessage({
      text: "Lunch created",
      channel: channelId,
      as_user: false,
    }),
  );

  console.log(lunch);

  if (err) {
    console.log(JSON.stringify(err));
    res.status(200);
    res.send({ Error: "Problem with sending message" });
  } else {
    res.status(200);
    res.send();
  }
};
