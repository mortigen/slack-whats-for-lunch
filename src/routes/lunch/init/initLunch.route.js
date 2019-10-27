import { to } from "../../../utils/asyncHelpers";
import { slackApi } from "../../../utils/slack/api";
import initLunchView from "./initLunchView";

export const initLunch = async (req, res) => {
  const { trigger_id, channel_id } = req.body;

  const [err] = await to(
    slackApi.views.open({
      trigger_id,
      view: {
        ...initLunchView,
        private_metadata: JSON.stringify({
          channel_id,
        }),
      },
    }),
  );

  if (err) {
    console.log(JSON.stringify(err));
    res.status(500);
    res.send({ Error: "Server error" });
  } else {
    res.status(200);
    res.send();
  }
};
