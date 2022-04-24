import { AuthRepository } from "../repositories";
import { hashFunction, generateCode, AccessToken } from "../../utils";
import { htmlVerify } from "../models";
import { sendEmail } from "./";

export class UpdateServices {
  static async verifyUser(cpf: string): Promise<string> {
    const user_id = hashFunction(cpf);

    const user = await AuthRepository.verifyUser(user_id);

    const code = generateCode();

    await sendEmail(user.email, "Verificar Usuário", htmlVerify(code));

    await AuthRepository.update(user_id, { code: code });

    const token = AccessToken.generateToken({
      user_id: user.user_id,
      app: user.app,
      expires: "3m",
    });

    return token;
  }

  static async updatePassword(password: string, token: string): Promise<void> {
    const { user_id } = AccessToken.verifyToken(token);

    await AuthRepository.update(user_id, { password: password });
  }

  static async updateEmail(email: string, token: string): Promise<void> {
    const payload = AccessToken.verifyToken(token);

    const user_id = payload.user_id;

    await AuthRepository.update(user_id, { email: email });
  }
}
