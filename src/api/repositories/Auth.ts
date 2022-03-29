import { prisma } from "../../database";

import { User } from "../../@types";

import { hashPassword, AccessToken } from "../../utils";
import { NotAuthenticate } from "../../errors";
import { sendEmail } from "../services";
import { htmlCode } from "../models";

export class AuthRepository {
  static async verifyUser(userId: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: {
        userId: userId,
      },
      select: {
        id: true,
        userId: true,
        active: true,
        email: true,
        password: true,
        app: true,
      },
    });

    if (!user.active) {
      const token = AccessToken.generateToken({
        userId: userId,
        expires: "180m",
        app: user.app,
      });

      await sendEmail(
        user.email,
        "Verificação de email",
        htmlCode(token, "confirmar-registro")
      );

      throw new NotAuthenticate(
        "Email não confirmado, por favor, verifique o seu email."
      );
    }

    if (!user) {
      return null;
    }

    return user;
  }

  static async update(userId: string, data: User): Promise<void> {
    if (data.password) {
      const password = await hashPassword(data.password);

      await prisma.user.update({
        where: {
          userId: userId,
        },
        data: {
          password: password,
        },
      });
    }

    await prisma.user.update({
      where: {
        userId: userId,
      },
      data: {
        code: data.code,
      },
    });
  }

  static async confirmUser(userId: string): Promise<number> {
    const user = await prisma.user.findUnique({
      where: {
        userId: userId,
      },
      select: {
        code: true,
      },
    });

    if (user) {
      return user.code;
    }
  }
}
