import { config } from "./";

const settingsEmailProduction = {
  host: config.emailServer,
  port: 465,
  secure: true,
  auth: {
    user: config.emailUser,
    pass: config.emailPass,
  },
};

export const createEmailSettings = async (): Promise<unknown> => {
  return settingsEmailProduction;
};
