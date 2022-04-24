import { AuthRepository } from "../repositories";

import { NotAuthenticate } from "../../errors";
import { AccessToken, RefreshToken } from "../../utils";
import { User } from "../../@types";
import { managerAllowlist, Blocklist } from "../subscribers";

export class AuthServices {
  static async checkSignIn(user: User, userCode: number): Promise<User> {
    const code = await AuthRepository.confirmUser(user.user_id);

    if (code != userCode) {
      throw new NotAuthenticate("Código inválido.");
    }

    const accessToken = AccessToken.generateToken({
      user_id: user.user_id,
      expires: "15m",
      app: user.app,
      id: user.id,
    });

    const { newRefreshToken } = await RefreshToken.generateToken({
      user_id: user.user_id,
      app: user.app,
    });

    user.accessToken = accessToken;
    user.refreshToken = newRefreshToken;

    return user;
  }

  static async confirmEmail(token: string): Promise<void> {
    const payload = AccessToken.verifyToken(token);

    await AuthRepository.confirmEmail(payload.user_id);
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

  static async confirmUser(token: string, code: number): Promise<string> {
    const { user_id } = AccessToken.verifyToken(token);

    const user = await AuthRepository.verifyUser(user_id);

    if (user.code != code) {
      throw new NotAuthenticate("Código Inválido");
    }

    await Blocklist.setToken(token);

    const accessToken = AccessToken.generateToken({
      user_id: user_id,
      app: "",
      expires: "5m",
    });

    return accessToken;
  }
}
