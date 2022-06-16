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
      const { email } = req.body;

      const { user_id } = req.user;

      await UpdateServices.updateEmail(email, user_id);

      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }

  static async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { user_id } = req.user;

      const { email, picture, password, newPassword } = req.body;

      if (email) {
        await UpdateServices.update(user_id, { email: email });
      }

      if (picture) {
        await UpdateServices.update(user_id, { picture: picture });
      }

      if (password) {
        await UpdateServices.update(user_id, {
          password: password,
          newPassword: newPassword,
        });
      }

      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}
