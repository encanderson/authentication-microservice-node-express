import * as dotenv from "dotenv";

import { Config } from "../@types";

dotenv.config();

const environment = process.env.NODE_ENV;

export let config: Config = {
  secretkey: process.env.SECRET_KEY,
  POSTGRESQL_URI: process.env.POSTGRESQL_URI,
  PORT: 7000,
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS,
  emailServer: process.env.MAIL_SERVER,
  geobingKey: process.env.GEOBING_KEY,
  corsOptions: {
    origin: "*",
    "Access-Control-Allow-Credentials": true,
  },
  allowlist: {
    prefix: "allowlist-refresh-token:",
  },
  blocklist: {
    prefix: "blocklist-access-token:",
  },
  url: "http://oriedu.orianderson.com",
  root: "./src",
};

if (environment === "production") {
  config = {
    secretkey: process.env.SECRET_KEY,
    POSTGRESQL_URI: process.env.POSTGRESQL_URI,
    PORT: 6000,
    emailUser: process.env.EMAIL_USER_ZOHO,
    emailPass: process.env.EMAIL_PASS_ZOHO,
    emailServer: process.env.MAIL_SERVER_ZOHO,
    geobingKey: process.env.GEOBING_KEY,
    corsOptions: {
      origin: [
        "https://www.tiadidi.com.br",
        "https://secretaria.tiadidi.com.br",
      ],
      "Access-Control-Allow-Credentials": true,
    },
    allowlist: {
      prefix: "allowlist-refresh-token:",
      url: "redis://redis:6379",
    },
    blocklist: {
      prefix: "blocklist-access-token:",
      url: "redis://redis:6379",
    },
    url: "http://www.tiadidi.com.br",
    root: "./dist",
  };
} else {
  config = {
    secretkey: process.env.SECRET_KEY,
    POSTGRESQL_URI: process.env.POSTGRESQL_URI,
    PORT: 7000,
    emailUser: process.env.EMAIL_USER,
    emailPass: process.env.EMAIL_PASS,
    emailServer: process.env.MAIL_SERVER,
    geobingKey: process.env.GEOBING_KEY,
    corsOptions: {
      origin: "*",
      "Access-Control-Allow-Credentials": true,
    },
    allowlist: {
      prefix: "allowlist-refresh-token:",
    },
    blocklist: {
      prefix: "blocklist-access-token:",
    },
    url: "http://oriedu.orianderson.com",
    root: "./src",
  };
}
