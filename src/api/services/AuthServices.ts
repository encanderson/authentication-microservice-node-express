import { AuthRepository } from "../repositories";

import { NotAuthenticate } from "../../errors";
import { AccessToken, RefreshToken } from "../../utils";
import { User } from "../../@types";
import { managerAllowlist, Blocklist } from "../subscribers";

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

  static async confirmEmail(token: string): Promise<void> {
    const payload = AccessToken.verifyToken(token);

    await AuthRepository.confirmEmail(payload.userId);
  }

  static async logout(
    accessToken: string,
    refreshToken: string
  ): Promise<void> {
    try {
      await managerAllowlist.delete(refreshToken);

      await Blocklist.setToken(accessToken);
    } catch (err) {
      throw new NotAuthenticate("Token Inválido");
    }
  }

  static async confirmUser(token: string, userCode: number): Promise<string> {
    const { userId } = AccessToken.verifyToken(token);

    const code = await AuthRepository.verifyUser(userId);

    if (code != userCode) {
      throw new NotAuthenticate("Código Inválido");
    }

    await Blocklist.setToken(token);

    const accessToken = AccessToken.generateToken({
      userId: userId,
      app: "",
      expires: "5m",
    });

    return accessToken;
  }
}
