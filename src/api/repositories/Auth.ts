import { prisma } from "../../database";

import { User } from "../../@types";

import { hashPassword, isUser, createdAt } from "../../utils";

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
        code: true,
      },
    });

    await isUser(user);

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
          updatedAt: createdAt(),
        },
      });
    } else {
      await prisma.user.update({
        where: {
          userId: userId,
        },
        data: {
          ...data,
          updatedAt: createdAt(),
        },
      });
    }
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

  static async confirmEmail(userId: string): Promise<void> {
    await prisma.user.update({
      where: {
        userId: userId,
      },
      data: {
        active: true,
      },
    });
  }
}
