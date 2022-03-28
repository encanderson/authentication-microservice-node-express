import express from "express";

import { router as authRouter } from "./auth.routes";

const routes = (app: express.Application): void => {
  app.use("/api/v1", authRouter);
};

export default routes;
