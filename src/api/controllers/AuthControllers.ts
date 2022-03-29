import { Request, Response, NextFunction } from "express";

import { AuthServices } from "../services";
import { setHeaderTokens } from "../../utils";

export class AuthControllers {
  static async signIn(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      res.status(200).send(req.user);
    } catch (err) {
      next(err);
    }
  }

  static async checkSignIn(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { code } = req.body;

      const user = await AuthServices.checkSignIn(req.user, code);

      setHeaderTokens(res, user);

      res.status(200).send({
        message: "Seja bem vindo de volta.",
      });
    } catch (err) {
      next(err);
    }
  }
}
