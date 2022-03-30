import { Request, Response, NextFunction } from "express";

import { AuthServices } from "../services";
import { setHeaderTokens, getTokens } from "../../utils";

export class AuthControllers {
  static async confirmEmail(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.params.token;

      await AuthServices.confirmEmail(token);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }

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

  static async refreshAccessToken(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }

  static async logout(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { accessToken, refreshToken } = getTokens(req);

      await AuthServices.logout(accessToken, refreshToken);

      res.setHeader("Access-Token", "");

      res.setHeader("Refresh-Token", "");

      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }

  static async confirmUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { code, token } = req.body;

      const accessToken = await AuthServices.confirmUser(token, code);

      res.status(200).send({
        token: accessToken,
      });
    } catch (err) {
      next(err);
    }
  }
}
