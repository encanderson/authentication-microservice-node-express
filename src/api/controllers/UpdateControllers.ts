import { Request, Response, NextFunction } from "express";

import { UpdateServices } from "../services";

export class UpdateControllers {
  static async verifyUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const cpf = req.body.cpf;

      const token = await UpdateServices.verifyUser(cpf);
      res.status(200).send({
        token: token,
      });
    } catch (err) {
      next(err);
    }
  }

  static async updatePassword(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { password, token } = req.body;

      await UpdateServices.updatePassword(password, token);

      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }

  static async updateEmail(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { email, token } = req.body;

      await UpdateServices.updateEmail(email, token);

      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}
