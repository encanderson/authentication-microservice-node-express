import { Request, Response } from "express";

export const getSwagger = async (
  req: Request,
  res: Response
): Promise<void> => {
  res.sendFile("swagger.json", { root: "./src/config" });
};
