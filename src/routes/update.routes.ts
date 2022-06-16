import express from "express";

import { UpdateControllers } from "../api/controllers";
import { AuthMiddleware } from "../api/middleware";

export const router = express.Router();

router.post("/recovery-password", UpdateControllers.verifyUser);
router.put("/recovery-password", UpdateControllers.updatePassword);
router.put("/auth", AuthMiddleware.authenticate, UpdateControllers.update);
