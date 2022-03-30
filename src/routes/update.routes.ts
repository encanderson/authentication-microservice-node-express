import express from "express";

import { UpdateControllers } from "../api/controllers";

export const router = express.Router();

router.post("/recovery-password", UpdateControllers.verifyUser);
router.put("/recovery-password", UpdateControllers.updatePassword);
router.put("/update-email", UpdateControllers.updateEmail);
