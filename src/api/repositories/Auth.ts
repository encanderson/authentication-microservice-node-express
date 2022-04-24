import { prisma } from "../../database";

import { User } from "../../@types";

import { hashPassword, isUser, createdAt } from "../../utils";

export class AuthRepository {
  static async verifyUser(user_id: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: {
        user_id: user_id,
      },
      select: {
        id: true,
        user_id: true,
        active: true,
        email: true,
        password: true,
        app: true,
        code: true,
      },
    });

    await isUser(user);

    return user;
  }

  static async update(user_id: string, data: User): Promise<void> {
    if (data.password) {
      const password = await hashPassword(data.password);

      await prisma.user.update({
        where: {
          user_id: user_id,
        },
        data: {
          password: password,
          updatedAt: createdAt(),
        },
      });
    } else {
      await prisma.user.update({
        where: {
          user_id: user_id,
        },
        data: {
          ...data,
          updatedAt: createdAt(),
        },
      });
    }
  }

  static async confirmUser(user_id: string): Promise<number> {
    const user = await prisma.user.findUnique({
      where: {
        user_id: user_id,
      },
      select: {
        code: true,
      },
    });

    if (user) {
      return user.code;
    }
  }

  static async confirmEmail(user_id: string): Promise<void> {
    await prisma.user.update({
      where: {
        user_id: user_id,
      },
      data: {
        active: true,
      },
    });
  }
}
