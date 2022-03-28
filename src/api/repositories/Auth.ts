import { prisma } from "../../database";

import { User } from "../../@types";

import { hashPassword } from "../../utils";

export class AuthRepository {
  static async verifyUser(userId: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: {
        userId: userId,
      },
      select: {
        id: true,
        active: true,
        email: true,
        password: true,
        app: true,
      },
    });

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
}
