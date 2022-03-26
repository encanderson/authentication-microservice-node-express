import * as redis from "redis";
import jwt from "jsonwebtoken";

import { managerList } from "@src/database";

import { hashFunction } from "@src/utils";
import { InvalidToken } from "../../errors";

import { config } from "../../config";
import { JwtPayload } from "@src/@types";

const blocklist = redis.createClient(config.blocklist);

const managerBlocklist = managerList(blocklist);

export class Blocklist {
  static async setToken(token: string): Promise<void> {
    const tokenHash = hashFunction(token);

    const { exp } = jwt.decode(token) as JwtPayload;
    await managerBlocklist.setKey(tokenHash, "", exp);
  }

  static async verifyToken(token: string): Promise<void> {
    const tokenHash = hashFunction(token);
    const check = await managerBlocklist.isKey(tokenHash);
    if (check) {
      throw new InvalidToken("Token inválidado.");
    }
  }

  static async delete(token: string): Promise<void> {
    await managerBlocklist.delete(token);
  }
}
