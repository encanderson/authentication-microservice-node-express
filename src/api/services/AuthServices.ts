import { AuthRepository } from "../repositories";

import { NotAuthenticate, InvalidToken } from "../../errors";
import { User } from "../../@types";

export class AuthServices {
  static async checkSignIn(userId: string, userCode: number): Promise<User> {
    // const user = await AuthRepository.
  }
}
