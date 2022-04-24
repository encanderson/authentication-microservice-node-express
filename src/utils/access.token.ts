import jwt from "jsonwebtoken";

import { InvalidToken } from "../errors";

import { config } from "@src/config";

interface Payload {
  user_id: string;
  app: string;
}

export class AccessToken {
  static generateToken(data: {
    user_id: string;
    expires: string;
    app: string;
    id?: string;
  }): string {
    const token = jwt.sign(
      { user_id: data.user_id, app: data.app, id: data.id },
      config.secretkey,
      {
        expiresIn: data.expires,
      }
    );
    return token;
  }

  static verifyToken(token: string): Payload {
    try {
      const payload = jwt.verify(token, config.secretkey) as Payload;

      return payload;
    } catch (err) {
      throw new InvalidToken(err.message);
    }
  }
}
