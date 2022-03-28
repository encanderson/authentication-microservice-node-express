import express from "express";

import { AuthControllers } from "../api/controllers";

import { AuthMiddleware } from "../api/middleware";

export const router = express.Router();

router.post("/auth/login", AuthMiddleware.signIn, AuthControllers.signIn);
router.post(
  "/auth/verify-user",
  AuthMiddleware.authenticate,
  AuthControllers.checkSignIn
);
