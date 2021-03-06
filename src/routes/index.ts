import express from "express";

import { router as docRouter } from "./docs.routes";
import { router as authRouter } from "./auth.routes";
import { router as updateRouter } from "./update.routes";

const routes = (app: express.Application): void => {
  app.use("/docs", docRouter);
  app.use("/api/v1", authRouter);
  app.use("/api/v1", updateRouter);
};

export default routes;
