import express from "express";

import { AuthControllers } from "../api/controllers";

import { AuthMiddleware } from "../api/middleware";

export const router = express.Router();

router.get("/auth/:token", AuthControllers.confirmEmail);
router.post("/auth/login", AuthMiddleware.signIn, AuthControllers.signIn);
router.post(
  "/auth/verify-user",
  AuthMiddleware.authenticate,
  AuthControllers.checkSignIn
);
router.post(
  "/auth/refresh-token",
  AuthMiddleware.refreshToken,
  AuthControllers.refreshAccessToken
);
router.post(
  "/auth/logout",
  AuthMiddleware.authenticate,
  AuthControllers.logout
);
router.post("/auth/confirm-user", AuthControllers.confirmUser);
