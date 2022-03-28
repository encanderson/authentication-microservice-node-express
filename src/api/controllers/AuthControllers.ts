import { Request, Response, NextFunction } from "express";

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

      res.status(200).send(code);
    } catch (err) {
      next(err);
    }
  }
}
