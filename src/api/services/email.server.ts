import nodemailer from "nodemailer";

import { config, createEmailSettings } from "@src/config";
import logger from "@src/logs";

interface MailOptions {
  from: string;
  to: string;
  subject: string;
  html: string;
}

const createTransporter = async (mailOptions: MailOptions): Promise<void> => {
  const settingsEmail = await createEmailSettings();
  const transporter = nodemailer.createTransport(settingsEmail);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      logger.error(error);
    } else {
      if (process.env.NODE_ENV !== "production") {
        logger.info("URL: " + nodemailer.getTestMessageUrl(info));
      }
    }
  });
};

export const sendEmail = async (
  email: string,
  subject: string,
  html: string
): Promise<void> => {
  const mailOptions = {
    from: config.emailUser,
    to: email,
    subject: subject,
    html: html,
  };

  await createTransporter(mailOptions);
};
