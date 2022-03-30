import { AuthRepository } from "../repositories";
import { hashFunction, generateCode, AccessToken } from "../../utils";
import { htmlVerify } from "../models";
import { sendEmail } from "./";

export class UpdateServices {
  static async verifyUser(cpf: string): Promise<string> {
    const userId = hashFunction(cpf);

    const user = await AuthRepository.verifyUser(userId);

    const code = generateCode();

    await sendEmail(user.email, "Verificar Usuário", htmlVerify(code));

    await AuthRepository.update(userId, { code: code });

    const token = AccessToken.generateToken({
      userId: user.userId,
      app: user.app,
      expires: "3m",
    });

    return token;
  }

  static async updatePassword(password: string, token: string): Promise<void> {
    const { userId } = AccessToken.verifyToken(token);

    await AuthRepository.update(userId, { password: password });
  }

  static async updateEmail(email: string, token: string): Promise<void> {
    const payload = AccessToken.verifyToken(token);

    const userId = payload.userId;

    await AuthRepository.update(userId, { email: email });
  }
}
