import { AuthRepository } from "../repositories";

import { NotAuthenticate } from "../../errors";
import { AccessToken, RefreshToken } from "../../utils";
import { User } from "../../@types";

export class AuthServices {
  static async checkSignIn(user: User, userCode: number): Promise<User> {
    const code = await AuthRepository.confirmUser(user.userId);

    if (code != userCode) {
      throw new NotAuthenticate("Código inválido.");
    }

    const accessToken = AccessToken.generateToken({
      userId: user.userId,
      expires: "15m",
      app: user.app,
      id: user.id,
    });

    const { newRefreshToken } = await RefreshToken.generateToken({
      userId: user.userId,
      app: user.app,
    });

    user.accessToken = accessToken;
    user.refreshToken = newRefreshToken;

    return user;
  }
}
