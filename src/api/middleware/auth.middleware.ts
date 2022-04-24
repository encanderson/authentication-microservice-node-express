import { Request, Response, NextFunction } from "express";
import passport from "passport";

import { AccessToken, setNewCredentials } from "@src/utils";
import { InvalidToken } from "@src/errors";
import { Blocklist } from "../subscribers";

export class AuthMiddleware {
  static async signIn(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    passport.authenticate("local", { session: false }, (error, user) => {
      if (error && error.name === "NotAuthenticate") {
        return res.status(401).send({ message: error.message });
      }
      if (error && error.name === "NotFound") {
        return res.status(404).send({ message: error.message });
      }

      if (error) {
        return res.status(500).send({ message: error.message });
      }

      if (!user) {
        return res.status(401).send({ message: "Acesso negado." });
      }

      const token = AccessToken.generateToken({
        user_id: user.user_id,
        expires: "3m",
        app: user.app,
        id: user.id,
      });

      delete user.user_id;

      req.user = {
        ...user,
        token,
      };
      next();
    })(req, res, next);
  }

  static async authenticate(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      passport.authenticate(
        "bearer",
        { session: false },
        async (error, payload) => {
          if (!payload) {
            return res.status(401).send({
              message: new InvalidToken("Token ou Refresh Token Inválido")
                .message,
            });
          }

          if (error && error.name === "InvalidToken") {
            return res.status(401).send({ message: error.message });
          }

          if (error && error.name === "NotFound") {
            return res.status(401).send({ message: error.message });
          }

          if (error) {
            return res.status(500).send({ message: error.message });
          }

          req.user = {
            user_id: payload.user_id,
            app: payload.app,
            id: payload.id,
          };
          next();
        }
      )(req, res, next);
    } catch (err) {
      next(err);
    }
  }

  static async refreshToken(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      await setNewCredentials(req, res);

      next();
    } catch (err) {
      next(err);
    }
  }

  static async confirmUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const token = req.body.token;

    try {
      await Blocklist.verifyToken(token);

      next();
    } catch (err) {
      next(err);
    }
  }
}
