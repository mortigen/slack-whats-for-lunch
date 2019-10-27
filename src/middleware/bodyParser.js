import bodyParser from "body-parser";

export const urlencodedParser = bodyParser.urlencoded({ extended: false });

export const jsonParser = bodyParser.json();
