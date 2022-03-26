import express, { Request, Response, NextFunction } from "express";

import {
  NotFound,
  NotSupport,
  NotAuthenticate,
  InvalidToken,
  Forbidden,
} from "../../errors";
import { ErrorType } from "@src/@types";

import logger from "../../logs";

export const errorMiddleware = (app: express.Application): void => {
  app.use(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (error: ErrorType, req: Request, res: Response, next: NextFunction) => {
      let status = 500;

      logger.error(error.message);

      if (error instanceof NotFound) {
        status = 404;
      }

      if (error instanceof NotSupport) {
        status = 406;
      }

      if (error instanceof NotAuthenticate || error instanceof InvalidToken) {
        status = 401;
      }

      if (error instanceof Forbidden) {
        status = 403;
      }

      res.status(status).send({
        message: error.message,
      });
    }
  );
};
