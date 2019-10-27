import { WebClient } from "@slack/web-api";

const { OAUTH_TOKEN } = process.env;

export const slackApi = new WebClient(OAUTH_TOKEN);
