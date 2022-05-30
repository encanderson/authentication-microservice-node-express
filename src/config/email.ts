import nodemailer from "nodemailer";

import { config } from "./";

const settingsEmailProduction = {
  host: config.emailServer,
  port: 465,
  secure: true,
  auth: {
    user: config.emailUser,
    pass: config.emailPass,
  },
  tls: { rejectUnauthorized: false },
};

const settingsEmailDevelopment = (testAccount: nodemailer.TestAccount) => ({
  host: "smtp.ethereal.email",
  auth: testAccount,
});

export const createEmailSettings = async (): Promise<unknown> => {
  if (process.env.NODE_ENV === "production") {
    return settingsEmailProduction;
  } else {
    const testAccount = await nodemailer.createTestAccount();
    return settingsEmailDevelopment(testAccount);
  }
};
