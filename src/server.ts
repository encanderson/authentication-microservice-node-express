import http from "http";
import express, { json, urlencoded } from "express";
import cors from "cors";
require("express-async-errors");

import routes from "./routes";

import { headersMiddleware, errorMiddleware } from "./api/middleware";

require("./api/subscribers");

import logger from "./logs";
import { config } from "./config";

import { initialize } from "./api/services";

export class ServerSetup {
  httpServer: http.Server;
  app: express.Application;
  constructor() {
    this.app = express();
  }

  public async init(): Promise<void> {
    this.setupExpress();
  }

  private setupExpress(): void {
    this.app.use(cors(config.corsOptions));

    initialize(this.app);

    headersMiddleware(this.app);

    this.app.use(
      json({
        limit: "50mb",
      })
    );
    this.app.use(
      urlencoded({
        extended: true,
        limit: "50mb",
      })
    );

    routes(this.app);

    errorMiddleware(this.app);
  }

  start(PORT: number): void {
    this.httpServer = http.createServer(this.app);

    this.httpServer.listen(PORT, () => {
      logger.info(`Listening at ${PORT}`);
    });
  }
}
