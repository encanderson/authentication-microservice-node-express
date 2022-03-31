import express, { Request, Response, NextFunction } from "express";

import { NotSupport } from "../../errors";

import { formatsAccepts } from "@src/config";

export const headersMiddleware = (app: express.Application): void => {
  app.use((req: Request, res: Response, next: NextFunction): void => {
    res.setHeader("X-Powered-By", "PHP/7.1.7");

    const applicationFormat = req.header("Accept");

    if (
      formatsAccepts.indexOf(applicationFormat) === -1 &&
      req.originalUrl !== "/docs"
    ) {
      throw new NotSupport(applicationFormat);
    }

    res.setHeader("Content-Type", applicationFormat);

    res.setHeader(
      "Access-Control-Expose-Headers",
      "Refresh-Token, Access-Token"
    );
    next();
  });
};
