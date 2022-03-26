import crypto from "crypto";
import moment from "moment";

import { InvalidToken } from "../errors";
import { managerAllowlist } from "../api/subscribers";

interface RefreshData {
  newRefreshToken: string;
  expirationDate: number;
}

export class RefreshToken {
  static async generateToken(data: {
    userId: string;
    app: string;
    expires: string;
  }): Promise<RefreshData> {
    const expirationDate = moment().add(3, "d").unix();
    const newRefreshToken = crypto.randomBytes(24).toString("hex");

    await managerAllowlist.setKey(
      newRefreshToken,
      JSON.stringify(data),
      expirationDate
    );
    return { newRefreshToken, expirationDate };
  }

  static async verifyToken(refreshToken: string): Promise<string> {
    if (!refreshToken) {
      throw new InvalidToken("Refresh Token não informado");
    }
    const credentials = await managerAllowlist.getKey(refreshToken);

    if (!credentials) {
      throw new InvalidToken("Refresh Token inválido");
    }

    return credentials;
  }

  static async deleteToken(refreshToken: string): Promise<void> {
    await managerAllowlist.delete(refreshToken);
  }

  static async getUserId(refreshToken: string): Promise<string | null> {
    const userId = await managerAllowlist.getKey(refreshToken);

    return userId;
  }
}
// userId, "15m"
