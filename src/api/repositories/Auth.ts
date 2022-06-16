import { prisma } from "../../database";

import { User } from "../../@types";

import { isUser, createdAt } from "../../utils";

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

  static async get(user_id: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: {
        user_id: user_id,
      },
      select: {
        id: true,
        app: true,
        email: true,
        picture: true,
        name: true,
        user_id: true,
      },
    });

    return user;
  }

  static async update(user_id: string, data: User): Promise<void> {
    await prisma.user.update({
      where: {
        user_id: user_id,
      },
      data: {
        ...data,
        updated_at: createdAt(),
      },
    });
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
        consents: {
          terms: true,
          privacy: true,
        },
      },
    });
  }

  static async getUser(user_id: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: {
        user_id: user_id,
      },
      select: {
        password: true,
      },
    });

    return user;
  }
}
