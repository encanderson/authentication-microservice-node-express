import { AuthRepository } from "../repositories";
import {
  hashFunction,
  generateCode,
  AccessToken,
  comparePassword,
  hashPassword,
} from "../../utils";
import { htmlVerify } from "../models";
import { sendEmail } from "./";
import { Form } from "../../@types";

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

  static async updatePassword(
    newPassword: string,
    token: string
  ): Promise<void> {
    const { user_id } = AccessToken.verifyToken(token);

    const password = await hashPassword(newPassword);

    await AuthRepository.update(user_id, { password: password });
  }

  static async updateEmail(email: string, user_id: string): Promise<void> {
    await AuthRepository.update(user_id, { email: email });
  }

  static async update(user_id: string, data: Form): Promise<void> {
    if (data.password) {
      const user = await AuthRepository.getUser(user_id);

      await comparePassword(data.password, user.password);

      const password = await hashPassword(data.newPassword);

      await AuthRepository.update(user_id, { password: password });
    } else {
      await AuthRepository.update(user_id, data);
    }
  }
}
