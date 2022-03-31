import { Request, Response } from "express";

import { config } from "../../config";

export const getSwagger = async (
  req: Request,
  res: Response
): Promise<void> => {
  res.sendFile("swagger.json", { root: config.root + "/config" });
};
